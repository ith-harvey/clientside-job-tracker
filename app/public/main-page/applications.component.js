(function(){
  angular.module('app')
    .component('applications', {
      templateUrl: './main-page/applications.template.html',
      controller: controller,
    })

  controller.$inject = ['applicationService', '$cookies', 'jobService']

  function controller(applicationService, $cookies, jobService){
    const vm = this
      vm.applications = []


    vm.$onInit = function () {
      const userId = $cookies.get('id')
      vm.userId = $cookies.get('id')

      // if the user is logged in run code
      if (userId) {
        applicationService.getAllApplicationsForUser(userId).then( response => {

          response.data.forEach( application => {

            jobService.getJob(application.jobId).then( job => {

              if (job.data === "") {
                console.log("broken job hit");
              } else {
                job.data.applicationId = application.id
                vm.applications.push(job.data)

              }
            })
          })
        })

    } else {
      console.log('user is not logged in');
    }
  }

  }

})()

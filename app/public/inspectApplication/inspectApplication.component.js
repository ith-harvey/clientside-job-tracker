(function(){
  angular.module('app')
    .component('inspectApplication', {
      templateUrl: './inspectApplication/inspectApplication.template.html',
      controller: controller,
    })

  controller.$inject = ['applicationService', '$cookies', 'jobService','$stateParams']

  function controller(applicationService, $cookies, jobService, $stateParams){
    const vm = this
    vm.job= ''



    vm.$onInit = function () {
      const userId = $cookies.get('id')
      console.log('userId =', userId);
      console.log('stateParams', $stateParams.appId);
      console.log('stateParams', $stateParams.appTitle);
      console.log('stateParams', );
      vm.appTitle = $stateParams.appTitle
      jobService.getJob($stateParams.jobId).then( job => {
        if (job.data === "") {
          console.log("broken job hit");
        } else {
          console.log('job data',job.data);
          vm.job= job.data
         }
      })
    }

  }

})()

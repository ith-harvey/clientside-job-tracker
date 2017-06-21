(function(){

  angular.module('app').service('actionsService', actionsService)

  actionsService.$inject = ['$http', 'APPLICATION_SERVICE_URL']
  function actionsService($http, APPLICATION_SERVICE_URL){
    const vm = this

    vm.updateAction = function(keyUpdating,id) {
      const actionsUrl = `${APPLICATION_SERVICE_URL}/actions/` + id
      let bool
      if (keyUpdating === 'complete') {
        bool = true
      } else {
        bool = false
      }
      const data = `{"${keyUpdating}": ${bool}}`
      console.log('data', data);
      return $http.patch(actionsUrl,data)
    }

    vm.getActions = function(userId) {
      const actionsUrl = `${APPLICATION_SERVICE_URL}/actions/user/${userId}`
      return $http.get(actionsUrl)
    }

  }
})()

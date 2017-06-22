(function(){
  angular.module('app')
    .component('actions', {
      templateUrl: './main-page/actions.template.html',
      controller: controller,
    })
    controller.$inject = ['actionsService', '$cookies']

  function controller(actionsService, $cookies) {
    const vm = this
    vm.noRemaningActions = false
    vm.userId = $cookies.get('id')

    vm.$onInit = function () {
      const userId = $cookies.get('id')
       loadActions(userId).then( response => {
         vm.actions = response
       })

    }

    vm.updateAction = function (action,keyUpdating,id) {

      if(keyUpdating === 'complete') {
        action[keyUpdating] = true
      } else {
        action[keyUpdating] = false
      }
      console.log('prior to load actions call',vm.actions);
      actionsService.updateAction(keyUpdating,id).then( response => {
        console.log('this is the response', response);
        loadActions(userId).then( response => {
          vm.actions = response
        })
      })
    }

    function loadActions(userId) {
      return actionsService.getActions(userId).then( response => {
        console.log(response.data);
          return response.data.filter( action => {
            if(action.active && !action.complete) {
              return action
            }
          })
        })
    }

  }



})()

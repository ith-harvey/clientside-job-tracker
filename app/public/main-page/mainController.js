(function(){
  angular.module('app')
    .component('dashboard', {
      templateUrl: '/../main-page/main-template.html',
      controller: mainController,
    })

    mainController.$inject = ['$state', '$cookies']

  function mainController($state, $cookies){
    const vm = this

    vm.$onInit = function () {
      const userId = $cookies.get('id')

      if(!userId) {
        $state.go('loginPage');
      }

    }

  }

})()

(function (){
    'use strict';

    angular.module('component.users', []).controller('UsersController', usersController);
    usersController.$inject = ['UserService']

    function usersController(UserService) {
        var vm = this;

        vm.users = UserService.all();
    }


}());
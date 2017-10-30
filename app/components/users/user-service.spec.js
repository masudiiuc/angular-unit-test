describe('User Service', function () {
    var UserService;

    beforeEach(angular.mock.module('component.users.service'));

    beforeEach(inject(function(_UserService_){

        UserService = _UserService_;
    }));

    it(' Should Exits', function (){
        expect(UserService).toBeDefined();
    });

});
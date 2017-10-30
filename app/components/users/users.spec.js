describe('UsersController', function () {
    var $controller, UsersController, userService;

    var userList = [
        { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
        { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
        { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
        { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];

    beforeEach(angular.mock.module('component.users'));
    beforeEach(angular.mock.module('component.users.service'));

    beforeEach(inject(function (_$controller_, _UserService_){
        $controller = _$controller_;
        userService = _UserService_;

        spyOn(userService, 'all').and.callFake(function (){
            return userList;
        });

        UsersController = $controller('UsersController', {'UserService': userService});
    }));

    it (' should be defined ', function () {
        expect(UsersController).toBeDefined();
    });

    it('should Initlialized with a call to UserService.all()', function (){
        expect(userService.all).toHaveBeenCalled();
        expect(userService.all()).toEqual(userList);
    });
});
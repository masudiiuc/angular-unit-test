describe('Pokeman factory service', function () {

    var PokemanFactory, $q, $httpBackend;
    var RESPONSE_SUCCESS = {
        'id': 25,
        'name': 'pikachu',
        'sprites': {
            'front_default': 'http://pokeapi.co/media/sprites/pokemon/25.png'
        },
        'types': [{
            'type': { 'name': 'electric' }
        }]
    };
    var RESPONSE_ERROR = {
        'detail': 'Not found.'
    };

    beforeEach(angular.mock.module('api.pokeman'));

    beforeEach(inject(function (_ApiPokemanFactory_, _$q_, _$httpBackend_) {
        PokemanFactory = _ApiPokemanFactory_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exists', function () {
        expect(PokemanFactory).toBeDefined();
    });

    describe('findByName()', function () {
        var result;

        beforeEach(function() {
            result = {};
            spyOn(PokemanFactory, 'findByName').and.callThrough();
        });

        it('should return Pokeman When called with a valid Name', function (){
            $httpBackend.whenGET('http://pokeapi.co/api/v2/pokemon/' + 'pikachu')
                .respond(200, $q.when(RESPONSE_SUCCESS));

            expect(PokemanFactory.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            PokemanFactory.findByName('pikachu').then(function (response){
                result = response;
            });

            $httpBackend.flush();

            expect(PokemanFactory.findByName).toHaveBeenCalledWith('pikachu');
            expect(result.id).toEqual(25);
            expect(result.name).toEqual('pikachu');
            expect(result.sprites.front_default).toContain('.png');
            expect(result.types[0].type.name).toEqual('electric');

        });

        it('should return a 404 when called with an invalid name', function() {
            var search = 'godzilla';

            $httpBackend.whenGET('http://pokeapi.co/api/v2/pokemon/' + search).respond(404, $q.reject(RESPONSE_ERROR));

            expect(PokemanFactory.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            PokemanFactory.findByName(search).catch(function(res) {
                result = res;
            });
            $httpBackend.flush();

            expect(PokemanFactory.findByName).toHaveBeenCalledWith(search);
            expect(result.detail).toEqual('Not found.');
        });
    });
});
(function (){
    'use strict';

    angular.module('api.pokeman', []).factory('ApiPokemanFactory', apiPokemanFactory);
    apiPokemanFactory.$inject = ['$http', '$q'];

    function apiPokemanFactory($http, $q) {
        var Pokemon = {};

        Pokemon.findByName = function(name) {
            return $http.get('http://pokeapi.co/api/v2/pokemon/' + name)
                .then(function(res) {
                    return res.data;
                })
                .catch(function(res) {
                    return res.data;
                });;
        };


        return Pokemon;
    }
}());
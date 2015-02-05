'use strict';

/**
 * @ngdoc function
 * @name 01HolaMundoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 01HolaMundoApp
 */
angular.module('01HolaMundoApp')
  .controller('MainCtrl', function ($scope) {
    
    this.borrarElemento=function(dato){
        //servicio.borrar(dato) //actualizar el modelo en el servidor
        var index=this.awesomeThings.indexOf(dato);
        this.awesomeThings.splice(index,1);
    };
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



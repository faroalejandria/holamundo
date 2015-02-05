var app=angular.module('01HolaMundoApp');

var fnDirectiva = function(){ //esta es la funcion que configura la directiva
  
    var resultado = {};
    resultado.restrict = 'AE';// 'E' o 'M' 
    resultado.replace = 'true';
    //resultado.template='<p>Holaaaaaa</p>'
    resultado.template='<p>Holaaaaaa</p>'
    return resultado;
    
};

app.directive('mmCreditos', fnDirectiva);
//la funcion de arriba todavía no se ha ejecutado, lo hará cuando Angular invoque directiva

app.directive('mmColores', function() {
    var $ = angular.element;
    var colors = ['#FFAA00', '#FFD300', '#531DFF', '#1A60FF', '#FFCF70', '#FFE670', '#9E80FF'];

    var replaceWithColors = function(element) {
        var originalText = element.text();
        var $newContent = $('<span>');
        for (var i=0; i < originalText.length; i++) {
            var colorIdx = i % colors.length;
            var char = originalText.charAt(i);
            $newContent.append(
                $('<span>').css('color', colors[colorIdx]).text(char)
            );
        }
        element.html($newContent);
    };

    return {
        restrict: 'AE',
        link : function(scope, element, attrs) {
            replaceWithColors(element);
        }
    };

    
});



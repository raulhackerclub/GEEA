  var socket = io.connect();
  var myApp = angular.module('myApp', []);

  myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.numero = 0;

    socket.on('connect', function() {
      console.log("Estou conectado ao servidor");
    });

    $scope.$watch('numero', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        socket.emit('numero_display', { numero: $scope.numero });
      }
    });

    socket.on('numero_display', function (data) {
      $scope.numero = data.numero;
      if ( ! $scope.$$phase) $scope.$apply()
    });

    // function monitor(type) {
    //   socket.on(type, function () { console.log(type); });
    // }
    //
    // monitor('connecting');
    // monitor('connect');
    // monitor('reconnect');
    // monitor('reconnecting');
    // monitor('disconnect');
  }]);

  myApp.directive('display', function() {
    function DisplayCtrl($scope, $interval) {
      $scope.numero = 0;
    };

    return {
      restrict: 'E',
      controller: ['$scope', '$interval', DisplayCtrl],
      link: function($scope, $element) {
        console.log($scope);
        $element.addClass('display');
      }
    }
  });

  myApp.directive('led', function() {

    var numbers_by_type = {
      'top':          ['0', '2', '3', '5', '7', '8', '9'],
      'left-top':     ['0', '4', '5', '6', '8', '9'],
      'left-bottom':  ['0', '2', '6', '8'],
      'middle':       ['2', '3', '4', '5', '6', '8', '9'],
      'right-top':    ['0', '1', '2', '3', '4', '7', '8', '9'],
      'right-bottom': ['0', '1', '3', '4', '5', '6', '7', '8', '9'],
      'bottom':       ['0', '2', '3', '5', '6', '8'],
      'point':        ['.'],
    };

    // Procura valores iguais nos 2 arrays
    function findIn(a, b) {
      return a.filter(function (i) {
        return b.indexOf(i) >= 0;
      });
    };

    function ledOn(str_classes, value) {
      var classes = str_classes.split(' ');
      var tipo = findIn(classes, Object.keys(numbers_by_type))[0];
      return numbers_by_type[tipo].indexOf(value.toString()) >= 0;
    }

    function ledUpdate($element, $scope) {
      return function() {
        $scope.modo = ledOn($element.attr('class'), $scope.numero);

        if ($scope.modo) {
          $element.addClass('on');
        } else {
          $element.removeClass('on');
        }
        return $element;
      };
    }

    return {
      require: '^display',
      restrict: 'E',
      transclude: true,
      link: function($scope, $element) {
        $element.addClass('led');
        var fn_led = ledUpdate($element, $scope);
        $scope.$watch('numero', fn_led);
        fn_led();
      }
    }
  });

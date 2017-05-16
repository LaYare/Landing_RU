(function() {
  'use strict';

  angular
    .module('landingRu')
    .controller('MainController', MainController)
    .run(['$anchorScroll', function($anchorScroll) {
      $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }]);

  /** @ngInject */
  function MainController($anchorScroll, $location, $scope, $http, $window) {
    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
    $scope.user = {};

$scope.addPost = function () {

      $scope.user.page="retouniversidad.com";
   $http.post("http://emailapi.mellow.online/api/general",$scope.user)
       .success(function (data, status, headers, config) {
           $window.location.reload();
           console.log(data);
       })
       .error(function (data, status, header, config) {
            console.log(data);
       });

};

  }
})();

function backUno() {
  document.getElementById("contenido").classList.add('uno');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoUno() {
  document.getElementById("contenido").classList.remove('uno');
  document.getElementById("contenido").classList.add('cero');
};


function backDos() {
  document.getElementById("contenido").classList.add('dos');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoDos() {
  document.getElementById("contenido").classList.remove('dos');
  document.getElementById("contenido").classList.add('cero');
};


function backTres() {
  document.getElementById("contenido").classList.add('tres');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoTres() {
  document.getElementById("contenido").classList.remove('tres');
  document.getElementById("contenido").classList.add('cero');
};


function backCuatro() {
  document.getElementById("contenido").classList.add('cuatro');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoCuatro() {
  document.getElementById("contenido").classList.remove('cuatro');
  document.getElementById("contenido").classList.add('cero');
};


function backCinco() {
  document.getElementById("contenido").classList.add('cinco');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoCinco() {
  document.getElementById("contenido").classList.remove('cinco');
  document.getElementById("contenido").classList.add('cero');

};


function backSeis() {
  document.getElementById("contenido").classList.add('seis');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoSeis() {
  document.getElementById("contenido").classList.remove('seis');
  document.getElementById("contenido").classList.add('cero');
};


function backSiete() {
  document.getElementById("contenido").classList.add('siete');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoSiete() {
  document.getElementById("contenido").classList.remove('siete');
  document.getElementById("contenido").classList.add('cero');
};


function backOcho() {
  document.getElementById("contenido").classList.add('ocho');
  document.getElementById("contenido").classList.remove('cero');
};
function borradoOcho() {
  document.getElementById("contenido").classList.remove('ocho');
  document.getElementById("contenido").classList.add('cero');
};

// funcionalidad del slide

var actual = 0;
function puntos(n) {
  var ptn = document.getElementsByClassName("punto");
  for (i = 0; i < ptn.length; i++) {
    if (ptn[i].className.includes("active")) {
      ptn[i].className = ptn[i].className.replace("active", "");
      break;
    }
  }
  ptn[n].className += " active"
}
function mostrar(n) {
  var imagenes = document.getElementsByClassName("imagen-slider");
  for (i = 0; i < imagenes.length; i++) {
    if (imagenes[i].className.includes("actual")) {
      imagenes[i].className = imagenes[i].className.replace("actual", "");
      break;
    }
  }
  actual = n;
  imagenes[n].className += " actual";
  puntos(n);
}

function siguiente() {
  actual++;
  if (actual > 3) {
    actual = 0;
  }
  mostrar(actual);
}
function anterior() {
  actual--;
  if (actual < 0) {
    actual = 3;
  }
  mostrar(actual);
}
var play = setInterval("siguiente()",7000);

function popHidden(){
  document.getElementById("pop").classList.add('hidden-pop');
}

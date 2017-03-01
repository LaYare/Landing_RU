(function() {
  'use strict';

  angular
    .module('landingRu')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1488211390597;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
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

var arriba;
function subir() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -15);
    arriba = setTimeout('subir()', 10);
  }
    else clearTimeout(arriba);
  }

function menu() {
  document.getElementById("toggi").classList.toggle('menu-responsive');
};



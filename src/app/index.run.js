(function() {
  'use strict';

  angular
    .module('landingRu')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

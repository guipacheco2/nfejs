(function() {

  "use strict";

  var _ = require('underscore');

  function InformacoesAd(pag) {
    _.extend(this, pag);
  };

  InformacoesAd.prototype.get = function() {
    var informacoesAd = {
      'infAdFisco': this.infAdFisco ? String(this.infAdFisco) : '',
      'infCpl': this.infCpl ? String(this.infCpl) : ''
    };
    return informacoesAd;
  };

  module.exports = InformacoesAd;

})();
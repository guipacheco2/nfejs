(function() {

  "use strict";

  var _ = require('underscore');

  function Retencao(emit) {
    _.extend(this, emit);
  };

  Retencao.prototype.get = function() {
    return {
      'pis': this.getPIS(),
      'cofins': this.getCOFINS(),
      'csll': this.getCSLL(),
      'bcIrrf': this.getBCIRRF(),
      'irrf': this.getIRRF(),
      'bcPrevidencia': this.getBCPrevidencia(),
      'previdencia': this.getPrevidencia()
    };
  };

  Retencao.prototype.getPIS = function() {
    if (! this.vRetPIS) return null;
    return Number(this.vRetPIS[0]);
  };

  Retencao.prototype.getCOFINS = function() {
    if (! this.vRetCOFINS) return null;
    return Number(this.vRetCOFINS[0]);
  };

  Retencao.prototype.getCSLL = function() {
    if (! this.vRetCSLL) return null;
    return Number(this.vRetCSLL[0]);
  };

  Retencao.prototype.getBCIRRF = function() {
    if (! this.vBCIRRF) return null;
    return Number(this.vBCIRRF[0]);
  };

  Retencao.prototype.getIRRF = function() {
    if (! this.vIRRF) return null;
    return Number(this.vIRRF[0]);
  };

  Retencao.prototype.getBCPrevidencia = function() {
    if (! this.vBCRetPrev) return null;
    return Number(this.vBCRetPrev[0]);
  };

  Retencao.prototype.getPrevidencia = function() {
    if (! this.vRetPrev) return null;
    return Number(this.vRetPrev[0]);
  };

  module.exports = Retencao;

})();
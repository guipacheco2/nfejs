(function() {

  "use strict";

  var _ = require('underscore');

  function ICMS(emit) {
    _.extend(this, emit);
  };

  ICMS.prototype.get = function() {
    return {
      'bc': this.getBC(),
      'icms': this.getICMS(),
      'bcSt': this.getBCST(),
      'st': this.getST(),
      'produtos': this.getProdutos(),
      'frete': this.getFrete(),
      'seguro': this.getSeguro(),
      'desconto': this.getDesconto(),
      'ii': this.getII(),
      'ipi': this.getIPI(),
      'pis': this.getPIS(),
      'cofins': this.getCOFINS(),
      'outro': this.getOutro(),
      'total': this.getTotal()
    };
  };

  ICMS.prototype.getBC = function() {
    if (! this.vBC) return null;
    return Number(this.vBC[0]);
  };

  ICMS.prototype.getICMS = function() {
    if (! this.vICMS) return null;
    return Number(this.vICMS[0]);
  };

  ICMS.prototype.getBCST = function() {
    if (! this.vBCST) return null;
    return Number(this.vBCST[0]);
  };

  ICMS.prototype.getST = function() {
    if (! this.vST) return null;
    return Number(this.vST[0]);
  };

  ICMS.prototype.getProdutos = function() {
    if (! this.vProd) return null;
    return Number(this.vProd[0]);
  };

  ICMS.prototype.getFrete = function() {
    if (! this.vFrete) return null;
    return Number(this.vFrete[0]);
  };

  ICMS.prototype.getSeguro = function() {
    if (! this.vSeg) return null;
    return Number(this.vSeg[0]);
  };

  ICMS.prototype.getDesconto = function() {
    if (! this.vDesc) return null;
    return Number(this.vDesc[0]);
  };

  ICMS.prototype.getII = function() {
    if (! this.vII) return null;
    return Number(this.vII[0]);
  };

  ICMS.prototype.getIPI = function() {
    if (! this.vIPI) return null;
    return Number(this.vIPI[0]);
  };

  ICMS.prototype.getPIS = function() {
    if (! this.vPIS) return null;
    return Number(this.vPIS[0]);
  };

  ICMS.prototype.getCOFINS = function() {
    if (! this.vCOFIN) return null;
    return Number(this.vCOFINS[0]);
  };

  ICMS.prototype.getOutro = function() {
    if (! this.vOutro) return null;
    return Number(this.vOutro[0]);
  };

  ICMS.prototype.getTotal = function() {
    if (! this.vNF) return null;
    return Number(this.vNF[0]);
  };

  module.exports = ICMS;

})();

(function() {

  "use strict";

  var _ = require('underscore'),
      ProdutoICMS = require('./produto.icms'),
      ProdutoPIS = require('./produto.pis'),
      ProdutoCOFINS = require('./produto.cofins'),
      ProdutoIPI = require('./produto.ipi');

  function Impostos(impostos) {
    var icms = impostos.ICMS[0],
        pis = impostos.PIS[0],
        cofins = impostos.COFINS[0],
        ipi = impostos.IPI ? impostos.IPI[0] : '';

    if (icms.ICMS00) {
      this.ICMS = new ProdutoICMS(icms.ICMS00[0]);
    } else if (icms.ICMS10) {
      this.ICMS = new ProdutoICMS(icms.ICMS10[0]);
    } else if (icms.ICMS20) {
      this.ICMS = new ProdutoICMS(icms.ICMS20[0]);
    } else if (icms.ICMS30) {
      this.ICMS = new ProdutoICMS(icms.ICMS30[0]);
    } else if (icms.ICMS40) {
      this.ICMS = new ProdutoICMS(icms.ICMS40[0]);
    } else if (icms.ICMS51) {
      this.ICMS = new ProdutoICMS(icms.ICMS51[0]);
    } else if (icms.ICMS60) {
      this.ICMS = new ProdutoICMS(icms.ICMS60[0]);
    } else if (icms.ICMS70) {
      this.ICMS = new ProdutoICMS(icms.ICMS70[0]);
    } else if (icms.ICMS60) {
      this.ICMS = new ProdutoICMS(icms.ICMS60[0]);
    };

    if (pis.PISAliq) {
      this.PIS = new ProdutoPIS(pis.PISAliq[0]);
    } else if (pis.PISOutr) {
      this.PIS = new ProdutoPIS(pis.PISOutr[0]);
    };

    if (cofins.COFINSAliq) {
      this.COFINS = new ProdutoCOFINS(cofins.COFINSAliq[0]);
    } else if(cofins.COFINSOutr) {
      this.COFINS = new ProdutoCOFINS(cofins.COFINSOutr[0]);
    };

    if (ipi.IPITrib) {
      this.IPI = new ProdutoIPI(pis.IPITrib[0]);
    };  
  };

  Impostos.prototype.getImpostos = function() {
    var imposto = {};

    if (this.ICMS) {
      imposto.icms = this.ICMS.get();
    };

    if (this.PIS) {
      imposto.pis = this.PIS.get();
    };

    if (this.COFINS) {
      imposto.cofins = this.PIS.get();
    };

    if (this.IPI) {
      imposto.ipi = this.IPI.get();
    };

    return imposto;
  };

  module.exports = Impostos;

})();
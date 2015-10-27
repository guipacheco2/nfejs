(function() {

  "use strict";

  var _ = require('underscore'),
      ProdutoICMS = require('./produto.icms'),
      ProdutoPIS = require('./produto.pis'),
      ProdutoCOFINS = require('./produto.cofins');

  function Impostos(impostos) {
    var icms = (impostos.ICMS ? impostos.ICMS[0] : null),
        pis = impostos.PIS[0],
        cofins = impostos.COFINS[0];

    if (icms && icms.ICMS60) {
      this.ICMS = new ProdutoICMS(icms.ICMS60[0]);
    };

    if (pis.PISAliq) {
      this.PIS = new ProdutoPIS(pis.PISAliq[0]);
    };

    if (cofins.COFINSAliq) {
      this.COFINS = new ProdutoCOFINS(cofins.COFINSAliq[0]);
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

    return imposto;
  };

  module.exports = Impostos;

})();
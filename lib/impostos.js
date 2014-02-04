(function() {

  "use strict";

  var _ = require('underscore'),
      ProdutoICMS = require('./produto.icms'),
      ProdutoPIS = require('./produto.pis'),
      ProdutoCOFINS = require('./produto.cofins');

  function Impostos(impostos) {
    _.extend(this, impostos);
  };

  Impostos.prototype.getImpostos = function() {
    var imposto = {};

    var icms = this.ICMS[0];
    if (icms.ICMS60) {
      imposto.icms = new ProdutoICMS(icms.ICMS60[0]).get();
    }

    var pis = this.PIS[0];
    if (pis.PISAliq) {
      imposto.pis = new ProdutoPIS(pis.PISAliq[0]).get();
    }

    var cofins = this.COFINS[0];
    if (cofins.COFINSAliq) {
      imposto.cofins = new ProdutoCOFINS(cofins.COFINSAliq[0]).get();
    }

    return imposto;
  };

  module.exports = Impostos;

})();
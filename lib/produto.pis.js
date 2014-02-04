(function() {

  "use strict";

  var _ = require('underscore');

  function ProdutoPIS(pis) {
    _.extend(this, pis);
  };

  ProdutoPIS.prototype.get = function() {
    return {
      'cst': this.getCST(),
      'bc': this.getBC(),
      'aliquota': this.getAliquota(),
      'valor': this.getValor()
    };
  };

  ProdutoPIS.prototype.getCST = function() {
    if (! this.CST) return null;
    return Number(this.CST[0]);
  };

  ProdutoPIS.prototype.getBC = function() {
    if (! this.vBC) return null;
    return Number(this.vBC[0]);
  };

  ProdutoPIS.prototype.getAliquota = function() {
    if (! this.pPIS) return null;
    return Number(this.pPIS[0]);
  };

  ProdutoPIS.prototype.getValor = function() {
    if (! this.vPIS) return null;
    return Number(this.vPIS[0]);
  };

  module.exports = ProdutoPIS;

})();
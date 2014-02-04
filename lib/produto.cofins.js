(function() {

  "use strict";

  var _ = require('underscore');

  function ProdutoCOFINS(cofins) {
    _.extend(this, cofins);
  };

  ProdutoCOFINS.prototype.get = function() {
    return {
      'cst': this.getCST(),
      'bc': this.getBC(),
      'aliquota': this.getAliquota(),
      'valor': this.getValor()
    };
  };

  ProdutoCOFINS.prototype.getCST = function() {
    if (! this.CST) return null;
    return Number(this.CST[0]);
  };

  ProdutoCOFINS.prototype.getBC = function() {
    if (! this.vBC) return null;
    return Number(this.vBC[0]);
  };

  ProdutoCOFINS.prototype.getAliquota = function() {
    if (! this.pCOFINS) return null;
    return Number(this.pCOFINS[0]);
  };

  ProdutoCOFINS.prototype.getValor = function() {
    if (! this.vCOFINS) return null;
    return Number(this.vCOFINS[0]);
  };

  module.exports = ProdutoCOFINS;

})();
(function() {

  "use strict";

  var _ = require('underscore');

  function ProdutoIPI(ipi) {
    _.extend(this, ipi);
  };

  ProdutoIPI.prototype.get = function() {
    return {
      'CST': this.getCST(),
      'vBC': this.getBC(),
      'pIPI': this.getPercIPI(),
      'vIPI': this.getValorIPI()
    };
  };

  ProdutoIPI.prototype.getCST = function() {
    if (! this.CST) return null;
    return Number(this.CST[0]);
  };

  ProdutoIPI.prototype.getBC = function() {
    if (! this.vBC) return null;
    return Number(this.vBC[0]);
  };

  ProdutoIPI.prototype.getPercIPI = function() {
    if (this.pIPI && this.pIPI[0]) {
      return Number(this.pIPI[0]);
    }
    return 0;
  };

  ProdutoIPI.prototype.getValorIPI = function() {
    if (! this.vIPI) return null;
    return Number(this.vIPI[0]);
  };

  module.exports = ProdutoIPI;

})();
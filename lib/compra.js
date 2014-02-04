(function() {

  "use strict";

  var _ = require('underscore');

  function Compra(emit) {
    _.extend(this, emit);
  };

  Compra.prototype.get = function() {
    return {
      'pedido': this.getPedido(),
      'contrato': this.getContrato()
    };
  };

  Compra.prototype.getPedido = function() {
    if (! this.xPed) return null;
    return String(this.xPed[0]);
  };

  Compra.prototype.getContrato = function() {
    if (this.xCont && this.xCont[0]) {
      return String(this.xCont[0]);
    }
    return null;
  };

  module.exports = Compra;

})();
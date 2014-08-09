(function() {

  "use strict";

  var _ = require('underscore'),
      Endereco = require('./endereco');

  function Emissor(emit) {
    var endereco = new Endereco(emit.enderEmit[0]);
    _.extend(this, emit, endereco);
  };

  Emissor.prototype.get = function() {
    return {
      'cnpj': this.getCNPJ(),
      'nome': this.getNome(),
      'fantasia': this.getFantasia(),
      'ie': this.getIE(),
      'crt': this.getCRT(),
      'endereco': this.getEndereco()
    };
  };

  Emissor.prototype.getCNPJ = function() {
    if (! this.CNPJ) return null;
    return String(this.CNPJ[0]);
  };

  Emissor.prototype.getNome = function() {
    if (! this.xNome) return null;
    return String(this.xNome[0]);
  };

  Emissor.prototype.getFantasia = function() {
    if (this.xFant && this.xFant[0]) {
      return String(this.xFant[0]);
    }
    return null;
  };

  Emissor.prototype.getIE = function() {
    if (! this.IE) return null;
    return String(this.IE[0]);
  };

  Emissor.prototype.getCRT = function() {
    return Number(this.CRT);
  };

  module.exports = Emissor;

})();
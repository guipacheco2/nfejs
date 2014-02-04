(function() {

  "use strict";

  var _ = require('underscore'),
      Endereco = require('./endereco');

  function Destino(emit) {
    var endereco = new Endereco(emit.enderDest[0]);
    _.extend(this, emit, endereco);
  };

  Destino.prototype.get = function() {
    return {
      'cnpj': this.getCNPJ(),
      'nome': this.getNome(),
      'ie': this.getIE(),
      'email': this.getEmail()
    };
  };

  Destino.prototype.getCNPJ = function() {
    if (this.CNPJ && this.CNPJ[0]) {
      return Number(this.CNPJ[0]);
    }
    return null;
  };

  Destino.prototype.getNome = function () {
    if (this.xNome && this.xNome[0]) {
      return String(this.xNome[0]);
    }
    return null;
  };

  Destino.prototype.getIE = function () {
    if (this.IE && this.IE[0]) {
      return Number(this.IE[0]);
    }
    return null;
  };

  Destino.prototype.getEmail = function () {
    if (this.email && this.email[0]) {
      return String(this.email[0]);
    }
    return null;
  };

  module.exports = Destino;

})();
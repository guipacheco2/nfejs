var _ = require('underscore');

(function() {

  "use strict";

  var _ = require('underscore');

  function Endereco(emit) {
    _.extend(this, emit);
  };

  Endereco.prototype.getEndereco = function() {
    return {
      'logradouro': this.getLogradouro(),
      'numero': this.getNumero(),
      'bairro': this.getBairro(),
      'municipio': this.getMunicipio(),
      'uf': this.getUF(),
      'cep': this.getCEP(),
      'pais': this.getPais(),
      'telefone': this.getTelefone()
    };
  };

  Endereco.prototype.getLogradouro = function() {
    if (! this.xLgr) return null;
    return String(this.xLgr[0]);
  };

  Endereco.prototype.getNumero = function() {
    if (! this.nro) return null;
    return Number(this.nro[0]);
  };

  Endereco.prototype.getBairro = function() {
    if (! this.xBairro) return null;
    return String(this.xBairro[0]);
  };

  Endereco.prototype.getMunicipio = function() {
    if (! this.xMun) return null;
    return String(this.xMun[0]);
  };

  Endereco.prototype.getUF = function() {
    if (! this.UF) return null;
    return String(this.UF[0]);
  };

  Endereco.prototype.getCEP = function() {
    if (! this.CEP) return null;
    return Number(this.CEP[0]);
  };

  Endereco.prototype.getPais = function() {
    if (! this.xPais) return null;
    return String(this.xPais[0]);
  };

  Endereco.prototype.getTelefone = function() {
    if (! this.fone) return null;
    return Number(this.fone[0]);
  };

  module.exports = Endereco;

})();
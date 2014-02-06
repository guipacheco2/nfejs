(function() {

  "use strict";

  var _ = require('underscore'),
      Impostos = require('./impostos');

  function Produto(data) {
    var impostos = new Impostos(data.imposto[0]);
    _.extend(this, data.prod[0], impostos);
    return this;
  };

  Produto.prototype.get = function() {
    return {
      'codigo': this.getCodigo(),
      'ean': this.getEAN(),
      'descricao': this.getDescricao(),
      'ncm': this.getNCM(),
      'cfop': this.getCFOP(),
      'uCom': this.getUCom(),
      'qCom': this.getQCom(),
      'vUnCom': this.getVUnCom(),
      'valor': this.getValor(),
      'eanTrib': this.getEANTrib(),
      'uTrib': this.getUTrib(),
      'qTrib': this.getQTrib(),
      'vUnTrib': this.getVUnTrib(),
      'indTot': this.getIndTot(),
      'impostos': this.getImpostos()
    };
  };

  Produto.prototype.getCodigo = function() {
    return String(this.cProd);
  };

  Produto.prototype.getEAN = function() {
    return Number(this.cEAN);
  };

  Produto.prototype.getDescricao = function() {
    return String(this.xProd);
  };

  Produto.prototype.getNCM = function() {
    return Number(this.NCM);
  };

  Produto.prototype.getCFOP = function() {
    return Number(this.CFOP);
  };

  Produto.prototype.getUCom = function() {
    return String(this.uCom);
  };

  Produto.prototype.getQCom = function() {
    return Number(this.qCom);
  };

  Produto.prototype.getVUnCom = function() {
    return Number(this.vUnCom);
  };

  Produto.prototype.getValor = function() {
    return Number(this.vProd);
  };

  Produto.prototype.getEANTrib = function() {
    return Number(this.cEANTrib);
  };

  Produto.prototype.getUTrib = function() {
    return String(this.uTrib);
  };

  Produto.prototype.getQTrib = function() {
    return Number(this.qTrib);
  };

  Produto.prototype.getVUnTrib = function() {
    return Number(this.vUnTrib);
  };

  Produto.prototype.getIndTot = function() {
    return Number(this.indTot);
  };

  module.exports = Produto;

})();
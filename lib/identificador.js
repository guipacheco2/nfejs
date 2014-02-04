(function() {

  "use strict";

  var _ = require('underscore');

  function Identificador(emit) {
    _.extend(this, emit);
  };

  Identificador.prototype.get = function() {
    return {
      'uf': this.getUF(),
      'chave': this.getChave(),
      'naturezaOperacao': this.getNaturezaOperacao(),
      'indicacaoPagamento': this.getIndicacaoPagamento(),
      'modelo': this.getModelo(),
      'serie': this.getSerie(),
      'numero': this.getNumero(),
      'dataEmissao': this.getDataEmissao(),
      'tipo': this.getTipo(),
      'municipioFatoGerador': this.getMunicipioFatoGerador(),
      'digitoVerificador': this.getDigitoVerificador(),
      'ambiente': this.getAmbiente(),
      'finalidade': this.getFinalidade()
    };
  };

  Identificador.prototype.getUF = function() {
    if (! this.cUF) return null;
    return Number(this.cUF[0]);
  };

  Identificador.prototype.getChave = function() {
    if (! this.cNF) return null;
    return Number(this.cNF[0]);
  };

  Identificador.prototype.getNaturezaOperacao = function() {
    if (! this.natOp) return null;
    return String(this.natOp[0]);
  };

  Identificador.prototype.getIndicacaoPagamento = function() {
    if (! this.indPag) return null;
    return Number(this.indPag[0]);
  };

  Identificador.prototype.getModelo = function() {
    if (! this.mod) return null;
    return Number(this.mod[0]);
  };

  Identificador.prototype.getSerie = function() {
    if (! this.serie) return null;
    return Number(this.serie[0]);
  };

  Identificador.prototype.getNumero = function() {
    if (! this.nNF) return null;
    return Number(this.nNF[0]);
  };

  Identificador.prototype.getDataEmissao = function() {
    if (! this.dEmi) return null;
    return new Date(this.dEmi[0]);
  };

  Identificador.prototype.getTipo = function() {
    if (! this.tpNF) return null;
    return Number(this.tpNF[0]);
  };

  Identificador.prototype.getMunicipioFatoGerador = function() {
    if (! this.cMunFG) return null;
    return Number(this.cMunFG[0]);
  };

  Identificador.prototype.getDigitoVerificador = function() {
    if (! this.cDV) return null;
    return Number(this.cDV[0]);
  };

  Identificador.prototype.getAmbiente = function() {
    if (! this.tpAmb) return null;
    return Number(this.tpAmb[0]);
  };

  Identificador.prototype.getFinalidade = function() {
    if (! this.finNFe) return null;
    return Number(this.finNFe[0]);
  };

  module.exports = Identificador;

})();
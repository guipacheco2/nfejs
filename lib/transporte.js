(function() {

  "use strict";

  var _ = require('underscore');

  function Transporte(transp) {
    _.extend(this, transp);
  };

  Transporte.prototype.get = function() {
    return {
      'modFrete': this.getModFrete(),
      'transporta': this.getTransporta(),
      'vol': this.getVol()
    };
  };

  Transporte.prototype.getModFrete = function() {
    if (! this.modFrete) return null;
    return Number(this.modFrete);
  }

  Transporte.prototype.getTransporta = function() {
    var transporta = {
      'CNPJ': String(this.transporta[0].CNPJ),
      'IE': String(this.transporta[0].IE),
      'UF': String(this.transporta[0].UF),
      'xEnder': String(this.transporta[0].xEnder),
      'xMun': String(this.transporta[0].xMun),
      'xNome': String(this.transporta[0].xNome)
    };
    return transporta;
  };

  Transporte.prototype.getCNPJ = function() {
    if (! this.transporta[0].CNPJ) return null;
    return String(this.transporta[0].CNPJ);
  };

  Transporte.prototype.getNome = function() {
    if (! this.transporta[0].xNome) return null;
    return String(this.transporta[0].xNome);
  };

  Transporte.prototype.getVol = function() {
    var vol = {
      'esp': String(this.vol[0].esp),
      'pesoB': String(this.vol[0].pesoB),
      'pesoL': String(this.vol[0].pesoL),
      'qVol': String(this.vol[0].qVol)
    };
    return vol;
  };

  module.exports = Transporte;

})();
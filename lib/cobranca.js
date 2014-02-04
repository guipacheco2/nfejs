(function() {

  "use strict";

  var _ = require('underscore');

  function Cobranca(emit) {
    _.extend(this, emit);
  };

  Cobranca.prototype.get = function() {
    return this.getParcelas();
  };

  Cobranca.prototype.getNumParcelas = function() {
    return Number(this.dup.length);
  };

  Cobranca.prototype.getParcelas = function() {
    var parcelas = [];
    _.forEach(this.dup, function(parcela, i) {
      parcelas.push({
        'numero': String(parcela.nDup),
        'vencimento': new Date(parcela.dVenc),
        'valor': Number(parcela.vDup)
      });
    });
    return parcelas;
  };

  Cobranca.prototype.getParcela = function(parcela) {
    var parcela = {
      'numero': String(this.dup[parcela].nDup),
      'vencimento': new Date(this.dup[parcela].dVenc),
      'valor': Number(this.dup[parcela].vDup)
    };
    return parcela;
  };

  module.exports = Cobranca;

})();
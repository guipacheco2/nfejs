(function() {

  "use strict";

  var _ = require('underscore');

  function Pagamento(pag) {
    _.extend(this, pag);
  };

  Pagamento.prototype.get = function() {
    var pagamento = {
      'indPag': String(this.indPag),
      'tPag': String(this.tPag),
      'vPag': String(this.vPag)
    };
    return pagamento;
  };

  module.exports = Pagamento;

})();
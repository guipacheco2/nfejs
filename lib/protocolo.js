(function() {

  "use strict";

  var _ = require('underscore');

  function Protocolo(infProt) {
    _.extend(this, infProt);
  };

  Protocolo.prototype.get = function() {
    var protocolo = {
      'tpAmb': String(this.tpAmb),
      'verAplic': String(this.verAplic),
      'chNFe': String(this.chNFe),
      'dhRecbto': String(this.dhRecbto),
      'nProt': String(this.nProt),
      'digVal': String(this.digVal),
      'cStat': String(this.cStat),
      'xMotivo': String(this.xMotivo)
    };
    return protocolo;
  };

  module.exports = Protocolo;

})();
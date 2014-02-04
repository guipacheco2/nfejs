(function() {

  "use strict";

  var _ = require('underscore');

  function ISSQN(emit) {
    _.extend(this, emit);
  };

  ISSQN.prototype.get = function() {
    return {
      'valor': this.getValor(),
      'bc': this.getBC(),
      'iss': this.getISS(),
      'pis': this.getPIS(),
      'cofins': this.getCOFINS()
    };
  };

  ISSQN.prototype.getValor = function() {
    if (! this.vServ) return null;
    return Number(this.vServ[0]);
  };

  ISSQN.prototype.getBC = function() {
    if (! this.vBC) return null;
    return Number(this.vBC[0]);
  };

  ISSQN.prototype.getISS = function() {
    if (! this.vISS) return null;
    return Number(this.vISS[0]);
  };

  ISSQN.prototype.getPIS = function() {
    if (! this.vPIS) return null;
    return Number(this.vPIS[0]);
  };

  ISSQN.prototype.getCOFINS = function() {
    if (! this.vCOFINS) return null;
    return Number(this.vCOFINS[0]);
  };

  module.exports = ISSQN;

})();

(function() {

  "use strict";

  var _ = require('underscore');

  function ProdutoICMS(icms) {
    _.extend(this, icms);
  };

  ProdutoICMS.prototype.get = function() {
    return {
      'orig': this.getOrig(),
      'cst': this.getCST(),
      'bcStRet': this.getICMSSTRet(),
      'icmsStRet': this.getICMSSTRet()
    };
  };

  ProdutoICMS.prototype.getOrig = function() {
    if (! this.orig) return null;
    return Number(this.orig[0]);
  };

  ProdutoICMS.prototype.getCST = function() {
    if (! this.CST) return null;
    return Number(this.CST[0]);
  };

  ProdutoICMS.prototype.getBCSTRet = function() {
    if (! this.vBCSTRet) return null;
    return Number(this.vBCSTRet[0]);
  };

  ProdutoICMS.prototype.getICMSSTRet = function() {
    if (this.vICMSSTRet && this.vICMSSTRet[0]) {
      return Number(this.vICMSSTRet[0]);
    }
    return 0;
  };

  module.exports = ProdutoICMS;

})();
(function() {

    "use strict";

    var ICMS = require('./total.icms'),
        ISSQN = require('./total.issqn'),
        Retencao = require('./total.retencao');

    function Total(emit) {
        this.ICMS = (emit.ICMSTot) ? new ICMS(emit.ICMSTot[0]) : null;
        this.ISSQN = (emit.ISSQNTot) ? new ISSQN(emit.ISSQNTot[0]) : null;
        this.Retencao = (emit.retTrib) ? new Retencao(emit.retTrib[0]) : null;
    };

    Total.prototype.get = function() {
        var total = {};

        if (this.ICMS) {
            total.icms = this.ICMS.get();
        };

        if (this.ISSQN) {
            total.issqn = this.ISSQN.get();
        };

        if (this.Retencao) {
            total.retencao = this.Retencao.get();
        };

        return total;

    };

    module.exports = Total;

})();
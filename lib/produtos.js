(function() {

  "use strict";

  var _ = require('underscore'),
      Produto = require('./produto');

  function Produtos(det) {
    var _this = this;

    _this.count = 0;
    var produtos = [];

    _.each(det, function(produto) {
      var p = new Produto(produto);
      produtos.push(p);
      _this.count++;
    });

    _.extend(this, produtos);
  };

  Produtos.prototype.get = function(i) {
    if (typeof(i) === 'number' && i < this.count) return this[i];
    return this;
  };

  Produtos.prototype.getNumProdutos = function() {
    return Number(this.count);
  };

  module.exports = Produtos;

})();
(function() {

  "use strict";

  var _ = require('underscore'),
      Produto = require('./produto');

  function Produtos(det) {
    var _this = this;

    _this.produtos = [];

    _.each(det, function(produto) {
      var p = new Produto(produto);
      _this.produtos.push(p.get());
    });
  };

  Produtos.prototype.get = function() {
    return this.produtos;
  };

  Produtos.prototype.getNumProdutos = function() {
    return Number(this.produtos.length);
  };

  module.exports = Produtos;

})();
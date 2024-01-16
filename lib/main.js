(function() {

  "use strict";

  var xml2js = require('xml2js'),
      parseString = xml2js.parseString;

  var Cobranca = require('./cobranca'),
      Compra = require('./compra'),
      Destino = require('./destino'),
      Emissor = require('./emissor'),
      Identificador = require('./identificador'),
      InformacoesAd = require('./informacoesAd'),
      Pagamento = require('./pagamento'),
      Produtos = require('./produtos'),
      Transporte = require('./transporte'),
      Protocolo = require('./protocolo'),
      Total = require('./total');

  function nfejs(xml, cb) {
    parseString(xml, function (err, result) {
      var NFe = null,
          chNFe = null,
          infProt = null;

      if (result.nfeProc) {
        NFe = result.nfeProc.NFe[0].infNFe[0];
        infProt = result.nfeProc.protNFe[0].infProt;
      } else {
        NFe = result.NFe.infNFe[0];
      };

      cb(null, {
        cobranca: (NFe.cobr) ? new Cobranca(NFe.cobr[0]) : null,
        compra: (NFe.compra) ? new Compra(NFe.compra[0]) : null,
        destino: (NFe.dest) ? new Destino(NFe.dest[0]) : null,
        emissor: (NFe.emit) ? new Emissor(NFe.emit[0]) : null,
        identificador: (NFe.ide) ? new Identificador(NFe.ide[0]) : null,
        informacoesAd: (NFe.ide) ? new InformacoesAd(NFe.infAdic[0]) : null,
        pagamento: (NFe.pag) ? new Pagamento(NFe.pag[0].detPag[0]) : null,
        produtos: (NFe.det) ? new Produtos(NFe.det) : null,
        transporte: (NFe.transp) ? new Transporte(NFe.transp[0]) : null,
        total: (NFe.total) ? new Total(NFe.total[0]) : null,
        protocolo: (infProt) ? new Protocolo(infProt[0]) : null,
        chNFe: String(NFe['$']['Id'])
      });
    });
  };

  module.exports = nfejs;

})();
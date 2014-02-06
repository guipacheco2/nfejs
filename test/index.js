var fs = require('fs'),
    nfejs = require('../lib/main');

fs.readFile('nfe.xml','utf8',function(err, data) {
  nfejs(data, function(err, nfe) {
    nfe.cobranca.get();
    nfe.cobranca.getNumParcelas();
    nfe.cobranca.getParcelas();
    nfe.cobranca.getParcela(0);

    nfe.compra.get();
    nfe.compra.getPedido();
    nfe.compra.getContrato();

    nfe.destino.get();
    nfe.destino.getCNPJ();
    nfe.destino.getNome();
    nfe.destino.getIE();
    nfe.destino.getEmail();

    // Destino extends Endereço
    nfe.destino.getEndereco();
    nfe.destino.getLogradouro();
    nfe.destino.getNumero();
    nfe.destino.getBairro();
    nfe.destino.getMunicipio();
    nfe.destino.getUF();
    nfe.destino.getCEP();
    nfe.destino.getPais();
    nfe.destino.getTelefone();

    nfe.emissor.get();
    nfe.emissor.getCNPJ();
    nfe.emissor.getNome();
    nfe.emissor.getFantasia();
    nfe.emissor.getIE();
    nfe.emissor.getCRT();

    // Emissor extends Endereço
    nfe.emissor.getEndereco();
    nfe.emissor.getLogradouro();
    nfe.emissor.getNumero();
    nfe.emissor.getBairro();
    nfe.emissor.getMunicipio();
    nfe.emissor.getUF();
    nfe.emissor.getCEP();
    nfe.emissor.getPais();
    nfe.emissor.getTelefone();

    nfe.identificador.get();
    nfe.identificador.getUF();
    nfe.identificador.getChave();
    nfe.identificador.getNaturezaOperacao();
    nfe.identificador.getIndicacaoPagamento();
    nfe.identificador.getModelo();
    nfe.identificador.getSerie();
    nfe.identificador.getNumero();
    nfe.identificador.getDataEmissao();
    nfe.identificador.getTipo();
    nfe.identificador.getMunicipioFatoGerador();
    nfe.identificador.getDigitoVerificador();
    nfe.identificador.getAmbiente();
    nfe.identificador.getFinalidade();

    nfe.produtos.get();
    nfe.produtos.getNumProdutos();

    var prod0 = nfe.produtos.get(0);
    prod0.get();
    prod0.getCodigo();
    prod0.getEAN();
    prod0.getDescricao();
    prod0.getNCM();
    prod0.getCFOP();
    prod0.getUCom();
    prod0.getQCom();
    prod0.getVUnCom();
    prod0.getValor();
    prod0.getEANTrib();
    prod0.getUTrib();
    prod0.getQTrib();
    prod0.getVUnTrib();
    prod0.getIndTot();
    prod0.getImpostos();

    // Produto extends Impostos
    if (prod0.ICMS) {
      prod0.ICMS.get();
      prod0.ICMS.getOrig();
      prod0.ICMS.getCST();
      prod0.ICMS.getBCSTRet();
      prod0.ICMS.getICMSSTRet();
    };

    if (prod0.PIS) {
      prod0.PIS.get();
      prod0.PIS.getCST();
      prod0.PIS.getBC();
      prod0.PIS.getAliquota();
      prod0.PIS.getValor();
    };

    if (prod0.COFINS) {
      prod0.COFINS.get();
      prod0.COFINS.getCST();
      prod0.COFINS.getBC();
      prod0.COFINS.getAliquota();
      prod0.COFINS.getValor();
    };

    nfe.total.get();

    if (nfe.total.ICMS) {
      nfe.total.ICMS.get();
      nfe.total.ICMS.getBC();
      nfe.total.ICMS.getICMS();
      nfe.total.ICMS.getBCST();
      nfe.total.ICMS.getST();
      nfe.total.ICMS.getProdutos();
      nfe.total.ICMS.getFrete();
      nfe.total.ICMS.getSeguro();
      nfe.total.ICMS.getDesconto();
      nfe.total.ICMS.getII();
      nfe.total.ICMS.getIPI();
      nfe.total.ICMS.getPIS();
      nfe.total.ICMS.getCOFINS();
      nfe.total.ICMS.getOutro();
      nfe.total.ICMS.getTotal();
    };

    if (nfe.total.ISSQN) {
      nfe.total.ISSQN.get();
      nfe.total.ISSQN.getValor();
      nfe.total.ISSQN.getBC();
      nfe.total.ISSQN.getISS();
      nfe.total.ISSQN.getPIS();
      nfe.total.ISSQN.getCOFINS();
    };

    if (nfe.total.Retencao) {
      nfe.total.Retencao.get();
      nfe.total.Retencao.getPIS();
      nfe.total.Retencao.getCOFINS();
      nfe.total.Retencao.getCSLL();
      nfe.total.Retencao.getBCIRRF();
      nfe.total.Retencao.getIRRF();
      nfe.total.Retencao.getBCPrevidencia();
      nfe.total.Retencao.getPrevidencia();
    };

  });
});
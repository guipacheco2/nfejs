# NFE.js - Alpha

NFE XML em objetos JavaScript.

## Table of contents

- [Quick Start](#quick-start)
- [API](#api)
    - [Cobranca](#cobranca)
    - [Compra](#compra)
    - [Destino](#destino)
    - [Emissor](#emissor)
    - [Endereco](#endereco)
    - [Identificador](#identificador)
    - [Impostos](#impostos)
    - [Produtos](#produtos)
    - [Produto](#produto)
    - [Produto COFINS](#produto-cofins)
    - [Produto ICMS](#produto-icms)
    - [Produto PIS](#produto-pis)
    - [Total](#total)
    - [Total ICMS](#total-icms)
    - [Total ISSQN](#total-issqn)
    - [Total Retenção](#total-retencao)

## Quick start

```sh
$ npm install nfejs
```

**app.js**
```javascript
var fs = require('fs'),
    nfejs = require('nfejs');

fs.readFile('nfe.xml','utf8',function(err, data) {
  nfejs(data, function(err, nfe) {
    console.log(nfe.emissor.getNome());
  });
});
```

## API

### Cobrança

- `get`:
    - **Returns** getParcelas()
- `getNumParcelas`:
    - **Returns** `Number` Numero de parcelas
- `getParcelas`:
    - **Returns** `Array` Array com todas as parcelas
- `getParcela`:
    - Busca parcela especifica.
    - **Parameters**
      - `Number`: Numero da parcela, partindo de 0
    - **Returns** `Object` Numero, vencimento e valor da parcela

### Compra

- `get`:
    - **Returns** `Object` pedido e contrato
- `getPedido`:
    - **Returns** `String`
- `getContrato`:
    - **Returns** `String`

### Destino

- `get`:
    - **Returns** `Object` cnpj, nome, ie e email
- `getCNPJ`:
    - **Returns** `Number`
- `getNome`:
    - **Returns** `String`
- `getIE`:
    - **Returns** `Number`
- `getEmail`:
    - **Returns** `String`

### Emissor

- `get`:
    - **Returns** `Object` cnpj, nome, fantasia, ie, crt e endereco
- `getCNPJ`:
    - **Returns** `Number`
- `getNome`:
    - **Returns** `String`
- `getFantasia`:
    - **Returns** `String`
- `getIE`:
    - **Returns** `Number`
- `getCRT`:
    - **Returns** `Number`

### Endereco

- `getEndereco`:
    - **Returns** `Object` logradouro, numero, bairro, municipio, uf, cep, pais e telefone
- `getLogradouro`:
    - **Returns** `String`
- `getNumero`:
    - **Returns** `Number`
- `getBairro`:
    - **Returns** `String`
- `getMunicipio`:
    - **Returns** `String`
- `getUF`:
    - **Returns** `String`
- `getCEP`:
    - **Returns** `Number`
- `getPais`:
    - **Returns** `String`
- `getTelefone`:
    - **Returns** `Number`

### Identificador

- `get`:
    - **Returns** `Object` uf, chave, naturezaOperacao, indicacaoPagamento, modelo, serie, numero, dataEmissao, tipo, municipioFatoGerador, digitoVerificador, ambiente e finalidade
- `getUF`:
    - **Returns** `Number`
- `getChave`:
    - **Returns** `Number`
- `getNaturezaOperacao`:
    - **Returns** `String`
- `getIndicacaoPagamento`:
    - **Returns** `Number`
- `getModelo`:
    - **Returns** `Number`
- `getSerie`:
    - **Returns** `Number`
- `getNumero`:
    - **Returns** `Number`
- `getDataEmissao`:
    - **Returns** `Date`
- `getTipo`:
    - **Returns** `Number`
- `getMunicipioFatoGerador`:
    - **Returns** `Number`
- `getDigitoVerificador`:
    - **Returns** `Number`
- `getAmbiente`:
    - **Returns** `Number`
- `getFinalidade`:
    - **Returns** `Number`

### Impostos
- `getImpostos`:
    - **Returns** `Object` ICMS 60, PIS e COFINS

### Produtos
- `get`:
    - **Parameters**
      - `Indice`: Vazio ou indice da lista de produtos desejado, partindo de 0
    - **Returns** `Object` ou `Array`
- `getNumProdutos`:
    - **Returns** `Number`

### Produto
- `get`:
    - **Returns** `Object` codigo, ean, descricao, ncm, cfop, uCom, qCom, vUnCom, valor, eanTrib, uTrib, qTrib, vUnTrib, indTot e impostos
- `getCodigo`:
    - **Returns** `String`
- `getEAN`:
    - **Returns** `Number`
- `getDescricao`:
    - **Returns** `String`
- `getNCM`:
    - **Returns** `Number`
- `getCFOP`:
    - **Returns** `Number`
- `getUCom`:
    - **Returns** `String`
- `getQCom`:
    - **Returns** `Number`
- `getVUnCom`:
    - **Returns** `Number`
- `getValor`:
    - **Returns** `Number`
- `getEANTrib`:
    - **Returns** `Number`
- `getUTrib`:
    - **Returns** `String`
- `getQTrib`:
    - **Returns** `Number`
- `getVUnTrib`:
    - **Returns** `Number`
- `getIndTot`:
    - **Returns** `Number`

### Produto COFINS
- `get`:
    - **Returns** `Object` cst, bc, aliquota e valor
- `getCST`:
    - **Returns** `Number`
- `getBC`:
    - **Returns** `Number`
- `getAliquota`:
    - **Returns** `Number`
- `getValor`:
    - **Returns** `Number`

### Produto ICMS
- `get`:
    - **Returns** `Object` orig, cst, bcStRet e icmsStRet
- `getOrig`:
    - **Returns** `Number`
- `getCST`:
    - **Returns** `Number`
- `getBCSTRet`:
    - **Returns** `Number`
- `getICMSSTRet`:
    - **Returns** `Number`

### Produto PIS
- `get`:
    - **Returns** `Object` cst, bc, aliquota e valor
- `getCST`:
    - **Returns** `Number`
- `getBC`:
    - **Returns** `Number`
- `getAliquota`:
    - **Returns** `Number`
- `getValor`:
    - **Returns** `Number`

### Total
- `get`:
    - **Returns** `Object` ICMS, ISSQN e Retenção

### Total ICMS
- `get`:
    - **Returns** `Object` orig, cst, bcStRet e icmsStRet
- `getOrig`:
    - **Returns** `Number`
- `getCST`:
    - **Returns** `Number`
- `getBCSTRet`:
    - **Returns** `Number`
- `getICMSSTRet`:
    - **Returns** `Number`

### Total ISSQN
- `get`:
    - **Returns** `Object` valor, bc, iss, pis e cofins
- `getValor`:
    - **Returns** `Number`
- `getBC`:
    - **Returns** `Number`
- `getISS`:
    - **Returns** `Number`
- `getPIS`:
    - **Returns** `Number`
- `getCOFINS`:
    - **Returns** `Number`

### Total Retenção
- `get`:
    - **Returns** `Object` pis, cofins, csll, bcIrrf, irrf, bcPrevidencia e previdencia
- `getPIS`:
    - **Returns** `Number`
- `getCOFINS`:
    - **Returns** `Number`
- `getCSLL`:
    - **Returns** `Number`
- `getBCIRRF`:
    - **Returns** `Number`
- `getIRRF`:
    - **Returns** `Number`
- `getBCPrevidencia`:
    - **Returns** `Number`
- `getPrevidencia`:
    - **Returns** `Number`
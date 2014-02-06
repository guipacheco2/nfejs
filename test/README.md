# Exemplo de uso com base no [NFE.xml](nfe.xml)

## nfe.cobranca.get();

```javascript
[{
  numero: '6900/1',
  vencimento: Tue Dec 17 2013 22:00:00 GMT-0200 (BRST),
  valor: 131.7
}]
```

## nfe.cobranca.getNumParcelas();

`1`

## nfe.cobranca.getParcelas();

```javascript
[{
  numero: '6900/1',
  vencimento: Tue Dec 17 2013 22:00:00 GMT-0200 (BRST),
  valor: 131.7
}]
```

nfe.cobranca.getParcela(0);

```javascript
{
  numero: '6900/1',
  vencimento: Tue Dec 17 2013 22:00:00 GMT-0200 (BRST),
  valor: 131.7
}
```

## nfe.compra.get();

```javascript
{
  pedido: '10466321803',
  contrato: null
}
```

## nfe.compra.getPedido();

```javascript
10466321803
```

## nfe.compra.getContrato();

```javascript
null
```

## nfe.destino.get();

```javascript
{
  cnpj: 65651231523616,
  nome: 'Empresa Compradora LTDA ME',
  ie: 565564564566,
  email: 'e@mail.com'
}
```

## nfe.destino.getCNPJ();

```javascript
65651231523616
```

## nfe.destino.getNome();

```javascript
Empresa Compradora LTDA ME
```

## nfe.destino.getIE();

```javascript
565564564566
```

## nfe.destino.getEmail();

```javascript
e@mail.com
```

- Destino extends Endereço

## nfe.destino.getEndereco();

```javascript
{
  logradouro: 'Rua Pedro',
  numero: 1547,
  bairro: 'JARDIM CACIQUE',
  municipio: 'Suzano',
  uf: 'SP',
  cep: 8615020,
  pais: 'Brasil',
  telefone: 1156464566
}
```

## nfe.destino.getLogradouro();

```javascript
Rua Pedro
```

## nfe.destino.getNumero();

```javascript
1547
```

## nfe.destino.getBairro();

```javascript
JARDIM CACIQUE
```

## nfe.destino.getMunicipio();

```javascript
Suzano
```

## nfe.destino.getUF();

```javascript
SP
```

## nfe.destino.getCEP();

```javascript
8615020
```

## nfe.destino.getPais();

```javascript
Brasil
```

## nfe.destino.getTelefone();

```javascript
1156464566
```

## nfe.emissor.get();

```javascript
{
  cnpj: 12345678912345,
  nome: 'Emissor Vendedor Ltda',
  fantasia: 'Emissor Vendedor',
  ie: 354565489564,
  crt: 3,
  endereco: {
    logradouro: 'Rua João',
    numero: 1501,
    bairro: 'Vila Marques',
    municipio: 'Americana',
    uf: 'SP',
    cep: 13473000,
    pais: 'Brasil',
    telefone: 1123456878
  }
}
```

## nfe.emissor.getCNPJ();

```javascript
12345678912345
```

## nfe.emissor.getNome();

```javascript
Emissor Vendedor Ltda
```

## nfe.emissor.getFantasia();

```javascript
Emissor Vendedor
```

## nfe.emissor.getIE();

```javascript
354565489564
```

## nfe.emissor.getCRT();

```javascript
3
```

- Emissor extends Endereço

## nfe.emissor.getEndereco();

```javascript
{
  logradouro: 'Rua João',
  numero: 1501,
  bairro: 'Vila Marques',
  municipio: 'Americana',
  uf: 'SP',
  cep: 13473000,
  pais: 'Brasil',
  telefone: 1123456878
}
```

## nfe.emissor.getLogradouro();

```javascript
Rua João
```

## nfe.emissor.getNumero();

```javascript
1501
```

## nfe.emissor.getBairro();

```javascript
Vila Marques
```

## nfe.emissor.getMunicipio();

```javascript
Americana
```

## nfe.emissor.getUF();

```javascript
SP
```

## nfe.emissor.getCEP();

```javascript
13473000
```

## nfe.emissor.getPais();

```javascript
Brasil
```

## nfe.emissor.getTelefone();

```javascript
1123456878
```

## nfe.identificador.get();

```javascript
{
  uf: 35,
  chave: 8083,
  naturezaOperacao: 'Venda',
  indicacaoPagamento: 1,
  modelo: 55,
  serie: 1,
  numero: 6900,
  dataEmissao: Tue Nov 12 2013 22:00:00 GMT-0200 (BRST),
  tipo: 1,
  municipioFatoGerador: 3501608,
  digitoVerificador: 0,
  ambiente: 1,
  finalidade: 1
}
```

## nfe.identificador.getUF();

```javascript
35
```

## nfe.identificador.getChave();

```javascript
8083
```

## nfe.identificador.getNaturezaOperacao();

```javascript
Venda
```

## nfe.identificador.getIndicacaoPagamento();

```javascript
1
```

## nfe.identificador.getModelo();

```javascript
55
```

## nfe.identificador.getSerie();

```javascript
1
```

## nfe.identificador.getNumero();

```javascript
6900
```

## nfe.identificador.getDataEmissao();

```javascript
Tue Nov 12 2013 22:00:00 GMT-0200 (BRST)
```

## nfe.identificador.getTipo();

```javascript
1
```

## nfe.identificador.getMunicipioFatoGerador();

```javascript
3501608
```

## nfe.identificador.getDigitoVerificador();

```javascript
0
```

## nfe.identificador.getAmbiente();

```javascript
1
```

## nfe.identificador.getFinalidade();

```javascript
1
```

## nfe.produtos.get();

```javascript
{ '0':
   { cProd: [ '12.2432.00' ],
     cEAN: [ '7891342010177' ],
     xProd: [ 'FILTROS TECFIL TM2-PH10908 MIX 3/4-2-W7MULTI3/4D-PSL34MP AUDI/FORD/VW UN' ],
     NCM: [ '84212300' ],
     CFOP: [ '5405' ],
     uCom: [ 'UN' ],
     qCom: [ '5.0000' ],
     vUnCom: [ '8.6000000000' ],
     vProd: [ '43.00' ],
     cEANTrib: [ '7891342010177' ],
     uTrib: [ 'UN' ],
     qTrib: [ '5.0000' ],
     vUnTrib: [ '8.6000000000' ],
     indTot: [ '1' ],
     xPed: [ '10466321803' ],
     nItemPed: [ '1' ],
     ICMS:
      { orig: [Object],
        CST: [Object],
        vBCSTRet: [Object],
        vICMSSTRet: [Object] },
     getImpostos: [Function] },
  '1':
   { cProd: [ '12.2434.00' ],
     cEAN: [ '7891342010191' ],
     xProd: [ 'FILTROS TECFIL TM4-W7MULTI20-PH10906 MIX 20-PSL20M FIAT/CITROEN/PEUGEOT/RENAULT UN' ],
     NCM: [ '84212300' ],
     CFOP: [ '5405' ],
     uCom: [ 'UN' ],
     qCom: [ '3.0000' ],
     vUnCom: [ '8.2000000000' ],
     vProd: [ '24.60' ],
     cEANTrib: [ '7891342010191' ],
     uTrib: [ 'UN' ],
     qTrib: [ '3.0000' ],
     vUnTrib: [ '8.2000000000' ],
     indTot: [ '1' ],
     xPed: [ '10466321803' ],
     nItemPed: [ '1' ],
     ICMS:
      { orig: [Object],
        CST: [Object],
        vBCSTRet: [Object],
        vICMSSTRet: [Object] },
     getImpostos: [Function] },
  '2':
   { cProd: [ '12.2435.00' ],
     cEAN: [ '7891342010153' ],
     xProd: [ 'FILTROS TECFIL TM5-PH10904 MIX 20-2-W6MULTI20-PSL55M FIAT/HONDA/ MITSUBISHI UN' ],
     NCM: [ '84212300' ],
     CFOP: [ '5405' ],
     uCom: [ 'UN' ],
     qCom: [ '1.0000' ],
     vUnCom: [ '9.2000000000' ],
     vProd: [ '9.20' ],
     cEANTrib: [ '7891342010153' ],
     uTrib: [ 'UN' ],
     qTrib: [ '1.0000' ],
     vUnTrib: [ '9.2000000000' ],
     indTot: [ '1' ],
     xPed: [ '10466321803' ],
     nItemPed: [ '1' ],
     ICMS:
      { orig: [Object],
        CST: [Object],
        vBCSTRet: [Object],
        vICMSSTRet: [Object] },
     getImpostos: [Function] },
  '3':
   { cProd: [ '12.2431.00' ],
     cEAN: [ '7891342010160' ],
     xProd: [ 'FILTROS TECFIL TM1-PH10907 MIX 3/4-W7MULTI3/4S-PSL34M FIAT/FORD/VW UN' ],
     NCM: [ '84212300' ],
     CFOP: [ '5405' ],
     uCom: [ 'UN' ],
     qCom: [ '1.0000' ],
     vUnCom: [ '8.2000000000' ],
     vProd: [ '8.20' ],
     cEANTrib: [ '7891342010160' ],
     uTrib: [ 'UN' ],
     qTrib: [ '1.0000' ],
     vUnTrib: [ '8.2000000000' ],
     indTot: [ '1' ],
     xPed: [ '10466321803' ],
     nItemPed: [ '1' ],
     ICMS:
      { orig: [Object],
        CST: [Object],
        vBCSTRet: [Object],
        vICMSSTRet: [Object] },
     getImpostos: [Function] },
  '4':
   { cProd: [ '10.0417.00' ],
     cEAN: [ '' ],
     xProd: [ 'ORBA SOLUCAO BATERIX 12X1' ],
     NCM: [ '28070010' ],
     CFOP: [ '5405' ],
     uCom: [ 'CX' ],
     qCom: [ '1.0000' ],
     vUnCom: [ '46.7000000000' ],
     vProd: [ '46.70' ],
     cEANTrib: [ '' ],
     uTrib: [ 'CX' ],
     qTrib: [ '1.0000' ],
     vUnTrib: [ '46.7000000000' ],
     indTot: [ '1' ],
     xPed: [ '10466321803' ],
     nItemPed: [ '1' ],
     ICMS:
      { orig: [Object],
        CST: [Object],
        vBCSTRet: [Object],
        vICMSSTRet: [Object] },
     PIS: { CST: [Object], vBC: [Object], pPIS: [Object], vPIS: [Object] },
     COFINS:
      { CST: [Object],
        vBC: [Object],
        pCOFINS: [Object],
        vCOFINS: [Object] },
     getImpostos: [Function] },
  count: 5 }
```

## nfe.produtos.getNumProdutos();

```javascript
5
```

```javascript
var prod0 = nfe.produtos.get(0);
```

## prod0.get();

```javascript
{ codigo: '12.2432.00',
  ean: 7891342010177,
  descricao: 'FILTROS TECFIL TM2-PH10908 MIX 3/4-2-W7MULTI3/4D-PSL34MP AUDI/FORD/VW UN',
  ncm: 84212300,
  cfop: 5405,
  uCom: 'UN',
  qCom: 5,
  vUnCom: 8.6,
  valor: 43,
  eanTrib: 7891342010177,
  uTrib: 'UN',
  qTrib: 5,
  vUnTrib: 8.6,
  indTot: 1,
  impostos: { icms: { orig: 0, cst: 60, bcStRet: 10.5, icmsStRet: 10.5 } } }
```

## prod0.getCodigo();

```javascript
12.2432.00
```

## prod0.getEAN();

```javascript
7891342010177
```

## prod0.getDescricao();

```javascript
FILTROS TECFIL TM2-PH10908 MIX 3/4-2-W7MULTI3/4D-PSL34MP AUDI/FORD/VW UN
```

## prod0.getNCM();

```javascript
84212300
```

## prod0.getCFOP();

```javascript
5405
```

## prod0.getUCom();

```javascript
UN
```

## prod0.getQCom();

```javascript
5
```

## prod0.getVUnCom();

```javascript
8.6
```

## prod0.getValor();

```javascript
43
```

## prod0.getEANTrib();

```javascript
7891342010177
```

## prod0.getUTrib();

```javascript
UN
```

## prod0.getQTrib();

```javascript
5
```

## prod0.getVUnTrib();

```javascript
8.6
```

## prod0.getIndTot();

```javascript
1
```

## prod0.getImpostos();

```javascript
{ icms: { orig: 0, cst: 60, bcStRet: 10.5, icmsStRet: 10.5 } }
```

- Produto extends Impostos

## prod0.ICMS.get();

```javascript
{
  orig: 0,
  cst: 60,
  bcStRet: 10.5,
  icmsStRet: 10.5
}
```

## prod0.ICMS.getOrig();

```javascript
0
```

## prod0.ICMS.getCST();

```javascript
60
```

## prod0.ICMS.getBCSTRet();

```javascript
58.36
```

## prod0.ICMS.getICMSSTRet();

```javascript
10.5
```

## nfe.total.get();

```javascript
{ icms:
   { bc: 0,
     icms: 0,
     bcSt: 0,
     st: 0,
     produtos: 131.7,
     frete: 0,
     seguro: 0,
     desconto: 0,
     ii: 0,
     ipi: 0,
     pis: 0.77,
     cofins: null,
     outro: 0,
     total: 131.7 } }
```

## nfe.total.ICMS.get();

```javascript
{ bc: 0,
  icms: 0,
  bcSt: 0,
  st: 0,
  produtos: 131.7,
  frete: 0,
  seguro: 0,
  desconto: 0,
  ii: 0,
  ipi: 0,
  pis: 0.77,
  cofins: null,
  outro: 0,
  total: 131.7 }
```

## nfe.total.ICMS.getBC();

```javascript
0
```

## nfe.total.ICMS.getICMS();

```javascript
0
```

## nfe.total.ICMS.getBCST();

```javascript
0
```

## nfe.total.ICMS.getST();

```javascript
0
```

## nfe.total.ICMS.getProdutos();

```javascript
131.7
```

## nfe.total.ICMS.getFrete();

```javascript
0
```

## nfe.total.ICMS.getSeguro();

```javascript
0
```

## nfe.total.ICMS.getDesconto();

```javascript
0
```

## nfe.total.ICMS.getII();

```javascript
0
```

## nfe.total.ICMS.getIPI();

```javascript
0
```

## nfe.total.ICMS.getPIS();

```javascript
0.77
```

## nfe.total.ICMS.getCOFINS();

```javascript
null
```

## nfe.total.ICMS.getOutro();

```javascript
0
```

## nfe.total.ICMS.getTotal();

```javascript
131.7
```
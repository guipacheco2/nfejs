# NFE.js - Alpha

Manipule NFE XML em objetos JavaScript.

## Table of contents

- [Quick Start](#quick-start)
- [API](#api)

## Quick start

```sh
$ npm install nfejs
```

[NFE.xml](/nfe.xml)

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

### Cobranca

- `get`:
    - **Retorna** getParcelas()
- `getNumParcelas`:
    - **Retorna** `Number` Numero de parcelas
- `getParcelas`:
    - **Retorna** `Array` Array com todas as parcelas
- `getParcela`:
    - Busca parcela especifica.
    - **Parameters**
      - `Number`: Numero da parcela, partindo de 0.
    - **Returns** `Object` Numero, vencimento e valor da parcela

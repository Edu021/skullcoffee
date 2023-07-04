let url = window.location.href;
let img = document.getElementById('imagem');
let titulo = document.getElementById('titulo');
let detalhes = document.getElementById('detalhes');

// EXTRAI DO INTERROGA PRA FRENTE
var queryString = url.split('?')[1];

if (queryString) {
  // DIVIDE EM PARES CHAVE/VALOR
  var params = queryString.split('&');
  var paramObj = {};

  // GUARDA TUDO NO paramObj
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    var key = decodeURIComponent(param[0]);
    var value = decodeURIComponent(param[1]);

    paramObj[key] = value;
  }

  console.log(paramObj);
  img.src = `./src/${paramObj.imagem}.png`
  titulo.innerText = reWriteName(paramObj.imagem);
  detalhes.innerHTML = `
  <ul>
    <h4>Ingredientes:</h4>  
    <br>
    <li>
        ${paramObj.ingrediente1}
    </li>
    <li>
        ${paramObj.ingrediente2}
    </li>
    <li>
        ${paramObj.ingrediente3}
    </li>
    <li>
        ${paramObj.ingrediente4}
    </li>
    <br>
    <h4>Observação:</h4>
    <li>
    ${paramObj.observacao}
    </li>
  </ul>

  `;

}

function reWriteName(nomeOriginal) {
    switch (nomeOriginal) {
      case 'cafeamericanoquente':
        return 'Americano Quente';
      case 'cafelattequente':
        return 'Latte Quente';
      case 'cafecomleitequente':
        return 'Café com Leite Quente';
      case 'cafeexpressoquente':
        return 'Expresso Quente';
      case 'cafemochaquente':
        return 'Mocha Quente';
      case 'cafeprensafrancesaquente':
        return 'Prensa Francesa Quente';
      case 'cafecappuccinoquente':
        return 'Cappuccino Quente';
      case 'cafedescafeinadoquente':
        return 'Descafeinado Quente';
      case 'cafementaquente':
        return 'Menta Quente';
      case 'cafeamericanogelado':
        return 'Americano Gelado';
      case 'cafelattegelado':
        return 'Latte Gelado';
      case 'cafecomleitegelado':
        return 'Café com Leite Gelado';
      case 'cafeprensafrancesagelado':
        return 'Prensa Francesa Gelado';
      case 'cafemochagelado':
        return 'Mocha Gelado';
      case 'cafeexpressogelado':
        return 'Expresso Gelado';
      case 'cafecappuccinogelado':
        return 'Cappuccino Gelado';
      case 'cafedescafeinadogelado':
        return 'Descafeinado Gelado';
      case 'cafementagelado':
        return 'Menta Gelado';
      default:
        return nomeOriginal;
    }
}
//http://127.0.0.1:5500/detalhes.html?imagem=cafemochagelado&ingrediente1=chocolate&ingrediente2=cafe&ingrediente3=morango&ingrediente4=leite&observacao=contem%20glutem


//
// FAZER FUNCAO PARA QUANDO CLICAR NA FOTO DO CARDAPIO LEVAR AOS DETALHES COM PARAMS NA URL
//

function separarPorVirgula(string) {
    let arraySeparado = string.split(",");
    return arraySeparado;
}

// Exemplo de uso:



function redirecionar(foto, ingredientes, observacao) {
    
    let ingredientesArray = separarPorVirgula(ingredientes);

    window.location.href = `/detalhes.html?imagem=${foto}&ingrediente1=${ingredientesArray[0]}&ingrediente2=${ingredientesArray[1]}&ingrediente3=${ingredientesArray[2]}&ingrediente4=${ingredientesArray[3]}&observacao=${observacao}`;

}
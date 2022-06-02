/*
Casos de exemplo pra teste:

X ≡ 2 (mod 11)
X ≡ 4 (mod 12)
X ≡ 5 (mod 13)
resp: 772 + 1716 * t


X ≡ 1 (mod 2)
X ≡ -1 (mod 3)
X ≡ 4 (mod 7)
resp: 11 + 42 * t


X ≡ 5 (mod 7)
X ≡ 4 (mod 9)
X ≡ 1 (mod 10)
resp: 481 + 630 * t


X ≡ 1 (mod 3)
X ≡ 2 (mod 5)
X ≡ 3 (mod 7)
resp: 52 + 105 * t


TODOS OS VALORES DE X0 SÃO O PRIMEIRO VALOR POSITIVO!
*/


function atualizar1(){ // atualiza oq ta escrito no input
  let b = document.querySelector(".post-x-1").value;
  let m = document.querySelector(".mod-1").value;
  document.querySelector(".equacao-1").innerHTML = `X ≡ ${b} (mod ${m}) `;
}

function atualizar2(){ // atualiza oq ta escrito no input
  let b = document.querySelector(".post-x-2").value;
  let m = document.querySelector(".mod-2").value;
  document.querySelector(".equacao-2").innerHTML = `X ≡ ${b} (mod ${m}) `;
}

function atualizar3(){ // atualiza oq ta escrito no input
  let b = document.querySelector(".post-x-3").value;
  let m = document.querySelector(".mod-3").value;
  document.querySelector(".equacao-3").innerHTML = `X ≡ ${b} (mod ${m}) `;
}





function calcInversoMod(a, m){ // funcao q calcula o inverso modular
  for(let x = 1; x < m; x++)
    if (((a % m) * (x % m)) % m == 1)
      return x;
}



function calcModulo (poscongr, modulom) { // função q calcula o modulo m
  let passo1 = Math.floor(poscongr/modulom);
  let passo2 = passo1 * modulom
  let passofinal = poscongr - passo2;
    return passofinal;
}// exemplo da funcao: calcModulo(5,3) É A MESMA COISA QUE: x ≡ 5 (mod 3)



//função que é ativada ao clicar no botão de calcular
//ela calcula o sistema de congruências lineares
const calcular = () => {

// b -- o primeiro numero após a congruencia
//"A" da tabela
let b1 = document.querySelector(".post-x-1").value
let b2 = document.querySelector(".post-x-2").value
let b3 = document.querySelector(".post-x-3").value



//mod m
let m1 = document.querySelector(".mod-1").value
let m2 = document.querySelector(".mod-2").value
let m3 = document.querySelector(".mod-3").value



//se houverem espaços vazios nos inputs, aparecerá uma mensagem de erro
if (b1 == "" || b2 == "" || b3 == "" || m1 == "" || m2 == "" || m3 == "") {
  document.querySelector(".x0").innerHTML = "Campo obrigatório não preenchido!";
  
}else{

//M
//"Mzão" da tabela
let mz1 = m2 * m3
let mz2 = m1 * m3
let mz3 = m1 * m2

//M barrado
//classe de equivalência
//só serve pra auxiliar a encontrar a classe inversa (M barrado a menos 1)
let mbar1 = calcModulo(mz1, m1)
let mbar2 = calcModulo(mz2, m2)
let mbar3 = calcModulo(mz3, m3)


//M barrado a menos 1
//classe inversa:
let inversm1 = calcInversoMod(mbar1, m1)
let inversm2 = calcInversoMod(mbar2, m2)
let inversm3 = calcInversoMod(mbar3, m3)



//última tabela (A  *  Mzão  *  M barrado a menos 1)
//b * Mz * classe inversa
let total1 = b1 * mz1 * inversm1
let total2 = b2 * mz2 * inversm2
let total3 = b3 * mz3 * inversm3


//encontrando h, mt e a resposta x0
let h = total1 + total2 + total3 //soma dos valores encontrados na última tabela

let mt = (m1 * m2 * m3) //multiplicação dos valores colocados nos inputs (m)

let resposta = calcModulo(h, mt) // esse eh o x0

document.querySelector(".x0").innerHTML = "x0 =  " +  resposta // mostrando o x0 na tela




//esse if é só pra corrigir alguns erros no html (irrelevante pro código)
if(document.querySelector(".solucoes").innerHTML != "" && document.querySelector(".solucoes2").innerHTML != ""){
  document.querySelector(".solucoes").innerHTML = "";
  document.querySelector(".solucoes2").innerHTML = "";
}




document.querySelector(".psolucoes").innerHTML = "Possíveis soluções:"


//o loop for aqui só serve pra mostrar 3 respostas em um lado da tela
//as respostas aqui mostrarão t = {0, 1, 2}
for(let t = 0; t < 3; t++){ 
  let finalresp = resposta + (mt * t)
  document.querySelector(".solucoes").innerHTML += "Para t = "+ t+ ": " + finalresp  + '<br>'
}


//esse loop for mostra outras 3 possíveis respostas em outro lado da tela
//as respostas aqui mostrarão t = {3, 4, 5}
for(let t = 3; t <= 5; t++){ 
  let finalresp = resposta + (mt * t)
  document.querySelector(".solucoes2").innerHTML += "Para t = "+ t+ ": " + finalresp  + '<br>'
}

//equacao geral:
//x0 + mt * t
document.querySelector(".eqgeral").innerHTML = "Equação geral: <br>" + resposta + " + " + mt + " × t"
}}

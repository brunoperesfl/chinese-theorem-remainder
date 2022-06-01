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




const calcular = () => {

// b -- o primeiro numero após a congruencia
let b1 = document.querySelector(".post-x-1").value
let b2 = document.querySelector(".post-x-2").value
let b3 = document.querySelector(".post-x-3").value


//mod m
let m1 = document.querySelector(".mod-1").value
let m2 = document.querySelector(".mod-2").value
let m3 = document.querySelector(".mod-3").value

if (b1 == "" || b2 == "" || b3 == "" || m1 == "" || m2 == "" || m3 == "") {
  document.querySelector(".x0").innerHTML = "Campo obrigatório não preenchido!";
  
}else{
//M
let mz1 = m2 * m3
let mz2 = m1 * m3
let mz3 = m1 * m2

//m barrado
//auxiliar pra calculo de classe de equivalencia:
let mbar1 = calcModulo(mz1, m1)

let mbar2 = calcModulo(mz2, m2)

let mbar3 = calcModulo(mz3, m3)


//classe inversa:
let inversm1 = calcInversoMod(mbar1, m1)
let inversm2 = calcInversoMod(mbar2, m2)
let inversm3 = calcInversoMod(mbar3, m3)

//ultima parte do calculo:
//b * M * classe inversa
let total1 = b1 * mz1 * inversm1
let total2 = b2 * mz2 * inversm2
let total3 = b3 * mz3 * inversm3


//a resposta eh a soma dos totais mod m1*m2*m3
let modresp = (m1 * m2 * m3) 
let respostasoma = total1 + total2 + total3
let resposta = calcModulo(respostasoma, modresp) // esse eh o x0
document.querySelector(".x0").innerHTML = "x0 =  " +  resposta




//achando a resposta, equacao final sera:
// resposta + modresp * t
//t = 1,2,3...
if(document.querySelector(".solucoes").innerHTML != "" && document.querySelector(".solucoes2").innerHTML != ""){
  document.querySelector(".solucoes").innerHTML = "";
  document.querySelector(".solucoes2").innerHTML = "";
}
document.querySelector(".psolucoes").innerHTML = "Possíveis soluções:"
for(let t = 0; t < 3; t++){ // possiveis respostas
  let finalresp = resposta + (modresp * t)
  document.querySelector(".solucoes").innerHTML += "Para t = "+ t+ ": " + finalresp  + '<br>'
}
for(let t = 3; t <= 5; t++){ // possiveis respostas
  let finalresp = resposta + (modresp * t)
  document.querySelector(".solucoes2").innerHTML += "Para t = "+ t+ ": " + finalresp  + '<br>'
}

//equacao geral:
document.querySelector(".eqgeral").innerHTML = "Equação geral: <br>" + resposta + " + " + modresp + " × t"
}}

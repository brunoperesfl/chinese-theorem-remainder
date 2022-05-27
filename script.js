function mdc(n1, n2) { // calcula mdc, talvez deletar dps!!!!!!
    if (!n2) {
      return n1;
    }
    return mdc(n2, n1 % n2);
  }

//antigo acima, testando novo abaixo

//exemplo de sistema:
/*
{x ≡ b1 (mod m1)
{x ≡ b2 (mod m2)
{x ≡ b3 (mod m3)

*/




function calcInversoMod(a, m) // funcao q calcula o inverso modular
{
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

//BUG \/
//quando eu coloco outro valor sem atualizar a pagina, ele escreve a mais em baixo, CONSERTAR ISSO

//mod m
let m1 = document.querySelector(".mod-1").value
let m2 = document.querySelector(".mod-2").value
let m3 = document.querySelector(".mod-3").value

//M
let mz1 = m2 * m3
let mz2 = m1 * m3
let mz3 = m1 * m2

//m barrado
//auxiliar pra calculo de classe de equivalencia:
let firstAuxmc1 = Math.floor(mz1/m1)
let secondAuxmc1 = firstAuxmc1 * m1
let auxmc1 = mz1 - secondAuxmc1

let firstAuxmc2 = Math.floor(mz2/m2)
let secondAuxmc2 = firstAuxmc2 * m2
let auxmc2 = mz2 - secondAuxmc2

let firstAuxmc3 = Math.floor(mz3/m3)
let secondAuxmc3 = firstAuxmc3 * m3
let auxmc3 = mz3 - secondAuxmc3


//classe inversa:
let inversm1 = calcInversoMod(auxmc1, m1)
let inversm2 = calcInversoMod(auxmc2, m2)
let inversm3 = calcInversoMod(auxmc3, m3)

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
document.querySelector(".psolucoes").innerHTML = "Possíveis soluções:"
for(let t = 0; t <= 5; t++){ // possiveis respostas
  let finalresp = resposta + (modresp * t)
  document.querySelector(".solucoes").innerHTML +=  finalresp  + '<br>'
  console.log(finalresp)
}

//equacao geral:
document.querySelector(".eqgeral").innerHTML = "Equação geral: <br>" + resposta + " + " + modresp + " * t"
console.log("Equação final:")
console.log(resposta + " + " + modresp + " * t")

}










 



/*
function soma(){
    let input1 = document.querySelector(".pre-x").value;
    let input2 = document.querySelector(".post-x").value;

    let result = parseInt(input1) + parseInt(input2);
    document.querySelector(".equacao").innerHTML = input1;
}*/
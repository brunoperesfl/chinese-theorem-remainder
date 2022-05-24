function mdc(n1, n2) { // calcula mdc, talvez deletar dps!!!!!!
    if (!n2) {
      return n1;
    }
    return mdc(n2, n1 % n2);
  }
/*
function atualizar(){ // atualiza oq ta escrito no input
    var a = document.querySelector(".pre-x").value;
    var b = document.querySelector(".post-x").value;
    var m = document.querySelector(".mod").value;
    document.querySelector(".equacao").innerHTML = `${a}X ≡ ${b} (mod ${m}) `;
//---------------------------------------------------------------------------------

let d = mdc(a, m)
let a1 = a/d;
let b1 = b/d;
let n = m/d;
let r 
let s
r = (d/a) - (s*m)/a
s = (d/m) - (r*a)/m
d == ((r*a) + (s*m))
console.log(r+" este e r")
console.log(s+" este e s")
console.log(a1)
console.log(d)
    

}

*/ //antigo acima, testando novo abaixo

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



// b -- o primeiro numero após a congruencia
let b1 = 1
let b2 = -1
let b3 = 4

//mod m
let m1 = 2
let m2 = 3
let m3 = 7

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
console.log(resposta)


//achando a resposta, equacao final sera:
// resposta + modresp * t
//t = 1,2,3...

for(let t = 0; t < 5; t++){ // possiveis respostas
  let finalresp = resposta + (modresp * t)
  console.log(finalresp)
}

//equacao geral:
console.log(resposta + " + " + modresp + " * t")













 



/*
function soma(){
    let input1 = document.querySelector(".pre-x").value;
    let input2 = document.querySelector(".post-x").value;

    let result = parseInt(input1) + parseInt(input2);
    document.querySelector(".equacao").innerHTML = input1;
    console.log(result)
}*/
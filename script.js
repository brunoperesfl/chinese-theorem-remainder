function mdc(n1, n2) { // calcula mdc
    if (!n2) {
      return n1;
    }
    return mdc(n2, n1 % n2);
  }

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
eq = d == (r*a) + (s*m)
console.log(r+"este e r")
console.log(s+"este e s")
console.log(a1)
console.log(d)
    

}














 



/*
function soma(){
    let input1 = document.querySelector(".pre-x").value;
    let input2 = document.querySelector(".post-x").value;

    let result = parseInt(input1) + parseInt(input2);
    document.querySelector(".equacao").innerHTML = input1;
    console.log(result)
}*/
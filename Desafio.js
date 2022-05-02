// Desafio do professor Odirlei
let listadeAlunos = ["Jessica", "Odirlei", "Thiago", "Caique"];

for (let contador = 1; contador < listadeAlunos.length; contador++) {

    for (let nome of listadeAlunos) {

    if (contador % 2 == 0) {
        console.log(`${nome} está na posição ${contador} e este número é par`)
    }
    else{
        console.log(`${nome} está na posição ${contador} e este número é impar`)
    }
    contador++
}      
}
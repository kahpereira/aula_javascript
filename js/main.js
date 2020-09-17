function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
}

function redirecionar(){
    window.open("https://github.com/kahpereira/aula_javascript");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por isso";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigada por isso";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
};

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/


/*var d = new Date();
alert(d);*/

/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};*/

/*var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}else {
    alert("menor de idade");
};*/

/*var nome = "Kamila Pereira";
var idade = 25;
var idade2 = 10
var frase = "São Paulo é o melhor time do Mundo!"

alert (nome + " tem " + idade + " anos");
alert(idade + idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.toUpperCase());*/

/*var lista = ["maçã", "pera", "laranja"];

lista.push("uva");
//lista.pop();
console.log(lista);
//console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));*/

/*var fruta = {nome:"maçã" , cor:"vermelha"};
console.log(fruta);*/

/*var fruta = [{nome:"maçã" , cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(fruta);
alert(fruta[1].nome);*/
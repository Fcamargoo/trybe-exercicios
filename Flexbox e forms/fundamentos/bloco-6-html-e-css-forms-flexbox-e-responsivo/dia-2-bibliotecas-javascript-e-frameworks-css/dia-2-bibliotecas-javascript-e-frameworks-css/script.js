// const button = document.querySelector("#btn-enviar");
// let inputNameUser = document.querySelector("#inputNameUser");
// const nameUser = document.querySelector("#nameUser");

// function getUserValue(event){
//     event.preventDefault();
//     console.log(inputNameUser.value);
//     nameUser.innerHTML = inputNameUser.value;
// }
// button.addEventListener('click', getUserValue);

// No codigo abaixo eu criei uma variavel(let) "peguei" meu formulario com um seletor, adicionei um escutador ao evento "submit" juntamente de uma função especificando que eu queria que o botão de "submit" parasse de emitir o comportamento padrao adicionando o "preventDefault".
let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if (document.getElementById('selectArea1').checked === false){
  event.preventDefault();
  console.log('Não envia');
    }
  console.log(event);  
})


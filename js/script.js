let resultado = document.getElementById("result");

let input1 = document.getElementById("name");

input1.addEventListener('input', () => {
    resultado.innerHTML = (input1.value * 235.6);
})
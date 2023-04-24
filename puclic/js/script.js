// FUNCION IMC  - GIANROY

const datoPeso = document.getElementById("datoPeso");
const datoEstatura = document.getElementById("datoEstatura");
const CalcularIMC = document.getElementById("CalcularIMC");
const resultado = document.getElementById("resultado");
const resultadoIMC = document.getElementById("resultadoIMC");


CalcularIMC.addEventListener("click", () => {

    if (datoPeso.value === "" || datoEstatura.value === "") {
        Swal.fire({
            icon: 'error',
            text: 'Debes Ingresar los campos Obligatorios *',
        })
        resultadoIMC.innerText = ""
        resultado.style.display = "none"
    } else if (datoPeso.value === "0" || datoEstatura.value === "0") {

        Swal.fire({
            icon: 'error',
            text: 'Los valores deben de ser diferentes de 0',
        })
        resultadoIMC.innerText = ""
        resultado.style.display = "none"
    } else {
        const IMC = datoPeso.value / (datoEstatura.value * datoEstatura.value / 10000)
        let flecha = 0

        if (IMC < 18.5) {
            flecha = 2
        } else if (IMC >= 18.5 && IMC < 25) {
            flecha = 3
        } else if (IMC >= 25 && IMC < 30) {
            flecha = 4
        } else if (IMC >= 30 && IMC < 35) {
            flecha = 5
        } else if (IMC >= 35 && IMC < 40) {
            flecha = 6
        } else if (IMC > 40) {
            flecha = 7
        }

        const posFlecha = ((350 / 7) * flecha - 25) + "px"
        resultado.style.top = posFlecha
        resultado.style.display = "block"
        resultadoIMC.innerText = `Tu IMC es de ${IMC.toFixed(1)}`
    }


})


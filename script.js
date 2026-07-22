// =============================
// CALCULADORA DE ÁREAS Y VOLÚMENES
// =============================

const figura = document.getElementById("figura");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

figura.addEventListener("change", actualizarCampos);

actualizarCampos();

function actualizarCampos(){

    let opcion = figura.value;

    switch(opcion){

        case "triangulo":

            label1.innerHTML="Base";
            label2.innerHTML="Altura";

            valor2.style.display="block";
            label2.style.display="block";

        break;

        case "rectangulo":

            label1.innerHTML="Base";
            label2.innerHTML="Altura";

            valor2.style.display="block";
            label2.style.display="block";

        break;

        case "cubo":

            label1.innerHTML="Lado";

            valor2.style.display="none";
            label2.style.display="none";

        break;

        case "cilindro":

            label1.innerHTML="Radio";
            label2.innerHTML="Altura";

            valor2.style.display="block";
            label2.style.display="block";

        break;

        case "cono":

            label1.innerHTML="Radio";
            label2.innerHTML="Altura";

            valor2.style.display="block";
            label2.style.display="block";

        break;

        case "esfera":

            label1.innerHTML="Radio";

            valor2.style.display="none";
            label2.style.display="none";

        break;

    }

}

function calcular(){

    let opcion = figura.value;

    let v1 = parseFloat(valor1.value);

    let v2 = parseFloat(valor2.value);

    if(isNaN(v1)){

        alert("Ingrese el primer valor.");

        return;

    }

    if((opcion=="triangulo" || opcion=="rectangulo" || opcion=="cilindro" || opcion=="cono") && isNaN(v2)){

        alert("Ingrese el segundo valor.");

        return;

    }

    let resultado = 0;

    let procedimiento = "";

    switch(opcion){

        case "triangulo":

            resultado = (v1*v2)/2;

            procedimiento =
            "Área = (Base × Altura) ÷ 2<br><br>" +
            "(" + v1 + " × " + v2 + ") ÷ 2 = <strong>" + resultado.toFixed(2) + "</strong>";

        break;

        case "rectangulo":

            resultado = v1*v2;

            procedimiento =
            "Área = Base × Altura<br><br>" +
            v1 + " × " + v2 + " = <strong>" + resultado.toFixed(2) + "</strong>";

        break;

        case "cubo":

            resultado = Math.pow(v1,3);

            procedimiento =
            "Volumen = Lado³<br><br>" +
            v1 + "³ = <strong>" + resultado.toFixed(2) + "</strong>";

        break;

        case "cilindro":

            resultado = Math.PI*Math.pow(v1,2)*v2;

            procedimiento =
            "Volumen = π × r² × h<br><br>" +
            "π × " + v1 + "² × " + v2 +
            " = <strong>" + resultado.toFixed(2) + "</strong>";

        break;

        case "cono":

            resultado = (Math.PI*Math.pow(v1,2)*v2)/3;

            procedimiento =
            "Volumen = (π × r² × h) ÷ 3<br><br>" +
            "(π × " + v1 + "² × " + v2 + ") ÷ 3 = <strong>" + resultado.toFixed(2) + "</strong>";

        break;

        case "esfera":

            resultado = (4*Math.PI*Math.pow(v1,3))/3;

            procedimiento =
            "Volumen = (4 × π × r³) ÷ 3<br><br>" +
            "(4 × π × " + v1 + "³) ÷ 3 = <strong>" + resultado.toFixed(2) + "</strong>";

        break;

    }

    document.getElementById("resultado").innerHTML=
    "<h3>Resultado</h3><h2 style='color:#0b3d91;font-size:38px;'>"+resultado.toFixed(2)+"</h2>";

    document.getElementById("procedimiento").innerHTML=procedimiento;

}

function limpiar(){

    valor1.value="";

    valor2.value="";

    document.getElementById("resultado").innerHTML=
    "<h3>Resultado</h3><p>Aquí aparecerá el resultado del cálculo.</p>";

    document.getElementById("procedimiento").innerHTML=
    "Aquí aparecerá el procedimiento del cálculo realizado.";

}


const tipo = document.getElementById("tipo");
const figura = document.getElementById("figura");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const valor3 = document.getElementById("valor3");
const valor4 = document.getElementById("valor4");

function cambiarTipo() {

    figura.innerHTML = "";

    if (tipo.value == "planas") {

        figura.innerHTML = `
        <option value="triangulo">Triángulo</option>
        <option value="rectangulo">Rectángulo</option>
        <option value="cuadrado">Cuadrado</option>
        <option value="circulo">Círculo</option>
        <option value="rombo">Rombo</option>
        <option value="trapecio">Trapecio</option>
        `;

    } else {

        figura.innerHTML = `
        <option value="cubo">Cubo</option>
        <option value="cilindro">Cilindro</option>
        <option value="cono">Cono</option>
        <option value="esfera">Esfera</option>
        `;

    }

    actualizarCampos();

}

function actualizarCampos(){

    label3.style.display="none";
    valor3.style.display="none";

    label4.style.display="none";
    valor4.style.display="none";

    let f=figura.value;
    switch(f){

        case "triangulo":

            label1.innerHTML="Base";
            label2.innerHTML="Altura";
        break;

        case "rectangulo":

            label1.innerHTML="Base";
            label2.innerHTML="Altura";
        break;

        case "cuadrado":

            label1.innerHTML="Lado";
            label2.innerHTML="No aplica";
        break;

        case "circulo":

            label1.innerHTML="Radio";
            label2.innerHTML="No aplica";
        break;

        case "rombo":

            label1.innerHTML="Diagonal Mayor";
            label2.innerHTML="Diagonal Menor";
        break;

        case "trapecio":

            label1.innerHTML="Base Mayor";
            label2.innerHTML="Base Menor";

            label3.style.display="block";
            valor3.style.display="block";
            label3.innerHTML="Altura";
        break;

        case "cubo":

            label1.innerHTML="Lado";
            label2.innerHTML="No aplica";
        break;

        case "cilindro":

            label1.innerHTML="Radio";
            label2.innerHTML="Altura";
        break;

        case "cono":

            label1.innerHTML="Radio";
            label2.innerHTML="Altura";
        break;

        case "esfera":

            label1.innerHTML="Radio";
            label2.innerHTML="No aplica";
        break;

    }

}

figura.addEventListener("change",actualizarCampos);

cambiarTipo();

function calcular(){

    let f=figura.value;

    let v1=parseFloat(valor1.value)||0;
    let v2=parseFloat(valor2.value)||0;
    let v3=parseFloat(valor3.value)||0;

    let resultado="";
    let procedimiento="";

    switch(f){

        case "triangulo":

            resultado=(v1*v2)/2;
            procedimiento="Área = ("+v1+" × "+v2+") ÷ 2";
        break;

        case "rectangulo":

            resultado=v1*v2;
            procedimiento="Área = "+v1+" × "+v2;
        break;

        case "cuadrado":

            resultado=v1*v1;
            procedimiento="Área = "+v1+"²";
        break;

        case "circulo":

            resultado=Math.PI*Math.pow(v1,2);
            procedimiento="Área = π × "+v1+"²";
        break;

        case "rombo":

            resultado=(v1*v2)/2;
            procedimiento="Área = ("+v1+" × "+v2+") ÷ 2";
        break;

        case "trapecio":

            resultado=((v1+v2)*v3)/2;
            procedimiento="Área = (("+v1+" + "+v2+") × "+v3+") ÷ 2";
        break;
        case "cubo":

            resultado=Math.pow(v1,3);
            procedimiento="Volumen = "+v1+"³";
        break;

        case "cilindro":

            resultado=Math.PI*Math.pow(v1,2)*v2;
            procedimiento="Volumen = π × "+v1+"² × "+v2;
        break;

        case "cono":

            resultado=(Math.PI*Math.pow(v1,2)*v2)/3;
            procedimiento="Volumen = (π × "+v1+"² × "+v2+") ÷ 3";
        break;

        case "esfera":

            resultado=(4*Math.PI*Math.pow(v1,3))/3;
            procedimiento="Volumen = (4 × π × "+v1+"³) ÷ 3";
        break;

    }

    document.getElementById("resultado").innerHTML=
    "<h3>Resultado</h3><p>"+resultado.toFixed(2)+"</p>";

    document.getElementById("procedimiento").innerHTML=procedimiento;

}
function limpiar(){

    valor1.value="";
    valor2.value="";
    valor3.value="";
    valor4.value="";

    document.getElementById("resultado").innerHTML=
    "<h3>Resultado</h3><p>Aquí aparecerá el resultado.</p>";

    document.getElementById("procedimiento").innerHTML=
    "Aquí aparecerá el procedimiento del cálculo.";

}



    

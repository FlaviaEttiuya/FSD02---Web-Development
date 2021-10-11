function calcular(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    if(peso == "" || altura == ""){
        alert("Favor digitar o peso e altura.");
    }else{
	    var imc = (peso / (altura * altura)).toFixed(1);
        var resultado = "";
        
        if(imc < 18.5){
            resultado = "Magreza";
        }else if(imc >= 18.5 && imc < 24.9){
            resultado = "Normal";
        }else if(imc >= 24.9 && imc < 30){
            resultado = "Sobrepeso";
        }else if(imc >= 30){
            resultado = "Obesidade";
        }

        document.getElementById("resultado").innerHTML = resultado ;

    }
}
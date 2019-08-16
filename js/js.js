
const nombre ="natalia;" 

var vegetariana =  false; 
alert( "natalia es vegetariana? " + vegetariana);

edad=19;

function getEdad (){
   for (var i=1; i<=19; i+=1)


if(i>=19) {
console.log( "hola soy natalia y tengo " + i + " años");
}
}

getEdad()


function operacion  (num1,num2){
    var suma;
    var multi;
    var div;
    num1= parseInt(prompt("ingresa 1 numero "));

    num2= parseInt(prompt("ingresa 2 numero "));
    suma =num1+num2;
    document.write("la suma es = "+ suma + "<br>" );
     multi= num1*num2;
    document.write("la multiplicacion es =" + multi + "<br>");
     div= num1/num2;
     document.write("la division es =" +div+ "<br>" );
}


operacion()



if(edad>=18){
    document.write("eres mayor");
}
else{
    document.write("eres menor");
}






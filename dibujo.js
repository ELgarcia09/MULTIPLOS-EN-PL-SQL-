var texto= document.getElementById("texto_lineas");
var boton= document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo= d.getContext("2d");






function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle= color ;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal) ;
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick()
{
  var xxx=parseInt(texto.value);
  var lineas= xxx;
  var l= 0 ;
  var yi,xf ;



  for(l=0; l<lineas; l++)
  {

    yi=10*l ;
    xf=10*(l*1);
    dibujarLinea("blue",0, yi, xf, 300);
    console.log("linea"+l) ;


  }

}

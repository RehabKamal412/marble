img = document.getElementsByTagName("img");


var i=-1;

function loading()
{
    
    i++;
if(i>4)
{
  i=0;
 img[4].src="marble1.jpg";

}

img[i].src="marble2.jpg";
img[i - 1].src="marble1.jpg";

}

var a;
a=setinerval=(loading,600);


function start()
{
    a=setInterval(loading,600);
}
 
  function stop()
{
clearInterval(a);
}




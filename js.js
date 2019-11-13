//Si existe el localStorage continua si no lo crea.
if (localStorage.getItem('Jugado')==null) {
	localStorage.setItem('Jugado', 0);
}
//Si ya existe registro solo se necesita incorporar en el cuerpo.
else{
	document.getElementsByTagName('body')[0].append(localStorage.getItem('Cupon'));
}
 //Variables para que funcione la ruleta
var i=0;
var ruleta;

//Función de Dev para probar ruleta.
function errase(){
	alert("Local storage eliminado");
	localStorage.clear();
}

//Se activa una vez le dan click en la ruleta
function parar(){
	if(localStorage.getItem('Jugado')==0 || localStorage.getItem('Jugado')==null){
		clearInterval(ruleta);
		marca = (i%360); //obtiene el numero en el que paro la ruleta de 0 a 360
		x.style.transitionDuration='5s'
		x.style.transform = `rotate(${marca+1800}deg)`;
		cupon(marca);
	}
	//En caso de que se haya redimido ya el cupón avisa que no se puede volver a jugar.
	else{
		alert('El cupon ya se redimio');
	}
}

/*Se hace una impresión de marca a cuando se paro la ruleta y se divide en 
el numero de divisiones en la ruleta de izquiera a derecha*/
function cupon(e){
	var premio = (e*8)/359; //Sustituir por el numero de divisiones en la ruleta.
	var cupon;

	if(premio < 1 && premio > 0){
		cupon = 'Cupón 1';
	}
	else if(premio < 2 && premio > 1){
		cupon = 'Cupón 2';
	}
	else if(premio < 3 && premio > 2){
		cupon = 'Cupón 3';
	}
	else if(premio < 4 && premio > 3){
		cupon = 'Cupón 4';
	}
	else if(premio < 5 && premio > 4){
		cupon = 'Cupón 5';
	}
	else if(premio < 6 && premio > 5){
		cupon = 'Cupón 6';
	}
	else if(premio < 7 && premio > 6){
		cupon = 'Cupón 7';
	}
	else if(premio < 8 && premio > 7){
		cupon = 'Cupón 8';
	}

	//Se entrega su cupon;
	localStorage.setItem('Jugado', 1); //Se indica que ya se jugó.
	localStorage.setItem('Cupon',cupon); //Se guarda el cupón entregado.

	/*Esperamos a que termine la animación damos anunció 
	sobre el cupón obtenido + carga de cupón en memoria*/
	setTimeout(function(){
	 	alert(localStorage.getItem('Cupon'));
		document.getElementsByTagName('body')[0].append(localStorage.getItem('Cupon'));
	},5000);
	
}

//Al cargar el sitio inica el juego. Y se hace girar la ruleta.
window.onload = function(){
	x = document.getElementById("ruleta");
	ruleta= setInterval(function(){
		x.style.transform = `rotate(${i}deg)`;
		i++;
	},1);
}
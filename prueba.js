function prueba() {
	var a = 0;
	return a;
}

prueba();
/**
@descripcion Muewstra nombre y apellidos juntos
@param {nombres} nombres es el nombre de la persona
@param {apellidos} apellidos es el apellido de la persona
@return nombreCompleto es el nombre más el apellido
**/

function pruebaNobres(nombres, apellidos) {
	var nombreCompleto = nombres + apellidos;
	console.log(nombreCompleto);
	return nombreCompleto;
}

pruebaNobres();
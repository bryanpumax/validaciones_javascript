function limitar(e, contenido, caracteres) {
	// obtenemos la tecla pulsada
	var unicode = e.keyCode ? e.keyCode : e.charCode;

	if (
		unicode == 8 ||
		unicode == 46 ||
		unicode == 13 ||
		unicode == 9 ||
		unicode == 37 ||
		unicode == 39 ||
		unicode == 38 ||
		unicode == 40
	)
		return true;

	// Si ha superado el limite de caracteres devolvemos false
	if (contenido.length >= caracteres) return false;

	return true;
}

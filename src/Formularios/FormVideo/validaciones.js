export const validarTitulo = (titulo) => {

    const length = titulo.length;

    if(length < 5 || titulo === '') {

        return false
    } else {
        return true
    }
}

export const validarLink = (link) => {

    // eslint-disable-next-line no-useless-escape
    const valido = link.includes('http');

    if(valido) {
        return true;
    } else {
        return false;
    }
}

export const validarDescripcion = (descripcion) => {

    const length = descripcion.length;

    if(length < 10 || descripcion === '') {

        return false
    } else {
        return true
    }
}
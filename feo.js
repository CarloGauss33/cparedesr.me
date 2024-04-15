function llamarAPI() {
    const url = 'https://api.ejemplo.com/datos';
    const opciones = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(url, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:');
            console.log(data);
        })
        .catch(error => {
            console.error('Ha ocurrido un error:', error);
        });
}

llamarAPI();

class Carrera {
    #velocidadMaxima;
    #combustibleActual;

    constructor(marca, modelo, velocidadMaxima, combustibleActual) {
        this.marca = marca;
        this.modelo = modelo;
        this.#velocidadMaxima = velocidadMaxima;
        this.#combustibleActual = combustibleActual;
    }

    acelerar() {
        const output = document.getElementById('estatic');
        // Cambiar el fondo a la carretera en movimiento
        document.body.style.backgroundImage = "url('OED6.gif')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';

        if (this.#combustibleActual > 0) {
            let velocidad = 0;
            const intervalo = setInterval(() => {
                if (velocidad >= this.#velocidadMaxima) {
                    clearInterval(intervalo);
                    output.textContent = `Ha llegado a la Velocidad Máxima ${this.#velocidadMaxima} km/h`;
                } else {
                    velocidad += 10;
                    output.textContent = `¡¡Acelerando!!: su velocidad es de ${velocidad} km/h`;
                }
            }, 500);
        } else {
            output.textContent = "Combustible insuficiente";
        }
    }

    frenar() {
        const output = document.getElementById('estatic');
        let velocidad = this.#velocidadMaxima;
        const intervalo = setInterval(() => {
            if (velocidad <= 0) {
                clearInterval(intervalo);
                output.textContent = "Se ha detenido el vehículo";
                // Cambiar el fondo a la imagen estática
                document.body.style.backgroundImage = "url('Estatic.png')";
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundRepeat = 'no-repeat';
            } else {
                velocidad -= 10;
                output.textContent = `¡¡Frenando!!: su velocidad es de ${velocidad} km/h`;
            }
        }, 500);
    }

    aumentarCombustible(Combustible) {
        this.#combustibleActual += Combustible;
        return `¡¡Tanqueado Completo!! el estado de su tanque de combustible es ${this.#combustibleActual}%`;
    }

    #mostrarEstado() {
        return `El vehículo de marca ${this.marca} es modelo ${this.modelo}, su velocidad máxima es de ${this.#velocidadMaxima} km/h, y su tanque de combustible está en ${this.#combustibleActual}%`;
    }

    estado() {
        return this.#mostrarEstado();
    }
}

// Crear instancia de Carrera
const miCarrera = new Carrera("Ferrari", "2024", 50, 10);

// Obtener los botones y añadir los eventos
document.getElementById('btn-acelerar').addEventListener('click', () => {
    miCarrera.acelerar();
});

document.getElementById('btn-frenar').addEventListener('click', () => {
    miCarrera.frenar();
});

document.getElementById('btn-tanquear').addEventListener('click', () => {
    const resultado = miCarrera.aumentarCombustible(10);
    const tanqueo = document.querySelector('.tanqueo');
    tanqueo.style.opacity = 1;
    setTimeout(() => {
        tanqueo.style.opacity = 0;
    }, 1000);
    alert(resultado);
});

class Carrera {
    #velocidadMaxima;
    #combustibleActual;

    constructor(marca, modelo, velocidadMaxima, combustibleActual) {
        this.marca = marca;
        this.modelo = modelo;
        this.#velocidadMaxima = velocidadMaxima;
        this.#combustibleActual = combustibleActual;
    }

    arrancar() {
        let acelerar = document.querySelector("#estatic");
        let tanqueo = document.querySelector(".tanqueo");
        let textoA = document.querySelector("#textoAcel")
        // Cambiar fondo a gif de carretera en movimiento
        document.querySelector('.carrito').style.backgroundImage = "url('OED6.gif')";

        // Ocultar el fondo estático y el tanquero
        acelerar.style.display = "none";
        tanqueo.style.opacity = 0;

        if (this.#combustibleActual > 0) {
            let velocidad = 0;
            const intervalo = setInterval(() => {
                if (velocidad >= this.#velocidadMaxima) {
                    clearInterval(intervalo);
                    textoA.innerHTML = `A llegado a la Velocidad Maxima ${this.#velocidadMaxima} km/h`;
                } else {
                    velocidad += 10;
                    textoA.innerHTML = `¡¡Acelerando!!: su velocidad es de ${velocidad} km/h`;
                }
            }, 500);
        } else {
            console.log("Combustible insuficiente");
        }
    }

    frenar() {
        let acelerar = document.querySelector("#estatic");
        let textoA = document.querySelector("#textoAcel")
        // Mostrar el fondo estático al frenar
        let velocidad = this.#velocidadMaxima;
        const intervalo = setInterval(() => {
            if (velocidad <= 0) {
                clearInterval(intervalo);
                textoA.innerHTML = "Se ha detenido el vehículo";
                document.querySelector('.carrito').style.backgroundImage = "url('Estatic.png')";
                acelerar.style.display = "block";
            } else {
                velocidad -= 10;
                textoA.innerHTML = (`¡¡Frenando!!: su velocidad es de ${velocidad} km/h`);
            }
        }, 500);

    }

    tanqueo(Combustible) {
        let tanqueo = document.querySelector(".tanqueo");
        let textoA = document.querySelector("#textoAcel")
        tanqueo.style.opacity = 1;

        this.#combustibleActual += Combustible;
        textoA.innerHTML = `¡¡Tanqueado Completo!! el estado de su tanque de combustible es ${this.#combustibleActual}%`;
    }

    #mostrarEstado() {
        let estado = document.querySelector(".burbuja2");
        estado.innerHTML = `El vehículo de marca ${this.marca} es modelo ${this.modelo}. Su velocidad máxima es de ${this.#velocidadMaxima} y su tanque de combustible está en ${this.#combustibleActual}%.`;
        estado.style.opacity = 1;
        setTimeout(() => {
            estado.style.opacity = 0;
        }, 5000); // Oculta la burbuja de información después de 5 segundos
    }

    estado() {
        this.#mostrarEstado();
    }
}

// Crear una instancia de la clase Carrera
let ObjCarrera = new Carrera("Ferrari", "2024", 100, 10);

// Funciones para los botones
function arrancar() {
    ObjCarrera.arrancar();
}

function frenar() {
    ObjCarrera.frenar();
}

function tanqueo() {
    console.log(ObjCarrera.tanqueo(10));
}

function estado(){
    ObjCarrera.estado();
}

// Asignar eventos a los botones
document.querySelector('.acelerar').addEventListener('click', arrancar);
document.querySelector('.freno').addEventListener('click', frenar);
document.querySelector('.botonGasolina').addEventListener('click', tanqueo);
document.querySelector('.carro', 'carroquiet').addEventListener('click', estado);

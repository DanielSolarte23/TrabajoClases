class Banco {
    #tipoCuenta;
    constructor(nombreTitular, saldo, tipoCuenta) {
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
        this.#tipoCuenta = tipoCuenta;
    }

    depositar(monto) {
        let pantalla = document.querySelector("#PantallaM");
        this.saldo += monto;
        pantalla.innerHTML = `Saldo: ${this.saldo}`;
    }

    retiro(monto) {
        let pantalla = document.querySelector("#PantallaM");
        if (this.saldo >= monto) {
            this.saldo -= monto;
            pantalla.innerHTML = `Saldo: ${this.saldo}`;
        } else {
            pantalla.innerHTML = "Saldo Insuficiente";
        }
    }

    mostrarSaldo() {
        let pantalla = document.querySelector("#PantallaM");
        pantalla.innerHTML = `Saldo: ${this.saldo}`;
    }

    #getMostrarcuenta() {
        let pantalla = document.querySelector("#PantallaM");
        pantalla.innerHTML = `Tipo de Cuenta: ${this.#tipoCuenta}`;
    }

    MostrarTipoCuenta() {
        this.#getMostrarcuenta();
    }
}

let objTitular;

function crearCuenta() {
    const nombreTitular = document.querySelector("#nombreTitular").value;
    const saldoInicial = parseFloat(document.querySelector("#saldoInicial").value);
    const tipoCuenta = document.querySelector("#tipoCuenta").value;
    
    if(nombreTitular && !isNaN(saldoInicial) && tipoCuenta) {
        objTitular = new Banco(nombreTitular, saldoInicial, tipoCuenta);
        alert('Cuenta creada exitosamente!');
    } else {
        alert('Por favor, llene todos los campos correctamente.');
    }
}

function depositar() {
    if (objTitular) {
        objTitular.depositar(10000);
    } else {
        alert('Primero debe crear una cuenta.');
    }
}

function retiro() {
    if (objTitular) {
        objTitular.retiro(5000);
    } else {
        alert('Primero debe crear una cuenta.');
    }
}

function MostrarCuenta() {
    if (objTitular) {
        objTitular.MostrarTipoCuenta();
    } else {
        alert('Primero debe crear una cuenta.');
    }
}

function mostrarSaldo() {
    if (objTitular) {
        objTitular.mostrarSaldo();
    } else {
        alert('Primero debe crear una cuenta.');
    }
}

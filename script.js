
var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];
var cuentaSeleccionada = null;
var passwordIngresado = false;

function seleccionarCuenta(index) {
    cuentaSeleccionada = cuentas[index];
    document.getElementById("login").style.display = "none";
    document.getElementById("operaciones").style.display = "block";
}

function verificarPassword() {
    var passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === "password") {
        passwordIngresado = true;
        mostrarSaldo();
    } else {
        alert("Password incorrecto. Intenta nuevamente.");
    }
}

function mostrarSaldo() {
    if (passwordIngresado) {
      document.getElementById("operaciones").style.display = "none";
      document.getElementById("saldo").style.display = "block";
      document.getElementById("saldoActualModal").textContent = "Saldo actual: $" + cuentaSeleccionada.saldo;
      document.getElementById("ingresarMonto").style.display = "block";
      document.getElementById("retirarMonto").style.display = "block";
    }
  }
  

function mostrarOpciones() {
    document.getElementById("saldo").style.display = "none";
    document.getElementById("ingresarMonto").style.display = "none";
    document.getElementById("retirarMonto").style.display = "none";
    document.getElementById("operaciones").style.display = "block";
    passwordIngresado = false;

}

function ingresarMonto() {
    var montoInput = parseInt(document.getElementById("montoInputIngresar").value);
    if (montoInput && montoInput > 0) {
        var nuevoSaldo = cuentaSeleccionada.saldo + montoInput;
        if (nuevoSaldo <= 990) {
            cuentaSeleccionada.saldo = nuevoSaldo;
            alert("Monto ingresado: $" + montoInput + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
        } else {
            alert("El monto excede el límite permitido.");
        }
    } else {
        alert("Ingresa un monto válido.");
    }
}

function retirarMonto() {
    var montoInput = parseInt(document.getElementById("montoInputRetirar").value);
    if (montoInput && montoInput >= 0) {
        var nuevoSaldo = cuentaSeleccionada.saldo - montoInput;
        if (nuevoSaldo >= 10) {
            cuentaSeleccionada.saldo = nuevoSaldo;
            alert("Monto retirado: $" + montoInput + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
        } else {
            alert("El saldo restante no puede ser menor a $10.");
        }
    } else {
        alert("Ingresa un monto válido.");
    }
}
function mostrarSaldoModal() {
    if (passwordIngresado) {
        document.getElementById("saldoActualModal").textContent = "Saldo actual: $" + cuentaSeleccionada.saldo;
        document.getElementById("saldoModal").style.display = "block";
    }
}

function cerrarSaldoModal() {
    document.getElementById("saldoModal").style.display = "none";
}
function mostrarLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("operaciones").style.display = "none";
    passwordIngresado = false; // Restablecer el estado de autenticación al mostrar la selección de cuenta//
}




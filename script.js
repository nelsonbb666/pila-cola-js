// PILA
let pila = [];

function push() {
    let valor = document.getElementById("pilaInput").value;
    if (valor !== "") {
        pila.push(valor);
        mostrarPila();
    }
}

function pop() {
    pila.pop();
    mostrarPila();
}

function mostrarPila() {
    let lista = document.getElementById("pilaLista");
    lista.innerHTML = "";

    for (let i = pila.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = pila[i];
        lista.appendChild(li);
    }
}


// COLA
let cola = [];

function enqueue() {
    let valor = document.getElementById("colaInput").value;
    if (valor !== "") {
        cola.push(valor);
        mostrarCola();
    }
}

function dequeue() {
    cola.shift();
    mostrarCola();
}

function mostrarCola() {
    let lista = document.getElementById("colaLista");
    lista.innerHTML = "";

    cola.forEach(elemento => {
        let li = document.createElement("li");
        li.textContent = elemento;
        lista.appendChild(li);
    });
}

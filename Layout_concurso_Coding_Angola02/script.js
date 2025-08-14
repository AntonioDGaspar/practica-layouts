let ID_balde = 0;
let ID_armazem = 0;
let baldes = [];
let tipo_balde = "";

class criarArmazem {
    constructor(tipo_armazem) {
        this.id = ID_balde++;
        this.tipo_armazem = tipo_armazem;
    }
}

class Balde {
    constructor(tipo_balde) {
        this.Id = ID_balde++;
        this.tipo_balde = tipo_balde;
    }
}

function getTipo (tipo) {
    if (tipo === "FIFO") {
        tipo_balde = "FIFO"
    }

    else {
        tipo_balde = "LIFO";
    }
}

function criarBalde() {
    if (tipo_balde === "") {
        alert("Por favor, selecione o tipo de balde.");
    }
    else {
        const novoBalde = new Balde(tipo_balde);
        baldes.push(novoBalde);
        actulizarListaBaldes();
    } 
}

function actulizarListaBaldes() {
    const h4_baldes = document.querySelector("h4");
    h4_baldes.style.display = "block";
    const listaBaldes = document.getElementById("lista_balde");
    listaBaldes.innerHTML = "";

    baldes.forEach(balde => {
        const item = document.createElement("li");
        item.textContent = `Balde ${balde.Id} - Tipo: ${balde.tipo_balde}`;
        listaBaldes.appendChild(item);
    });
}

function limparListaBaldes() {
    baldes = [];
    ID_balde = 0;
    actulizarListaBaldes();
    const h4_baldes = document.querySelector("h4");
    h4_baldes.style.display = "none";
}

let myNodeList = document.getElementsByTagName("li");

for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addElemento() {
    let li = document.createElement("li");
    var dataInput = document.getElementById("dataTarefa");
    var categoria = document.getElementById("opcao")
    var dataTexto = dataInput.valueAsDate.toLocaleDateString();
    let inputValue = document.getElementById("tarefa").value.toUpperCase();
    
    let t = document.createTextNode(dataTexto + " - " + inputValue + " - " + categoria.value);
    li.appendChild(t);
    li.classList.add(categoria.value);

    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }

    document.getElementById("tarefa").value = "";
    dataInput.value = "";
    categoria.value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
function cleanList(){
    const lista = document.getElementById("lista");
    lista.style.display = 'none';
}
let clientes = [
  {
    codigo: 1,
    nombre: "Jhon",
    balance: 123.0,
    fechaRegistro: "15/09/25"
  },
  {
    codigo: 2,
    nombre: "Pedro",
    balance: 200,
    fechaRegistro: "15/08/2018"
  },
  {
    codigo: 3,
    nombre: "Pedro",
    balance: 200,
    fechaRegistro: "15/08/2018"
  }
];
// let clientes = [];

let number = '';

function listClients() {
  CreateTable();

  for (var i = 0; i < clientes.length; i++) {
    let row = document.createElement("tr");
    document.getElementById("clientes").appendChild(row);

    let codigo = document.createElement("td");
    let nombre = document.createElement("td");
    let balance = document.createElement("td");
    let fechaRegistro = document.createElement("td");

    codigo.textContent = clientes[i].codigo;
    nombre.textContent = clientes[i].nombre;
    balance.textContent = clientes[i].balance;
    fechaRegistro.textContent = clientes[i].fechaRegistro;

    row.appendChild(codigo);
    row.appendChild(nombre);
    row.appendChild(balance);
    row.appendChild(fechaRegistro);

    let btnedit = document.createElement("button");
    btnedit.textContent = "editar";
    let btndel = document.createElement("button");
    btndel.textContent = "eliminar";
    let btndet = document.createElement("button");
    btndet.textContent = "ver";
  
    btnedit.setAttribute("class", "inputs");
    btndel.setAttribute("class", "inputs");
    btndel.setAttribute("class", "inputs");

    btnedit.setAttribute("id", i);

    row.appendChild(btnedit);
    row.appendChild(btndel);
    row.appendChild(btndet);
    btnedit.addEventListener("click", function() {
      number = btnedit.id;
      EditFunction(btnedit);
    });
  }
}

function CreateTable() {
  let body = document.getElementById("container");

  let table = document.createElement("table");
  table.setAttribute("id", "table");
  let row = document.createElement("tr");
  body.appendChild(table);
  table.appendChild(row);

  let titulo1 = document.createElement("th");
  let titulo2 = document.createElement("th");
  let titulo3 = document.createElement("th");
  let titulo4 = document.createElement("th");
  let titulo5 = document.createElement("th");

  titulo1.textContent = "Codigo";
  titulo2.textContent = "Nombre";
  titulo3.textContent = "Balance";
  titulo4.textContent = "Fecha de Registro";
  titulo5.textContent = "Opciones";

  row.appendChild(titulo1);
  row.appendChild(titulo2);
  row.appendChild(titulo3);
  row.appendChild(titulo4);
  row.appendChild(titulo5);

  let table_body = document.createElement("tbody");
  table_body.setAttribute("id", "clientes");

  table.appendChild(table_body);
}

function AddClient() {
  let codigo = clientes.length + 1;
  let nombre = document.getElementById("nombre");
  let balance = document.getElementById("balance");
  let fechaRegistro = new Date();
  let curFecha = fechaRegistro.toLocaleString();

  let cliente = {
    codigo: codigo,
    nombre: nombre.value,
    balance: balance.value,
    fechaRegistro: curFecha
  };
  nombre.value = "";
  balance.value = "";

  clientes.push(cliente);
  var element = document.getElementById("table");
  element.parentNode.removeChild(element);
  listClients();
}

function EditFunction() {
  let edtBlock = document.getElementsByClassName("editarBlock");
  let edtIn = document.getElementsByClassName("editarIn");
  
  for (var i = 0; i < edtBlock.length; i++){
    edtBlock[i].style.display = "block";
  }
  for (var i = 0; i < edtIn.length; i++){
    edtIn[i].style.display = "inline";
  }

  let inputNombre = document.getElementById("edtname");
  let inputBalance = document.getElementById("edtbal");

  let nombre = clientes[number].nombre;
  let balance = clientes[number].balance;

  inputNombre.value = nombre;
  inputBalance.value = balance;

}

function SaveEdit(){
  let inputNombre = document.getElementById("edtname");
  let inputBalance = document.getElementById("edtbal");

  let nombre = inputNombre.value;
  let balance = inputBalance.value;

  clientes[number].nombre = nombre;
  clientes[number].balance = balance;

  var element = document.getElementById("table");
  element.parentNode.removeChild(element);
  listClients();

  let edtBlock = document.getElementsByClassName("editarBlock");
  let edtIn = document.getElementsByClassName("editarIn");
  
  for (var i = 0; i < edtBlock.length; i++){
    edtBlock[i].style.display = "none";
  }
  for (var i = 0; i < edtIn.length; i++){
    edtIn[i].style.display = "none";
  }
}

function CancelEdit(){
  let edtBlock = document.getElementsByClassName("editarBlock");
  let edtIn = document.getElementsByClassName("editarIn");
  
  for (var i = 0; i < edtBlock.length; i++){
    edtBlock[i].style.display = "none";
  }
  for (var i = 0; i < edtIn.length; i++){
    edtIn[i].style.display = "none";
  }
}
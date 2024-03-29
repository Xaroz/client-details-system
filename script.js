
let clientes = localStorage.getItem('clientes') ? JSON.parse(localStorage.getItem('clientes')) : [];
localStorage.setItem('clientes', JSON.stringify(clientes));

let number = localStorage.getItem('number') ? JSON.parse(localStorage.getItem('number')) : "";
localStorage.setItem('number', JSON.stringify(number));



function AddClient() {
  let codigo;
  let temp;
  if (clientes.length == 0){
    codigo = 1;
  }else{
    tmp = parseInt(clientes[clientes.length - 1].codigo);
    codigo = tmp + 1;
  }
  
  let nombre = document.getElementById("nombre");
  let balance = document.getElementById("balance");
  let fechaRegistro = new Date();
  let curFecha = fechaRegistro.toLocaleString();

  let cliente = {
    codigo: codigo,
    nombre: nombre.value,
    balance: parseFloat(balance.value).toFixed(2),
    fechaRegistro: curFecha
  };
  nombre.value = "";
  balance.value = "";

  clientes.push(cliente);
  alert("Cliente agregado!");
  localStorage.setItem('clientes', JSON.stringify(clientes));
}

function EditFunction() {
  ShowEdit();
  let inputNombre = document.getElementById("edtname");
  let inputBalance = document.getElementById("edtbal");

  let nombre = clientes[number].nombre;
  let balance = clientes[number].balance;

  inputNombre.value = nombre;
  inputBalance.value = balance;
}

function SaveEdit() {
  let inputNombre = document.getElementById("edtname");
  let inputBalance = document.getElementById("edtbal");

  let nombre = inputNombre.value;
  let balance = inputBalance.value;

  clientes[number].nombre = nombre;
  clientes[number].balance = balance;
  localStorage.setItem('clientes', JSON.stringify(clientes));

  DeleteTable();
  listClients();
  HideEdit();
}

function DeleteClient() {
  HideEdit();
  clientes.splice(number,1);
  localStorage.setItem('clientes', JSON.stringify(clientes));
  DeleteTable();
  listClients();
}

function ShowEdit() {
  let edtBlock = document.getElementsByClassName("editarBlock");
  let edtIn = document.getElementsByClassName("editarIn");

  for (var i = 0; i < edtBlock.length; i++) {
    edtBlock[i].style.display = "block";
  }
  for (var i = 0; i < edtIn.length; i++) {
    edtIn[i].style.display = "inline";
  }
}

function HideEdit() {
  let edtBlock = document.getElementsByClassName("editarBlock");
  let edtIn = document.getElementsByClassName("editarIn");

  for (var i = 0; i < edtBlock.length; i++) {
    edtBlock[i].style.display = "none";
  }
  for (var i = 0; i < edtIn.length; i++) {
    edtIn[i].style.display = "none";
  }
}

function DeleteTable(){
  let element = document.getElementById("table");
  element.parentNode.removeChild(element);
}

function ViewClient(){
  let codigo = document.getElementById("codigo-detalle");
  let nombre = document.getElementById("nombre-detalle");
  let balance = document.getElementById("balance-detalle");
  let fecha = document.getElementById("fecha-detalle");

  codigo.value = clientes[number].codigo;
  nombre.value = clientes[number].nombre;
  balance.value = clientes[number].balance;
  fecha.value = clientes[number].fechaRegistro;
}

function listClients() {
  CreateTable();

  for (var i = 0; i < clientes.length; i++) {
    let row = document.createElement("tr");
    document.getElementById("clientes").appendChild(row);

    let codigo = document.createElement("td");
    let nombre = document.createElement("td");
    let balance = document.createElement("td");
    let fechaRegistro = document.createElement("td");
    let opciones = document.createElement("td");

    codigo.textContent = clientes[i].codigo;
    nombre.textContent = clientes[i].nombre;
    balance.textContent = clientes[i].balance;
    fechaRegistro.textContent = clientes[i].fechaRegistro;

    row.appendChild(codigo);
    row.appendChild(nombre);
    row.appendChild(balance);
    row.appendChild(fechaRegistro);   
    row.appendChild(opciones);


    let btnedit = document.createElement("button");
    btnedit.textContent = "editar";
    let btndel = document.createElement("button");
    btndel.textContent = "eliminar";
    let btndet = document.createElement("button");

    btnedit.setAttribute("class", "dynamic-inputs");
    btndel.setAttribute("class", "dynamic-inputs");
    btndet.setAttribute("class", "dynamic-inputs");

    btnedit.setAttribute("id", i);

    opciones.appendChild(btnedit);
    opciones.appendChild(btndel);
    opciones.appendChild(btndet);

    let link_detail = document.createElement("a");
    link_detail.setAttribute("href", "client-details.html");
    link_detail.textContent = "ver";
    btndet.appendChild(link_detail);

    btnedit.addEventListener("click", function() {
      number = btnedit.id;
      EditFunction();
    });
    btndel.addEventListener("click", function() {
      number = btnedit.id;
      DeleteClient();
    });
    link_detail.addEventListener("click",function(e){
      number = btnedit.id;
      localStorage.setItem('number', JSON.stringify(number));
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
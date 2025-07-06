
let contatos = [];
let index = -1;
let modoEdicao = false;


document.getElementById("login-btn").onclick = () => {
  const user = document.getElementById("login-user").value;
  const pass = document.getElementById("login-pass").value;

  if (user === "admin" && pass === "admin") {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
    index = -1;
  } else {
    alert("Usuário ou senha incorretos.");
  }
};


function atualizarFormulario() {
  const item = contatos[index];
  if (item) {
    document.getElementById("placaDoCarro").value = item.placa;
    document.getElementById("modeloDoCarro").value = item.modelo;
    document.getElementById("marcaDoCarro").value = item.marca;
    document.getElementById("anoDoCarro").value = item.ano;
  } else {
    limparFormulario();
  }
}

function limparFormulario() {
  ["placaDoCarro", "modeloDoCarro", "marcaDoCarro", "anoDoCarro"].forEach(id => {
    document.getElementById(id).value = "";
  });
}

function lerFormulario() {
  return {
    placa: document.getElementById("placaDoCarro").value,
    modelo: document.getElementById("modeloDoCarro").value,
    marca: document.getElementById("marcaDoCarro").value,
    ano: document.getElementById("anoDoCarro").value
  };
}


document.getElementById("incluir").onclick = () => {
  modoEdicao = false;
  limparFormulario();
  document.getElementById("placaDoCarro").focus();
};

document.getElementById("salvar").onclick = () => {
  const novo = lerFormulario();
  if (modoEdicao && index >= 0) {
    contatos[index] = novo;
  } else {
    contatos.push(novo);
    index = contatos.length - 1;
  }
  atualizarFormulario();
};

document.getElementById("editar").onclick = () => {
  if (index >= 0) {
    modoEdicao = true;
  }
};

document.getElementById("cancelar").onclick = atualizarFormulario;

document.getElementById("excluir").onclick = () => {
  if (index >= 0) {
    contatos.splice(index, 1);
    index = contatos.length > 0 ? Math.min(index, contatos.length - 1) : -1;
    atualizarFormulario();
  }
};


document.getElementById("first").onclick = () => {
  if (contatos.length > 0) index = 0;
  atualizarFormulario();
};

document.getElementById("prev").onclick = () => {
  if (index > 0) index--;
  atualizarFormulario();
};

document.getElementById("next").onclick = () => {
  if (index < contatos.length - 1) index++;
  atualizarFormulario();
};

document.getElementById("last").onclick = () => {
  if (contatos.length > 0) index = contatos.length - 1;
  atualizarFormulario();
};

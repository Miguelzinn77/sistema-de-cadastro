// ARRAY DE USUÁRIOS dados iniciais dos usuarios
let usuarios = [
  {
    nome: "Terrifier",
    idade: 0,
    foto: "https://tse4.mm.bing.net/th/id/OIP.8amtfrtS8K9WxIyQd0d15gHaEK?pid=Api&P=0&h=180",
    cpf: "123.456.789-00",
  },
  {
    nome: "Jason",
    idade: 0,
    foto: "https://tse2.mm.bing.net/th/id/OIP.ZnDt1Iq8QFsPE3L96-tnfQHaDt?pid=Api&P=0&h=180",
    cpf: "123.456.789-00",
  },
  {
    nome: "Fred",
    idade: 0,
    foto: "https://tse3.mm.bing.net/th/id/OIP.WrFgNX35ZQNM3cdQ0gU9RgHaEo?pid=Api&P=0&h=180",
    cpf: "123.456.789-00",
  },
];

// FUNÇÃO PARA PEGAR OS DADOS DIGITADOS DO FORMULÁRIO
function getFormData() {
  // a função cadastrar puxa aqui
  return {
    //pega dados do formulário
    nome: document.getElementById("nome").value, // aqui manipula com o dom
    idade: document.getElementById("idade").value,
    foto: document.getElementById("foto").value,
    cpf: document.getElementById("cpf").value,
  };
}

// FUNÇÃO PARA PREENCHER O FORMULÁRIO COM DADOS DE UM USUÁRIO
function setFormData(user) {
  //coloca dados no formulário
  document.getElementById("nome").value = user.nome;
  document.getElementById("idade").value = user.idade;
  document.getElementById("foto").value = user.foto;
  document.getElementById("cpf").value = user.cpf;
}

// LIMPA TODOS OS CAMPOS DO FORMULÁRIO DEPOIS DE TER CADASTRADO
function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("foto").value = "";
  document.getElementById("cpf").value = "";
}

// FUNÇÃO PARA CADASTRAR UM NOVO USUÁRIO
function cadastrar() {
  const novoUsuario = getFormData();

  // VALIDAÇÃO BÁSICA
  if (!novoUsuario.nome || !novoUsuario.cpf) {
    alert("Nome e CPF são obrigatórios");
    return;
  } // tem que ter pelo menos NOME e CPF para cadstrar

  // VERIFICA SE JÁ EXISTE UM USUÁRIO COM O MESMO CPF
  const existe = usuarios.find((u) => u.cpf === novoUsuario.cpf);
  // .find() percorre o array pra saber se tem cpf igual
  if (existe) {
    alert("Usuário com esse CPF já existe");
    return;
  }

  // ADICIONA NO ARRAY
  usuarios.push(novoUsuario);
  limparFormulario(); // o limpar é chamado quando o usuario é cadastrado na array, assim ficando tudo em branco de novo após ser cadastrado
  alert("Usuário cadastrado com sucesso");
}

// FUNÇÃO PARA LISTAR OS USUÁRIOS NA TELA
function listar() {
  const container = document.getElementById("listaUsuarios");
  container.innerHTML = "";

  // PERCORRE TODOS OS USUÁRIOS
  usuarios.forEach((user) => {
    // ADICIONA UM CARD PARA CADA USUÁRIO, AQUI É A ÚLTIMA DIV DO HTML,
    container.innerHTML += `
          <div class="col-md-4 mb-3">    
            <div class="card">
              <img src="${user.foto}" class="card-img-top" alt="foto">
              <div class="card-body">
                <h5 class="card-title">${user.nome}</h5>
                <p class="card-text">Idade: ${user.idade}</p>
                <p class="card-text">CPF: ${user.cpf}</p>
              </div>
            </div>
          </div>
        `; // o += é para adicionar um card novo.
  });
}

// FUNÇÃO PARA EDITAR UM USUÁRIO EXISTENTE
function editar() {
  const cpf = document.getElementById("cpf").value;
  // PROCURA USUÁRIO PELO CPF
  const usuario = usuarios.find((u) => u.cpf === cpf);

  if (!usuario) {
    alert("Usuário não encontrado");
    return;
  }

  // PREENCHE O FORMULÁRIO COM OS DADOS ATUAIS
  setFormData(usuario);
  const novoNome = prompt("Novo nome:", usuario.nome);
  const novaIdade = prompt("Nova idade:", usuario.idade);
  const novaFoto = prompt("Nova foto URL:", usuario.foto);

  // ATUALIZA OS DADOS NO ARRAY
  usuario.nome = novoNome;
  usuario.idade = novaIdade;
  usuario.foto = novaFoto;

  alert("Usuário atualizado com sucesso");
}

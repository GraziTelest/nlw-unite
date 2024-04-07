let participantes = [
  {
    nome: "Gabriel Murayama",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2024,2,23,19,23),
    dataCheckIn: new Date(2024,2,25,22,8)
  },
   {
    nome: "João Silva",
    email: "joao.silva@example.com",
    dataInscricao: new Date(2024, 3, 1, 10, 30),
    dataCheckIn: new Date(2024, 3, 3, 15, 45)
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataInscricao: new Date(2024, 3, 5, 14, 0),
    dataCheckIn: new Date(2024, 3, 7, 9, 30)
  },
  {
    nome: "José Santos",
    email: "jose.santos@example.com",
    dataInscricao: new Date(2024, 3, 10, 16, 45),
    dataCheckIn: new Date(2024, 3, 12, 11, 20)
  },
  {
    nome: "Ana Sousa",
    email: "ana.sousa@example.com",
    dataInscricao: new Date(2024, 3, 15, 9, 10),
    dataCheckIn: new Date(2024, 3, 18, 13, 55)
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@example.com",
    dataInscricao: new Date(2024, 3, 20, 17, 30),
    dataCheckIn: new Date(2024, 3, 22, 8, 45)
  },
  {
    nome: "Sofia Pereira",
    email: "sofia.pereira@example.com",
    dataInscricao: new Date(2024, 3, 25, 12, 15),
    dataCheckIn: new Date(2024, 3, 27, 16, 10)
  },
  {
    nome: "Carlos Martins",
    email: "carlos.martins@example.com",
    dataInscricao: new Date(2024, 4, 1, 8, 45),
    dataCheckIn: new Date(2024, 4, 3, 10, 20)
  },
  {
    nome: "Mariana Ferreira",
    email: "mariana.ferreira@example.com",
    dataInscricao: new Date(2024, 4, 5, 15, 20),
    dataCheckIn: new Date(2024, 4, 7, 19, 35)
  },
  {
    nome: "Luís Gonçalves",
    email: "luis.goncalves@example.com",
    dataInscricao: new Date(2024, 4, 10, 11, 0),
    dataCheckIn: new Date(2024, 4, 12, 14, 45)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to (participante.dataInscricao)

  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  // condicional verdadeira
  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""

  for(let participante of participantes){
  output = output + criarNovoParticipante(participante)
  }
  // substituir informaçao  do html
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = now FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
  //verf se o partc ja existe 
const participanteExiste = participantes.find((p) => p.email == participante.email
)

if (participanteExiste) {
    alert('Email já cadastrado!')
    return
}

  participantes = [participante, ...participantes]
  atualizarLista(participantes)
 

//limpar formulario 
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}
const fazerCheckIn = (event) => {
  // confirmar se realmente quer 
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

    if(confirm(mensagemConfirmacao)== false) {
      return
    }
  // encontrar o partc dentro da lista 
  const participante = participantes.find((p) => p.email == event.target.dataset.email)
  // atializar checkin
  participante.dataCheckIn = new Date()
  // atualizar a lista de partc
  atualizarLista(participante)
}

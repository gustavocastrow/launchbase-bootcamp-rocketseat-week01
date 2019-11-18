const alunosDaTurmaA = [
  {//0
    nome: "Gustavo",
    nota: 9.8

  },
  {//1
    nome: "Maria",
    nota: 10
  },
  {//2
    nome: "João",
    nota: 2
  },
  {
    nome: "Mais um",
    nota: 10
  }
]

const alunosDaTurmaB = [
  {
    nome: "Mayk",
    nota: 6.2
  },
  {
    nome: "Diego",
    nota: 2
  },
  {
    nome: "Ricardo",
    nota: 4
  },
  {
    nome: "Novo Aluno",
    nota : 5
  }

]

function calculaMedia(alunos) {
  let soma = 0;
  for(let i = 0; i <alunos.length; i++){
    soma = soma + alunos[i].nota;
  }
  const media = soma /alunos.length
  return media 

}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
  if(media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns`);
  } else {
    console.log(`A media da turma ${turma} foi menor que 5`);
  }
}

enviaMensagem(media1, 'turmaA');
enviaMensagem(media2, 'turmaB');
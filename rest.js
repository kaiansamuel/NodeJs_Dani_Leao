//Spread
const aluno = {
  nome: "Fernando",
  idade: 19,
  cursos: ["Node", "SQL", "Docker"],
  email: "fernando@gmail.com",
  endereco: "Rua do Quartel",
  telefone: "123423432",
}
const alunoAtualizado = {
  ...aluno,
  idade: 20,
  cursos: [...aluno.cursos, "Java"]
}

//console.log({ alunoAtualizado })

//Rest
const { nome, ...resto } = aluno
//console.log(resto)

const names = ["Daniel", "Mariana", "Carol"]
const [primeiro, ...qualquerCoisa] = names
console.log(qualquerCoisa)
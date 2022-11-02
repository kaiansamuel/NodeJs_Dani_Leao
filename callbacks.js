function buscarUsuario(callback) {
  const usuario = {
    id: 1, 
    nome: "Marcos",
    idade: 18,
  }
  callback(usuario)
}
let calcularUsuario = (usuario) => {
  if (usuario.idade >- 18) {
    console.log('Maior de idade')
  } else {
    console.log('Menor de idade')
  }
}
buscarUsuario(calcularUsuario)
/*
9815 0000 0000 1234
**** **** **** 1234
Mascarar os 12 primeiros números 
Exibir os 4 últimos números

const input = document.getElementById('ent')

input.addEventListener('keypress', () => {
  let inputlength = input.value.length
  if (inputlength === 4 || inputlength ===9 || inputlength === 14) {
    input.value += ' '
  }
})
  if (input.length === 4) {
    input.value += '.'
} 
*/
let cartao = prompt('Informe o número do seu cartão')
const numerosMask = cartao.length - 4

alert('*'.repeat(numerosMask) + cartao.substring(numerosMask))


const input = document.getElementById('ent')

input.addEventListener('keypress', () => {
  let inputlength = input.value.length
  if (inputlength === 4 || inputlength ===9 || inputlength === 14) {
    input.value += ' '

  }
})

  /*
  if (input.length === 4) {
    input.value += '.'

  } */


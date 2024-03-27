const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
let value = ''

input.addEventListener('change', () => {
  value = input.value
})

btn.addEventListener('click', () => {
  console.log(value)
  input.value = ''
})

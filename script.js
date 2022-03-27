
const  but = document.getElementById('accept')
const  login = document.getElementById('login')
const foto = document.getElementById('foto')

but.onclick = function myFun() {
  login.style.display = 'block'
  foto.style.display = 'none'
}
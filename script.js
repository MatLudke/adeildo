const but = document.getElementById('accept')
const login = document.getElementById('login')
const foto = document.getElementById('foto')
const itsme = document.getElementById('itsme')
const autentic = document.getElementById('auth')
const itsnot = document.getElementById('itsnot')
const father = document.getElementById('father')
const sobre = document.getElementById('sobre')
const confirmation = document.getElementById('confirmation')

but.onclick = function myFun() {
  login.style.display = 'block'
  foto.style.display = 'none'
}

itsme.addEventListener('click', () =>{
  autentic.style.display = 'block'
  itsme.style.display = 'none'
  itsnot.style.display = 'none'
  sobre.style.display = 'none'
  father.style.display = 'none'
  confirmation.style.display = 'none'
  
})

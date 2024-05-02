const btnCadastro = document.getElementById('btn-cadastro');
const btnLogin = document.getElementById('btn-login');
const innerCard = document.querySelector('.flip-card-inner');
let rotate = false;

const Rotate = () =>
{
   if(!rotate)
   {
        innerCard.classList.add('rotate');
        rotate = true;
   }
   else
   {
        innerCard.classList.remove('rotate');
        rotate = false;
   }
}

btnCadastro.addEventListener('click', Rotate);
btnLogin.addEventListener('click', Rotate);
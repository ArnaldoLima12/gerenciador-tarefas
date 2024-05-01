const toggleFAB = fab => 
{
	if(document.querySelector(fab).classList.contains('show'))
    {
  	    document.querySelector(fab).classList.remove('show');
          document.querySelector('.icon img').src = 'imgs/seta-cima.png'
    }
    else
    {
        document.querySelector(fab).classList.add('show');
        document.querySelector('.icon img').src = 'imgs/seta-baixo.png'
    }
}

document.querySelector('.fab .main').addEventListener('click', () => {
	toggleFAB('.fab');
});

document.querySelectorAll('.fab ul li button').forEach(item => {
	item.addEventListener('click', () => {
		toggleFAB('.fab');
	});
});
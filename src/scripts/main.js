const icon = document.querySelector('#icon-header');
const navigator = document.querySelector('#navigator');
const navOpts = document.querySelectorAll('#nav-opts');

const setas = document.querySelectorAll('#seta');
const questions = document.querySelectorAll('#questions');
const articles = document.querySelectorAll('#article');

const agreed = document.querySelector('#agreed');
const button = document.querySelector('#button');
const cep = document.querySelector('#cep');
const rua = document.querySelector('#street');
const cidade = document.querySelector('#city');
const estado = document.querySelector('#state');
const bairro = document.querySelector('#district');

const optionOne = document.querySelector('#optionOne');
const optionTwo = document.querySelector('#optionTwo');
const optionTree = document.querySelector('#optionTree');
const optionFour = document.querySelector('#optionFour');

const informationOne = document.querySelector('#informationOne');
const informationTwo = document.querySelector('#informationTwo');
const informationTree = document.querySelector('#informationTree');
const informationFour = document.querySelector('#informationFour');

const form = document.querySelector('form');

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

const getAddress = async (cep) => {
  const addres = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const result = await addres.json();
  return result;
};

const searchCep = async (value) => {
  const {address, district, city, state} = await getAddress(value);
  try {
    if (!address) { throw new Error('CEP não encontrado'); }
    rua.value = address; 
    bairro.value = district; 
    cidade.value = city;
    estado.value = state;
  } catch (error) {
    Swal.fire({
      title: 'Oops...',
      text: `${error.message}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
};

const scriptURL = "https://script.google.com/macros/s/AKfycby3bznOIrqTh5YyDWJ9RQtFJVjdCRo98aouaPpzM4_1inc3SKaL2hTEf5EvppzAfNZg/exec";

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(async response =>
      Swal.fire({
        title: 'Sucesso!',
        text: 'Inscrição realizada',
        icon: 'success',
        confirmButtonText: 'Ok'
      }, await response.json()))
    .catch(error =>
      Swal.fire({
      title: 'Oops...',
      text: `${error.message}`,
      icon: 'error',
      confirmButtonText: 'Ok'
    }))
})

agreed.addEventListener('change', () => {
  if (
    cep.value !== '' &&
    rua.value !== '' &&
    cidade.value !== '' &&
    estado.value !== '' &&
    bairro.value !== '' &&
    agreed.checked === true
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
})

cep.addEventListener('change', ({ target }) => searchCep(target.value));

icon.addEventListener('click', () => {
  console.log('clicou');
  if(navigator.classList[navigator.classList.length -1] === 'hidden'){
    navigator.classList.remove('hidden')
    navigator.classList.add('block')
  } else {
    navigator.classList.remove('block')
    navigator.classList.add('hidden')
  }
})

navOpts.forEach((nav, index) => {
  nav.addEventListener('click', () => {
    navigator.classList.remove('block')
    navigator.classList.add('hidden')
  })
})


optionOne.addEventListener('mouseover', () => {
  currentSlide = 0;
  informationOne.classList.remove('hidden');
  informationTwo.classList.remove('block');
  informationTwo.classList.add('hidden');
  informationTree.classList.remove('block');
  informationTree.classList.add('hidden');
  informationFour.classList.remove('block');
  informationFour.classList.add('hidden');

  optionOne.className = 'bg-yellow-500 p-2 rounded-lg';
  optionTwo.className = '';
  optionTree.className = '';
  optionFour.className = '';
})

optionTwo.addEventListener('mouseover', () => {
  currentSlide = 1;
  informationOne.classList.remove('block');
  informationOne.classList.add('hidden');
  informationTwo.classList.remove('hidden');
  informationTwo.classList.add('block');
  informationTree.classList.remove('block');
  informationTree.classList.add('hidden');
  informationFour.classList.remove('block');
  informationFour.classList.add('hidden');

  optionOne.className = '';
  optionTwo.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
  optionTree.className = '';
  optionFour.className = '';
})

optionTree.addEventListener('mouseover', () => {
  currentSlide = 2;
  informationOne.classList.remove('block');
  informationOne.classList.add('hidden');
  informationTwo.classList.remove('block');
  informationTwo.classList.add('hidden');
  informationTree.classList.remove('hidden');
  informationTree.classList.add('block');
  informationFour.classList.remove('block');
  informationFour.classList.add('hidden');

  optionOne.className = '';
  optionTwo.className = '';
  optionTree.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
  optionFour.className = '';
})

optionFour.addEventListener('mouseover', () => {
  currentSlide = 3;
  informationOne.classList.remove('block');
  informationOne.classList.add('hidden');
  informationTwo.classList.remove('block');
  informationTwo.classList.add('hidden');
  informationTree.classList.remove('block');
  informationTree.classList.add('hidden');
  informationFour.classList.remove('hidden');
  informationFour.classList.add('block');

  optionOne.className = '';
  optionTwo.className = '';
  optionTree.className = ''; 
  optionFour.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
})

optionOne.addEventListener('click', () => {
  currentSlide = 0;
  informationOne.classList.remove('hidden');
  informationTwo.classList.remove('block');
  informationTwo.classList.add('hidden');
  informationTree.classList.remove('block');
  informationTree.classList.add('hidden');
  informationFour.classList.remove('block');
  informationFour.classList.add('hidden');

  optionOne.className = 'bg-yellow-500 p-2 rounded-lg';
  optionTwo.className = '';
  optionTree.className = '';
  optionFour.className = '';
})

optionTwo.addEventListener('click', () => {
  currentSlide = 1;
  informationOne.classList.remove('block');
  informationOne.classList.add('hidden');
  informationTwo.classList.remove('hidden');
  informationTwo.classList.add('block');
  informationTree.classList.remove('block');
  informationTree.classList.add('hidden');
  informationFour.classList.remove('block');
  informationFour.classList.add('hidden');

  optionOne.className = '';
  optionTwo.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
  optionTree.className = '';
  optionFour.className = '';
})

optionTree.addEventListener('click', () => {
  currentSlide = 2;
  informationOne.classList.remove('block');
  informationOne.classList.add('hidden');
  informationTwo.classList.remove('block');
  informationTwo.classList.add('hidden');
  informationTree.classList.remove('hidden');
  informationTree.classList.add('block');
  informationFour.classList.remove('block');
  informationFour.classList.add('hidden');

  optionOne.className = '';
  optionTwo.className = '';
  optionTree.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
  optionFour.className = '';
})

optionFour.addEventListener('click', () => {
  currentSlide = 3;
  informationOne.classList.remove('block');
  informationOne.classList.add('hidden');
  informationTwo.classList.remove('block');
  informationTwo.classList.add('hidden');
  informationTree.classList.remove('block');
  informationTree.classList.add('hidden');
  informationFour.classList.remove('hidden');
  informationFour.classList.add('block');

  optionOne.className = '';
  optionTwo.className = '';
  optionTree.className = ''; 
  optionFour.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
})


function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.classList.add('hidden');
  });

  slides[slideIndex].classList.remove('hidden');
  slides[slideIndex].classList.add('block');

  switch(slideIndex) {
    case 0:
      optionOne.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
      optionTwo.className = '';
      optionTree.className = '';
      optionFour.className = '';
      break;
    case 1:
      optionOne.className = '';
      optionTwo.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
      optionTree.className = '';
      optionFour.className = '';
      break;
    case 2:
      optionOne.className = '';
      optionTwo.className = '';
      optionTree.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
      optionFour.className = '';
      break;
    case 3:
      optionOne.className = '';
      optionTwo.className = '';
      optionTree.className = ''; 
      optionFour.className = 'bg-yellow-500 p-2 rounded-lg font-extrabold';
      break;
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

setas.forEach((seta, index) => {
  seta.addEventListener('click', () => {
    if(seta.classList[3] === 'rotate-90') {
      seta.classList.remove('rotate-90');
      seta.classList.add('rotate-180');
      questions[index].classList.remove('hidden');
      questions[index].classList.add('block');
      articles[index].classList.remove('h-10');
      articles[index].classList.add('h-20');
    } else {
      seta.classList.remove('rotate-180');
      seta.classList.add('rotate-90');
      questions[index].classList.remove('block');
      questions[index].classList.add('hidden');
      articles[index].classList.remove('h-20');
      articles[index].classList.add('h-10');
    }
  })
})

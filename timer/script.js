const timer = document.querySelector('.countdown'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    message = document.querySelector('.message'),

    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    start = document.querySelector('.start'),
    reset = document.querySelector('.reset'),
    again = document.querySelector('.again'),

    inputMinutes = document.querySelector('.inputMinutes').value,
    inputSeconds = document.querySelector('.inputSeconds').value;


let countSec = 0,
    countMin = 0,
    countSecUno = 0,
    countMinUno = 0;

const updateText = () => {
    if (countSecUno + countMinUno > 0 ){
    seconds.innerHTML = (0 + String(countSecUno)).slice(-2);
    minutes.innerHTML = (0 + String(countMinUno)).slice(-2);
}
    else {
        minutes.innerHTML = (0 + String(countMin)).slice(-2);
        seconds.innerHTML = (0 + String(countSec)).slice(-2);
    }
}

function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

const $ = (e) => new jQuery(e);

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

$('.reset').hide();
$('.again').hide();

updateText();

const countDown = () => {
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  reset.onclick = () => {
      clearTimeout(timeinterval);
      countSec = 0;
      countMin = 0;
      countSecUno = 0;
      countMinUno = 0;
      $('.start').show();
      $('.plus').show();
      $('.minus').show();
      $('input').show();
      $('.reset').hide();
      document.querySelector('.inputMinutes').value = '';
      document.querySelector('.inputSeconds').value = '';
      updateText();
  }
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
    $('.reset').hide();
    $('.again').show();
  }
  if(countSec > 0) countSec--,
  countSecUno = countSec;

  else{
  	countSec = 59;
    countMin--;
    countMinUno = countMin
  }
  updateText();
}

plus.onclick = () => {
  if(countSecUno < 59) ++countSecUno;
  else{
  	countSecUno = 0;
  	++countMinUno;
  }
  updateText()
}

minus.onclick = () => {
	if(countMinUno <= 0 && countSecUno===0){
  	countSecUno = 0;
    countMinUno = 0;
    return;
  }
  if(countSecUno > 0) --countSecUno;
  else{
  	countSecUno = 59;
  	--countMinUno;
  }
  updateText();
}

start.onclick = () => {
    if (countSecUno + countMinUno > 0 ) {
        countMin = countMinUno;
        countSec = countSecUno;
    }
    else {
    countMin = document.querySelector('.inputMinutes').value;
    countSec = document.querySelector('.inputSeconds').value;
}
    $('.start').hide();
    $('.plus').hide();
    $('.minus').hide();
    $('input').hide();
    $('.reset').show();

	  countDown();
}


again.onclick = () => {
    timer.style.display = '';
    message.innerHTML = '';
    countSec = 0;
    countMin = 0;
    countSecUno = 0;
    countMinUno = 0;
    $('.start').show();
    $('.plus').show();
    $('.minus').show();
    $('input').show();
    $('.reset').hide();
    $('.again').hide();
    document.querySelector('.inputMinutes').value = '';
    document.querySelector('.inputSeconds').value = '';
    updateText();
}

var div_1 = document.querySelector('.bloks_firstdiv');
var div_2 = document.querySelector('.bloks_seconddiv');
var div_3 = document.querySelector('.bloks_thirddiv');
var div_4 = document.querySelector('.bloks_fourthdiv');
var div_5 = document.querySelector('.blocks_fivesdiv');

div_1.addEventListener('click', acriveCircle);
div_2.addEventListener('click', acriveCircle);
div_3.addEventListener('click', acriveCircle);
div_4.addEventListener('click', acriveCircle);
div_5.addEventListener('click', acriveCircle);

function acriveCircle(e) {
	e.stopPropagation();
	var that = e.target;
	if(that.style.backgroundColor === 'red'){
		that.style.backgroundColor = '';
	}else {
		that.style.backgroundColor = 'red';
	}
}
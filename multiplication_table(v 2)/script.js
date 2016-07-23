var generateButton = document.getElementById('generateButton');
var result = document.getElementById('result');
var clearButton = document.getElementById('clearButton');

generateButton.addEventListener('click', function(){
	module.generateTable();
});

clearButton.addEventListener('click', module.resetTable);
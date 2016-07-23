var module = (function(){
	
	var multiRow = document.getElementById('x'),
			multiColl = document.getElementById('y'),
			resultDiv = document.getElementById('result'),
			generTime = document.getElementById('generating_time');
	
	function generateTable() {
		var x = parseInt(multiRow.value) || 10;
		var y = parseInt(multiColl.value) || 10;
		
		
		var startTime = new Date().getTime();
		var result ='';
		result += '<table>';
		result += '<tbody>';
		for(var i=1; i <= x; i++){
			result += '<tr>';
			for(var j=1; j <= y; j++){
				result += '<td>' + (j*i)+ '</td>'
			}
			result += '</tr>';
		}
		result += '</tbody>';
		result += '</table>';
		
		resultDiv.innerHTML = result;
		
		var endTime = new Date().getTime();
		var resultTime = endTime - startTime;
		generTime.value = resultTime;
	}
	
	function resetTable () {
		resultDiv.innerHTML = '';
		multiRow.value = '';
		multiColl.value = '';
		generTime.value = '';
		multiRow.focus();
	}
	
	return {
		generateTable : generateTable,
		resetTable : resetTable
	}
	
})();
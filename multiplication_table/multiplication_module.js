var module = (function(){
	
	var multiRow = document.getElementById('x'),
			multiColl = document.getElementById('y'),
			multiTIme = document.getElementById('generating_time'),
			result = document.getElementById('result');
	
		function createMyTable (rows, cols) {
			var startTime = new Date().getTime();
			var rows = parseInt(multiRow.value) || 10,
					cols = parseInt(multiColl.value)|| 10,
					resultDiv = document.getElementById('result');
			resultDiv.innerHTML = '';
			var t = document.createElement('table');
			resultDiv.appendChild(t);
			var th = t.appendChild(document.createElement('thead'));
			for(var i=1; i <= rows; i++){
				var tr = th.appendChild(document.createElement('tr'));
				for(var j=1; j <= cols; j++){
					var td = tr.appendChild(document.createElement('td'));
					td.appendChild(document.createTextNode(i*j));
				}
			}
			var endTime = new Date().getTime();
			var resultTime = endTime - startTime;
			multiTIme.value = resultTime +' ms';
		}
	
	function resetTable () {
		multiColl.value = '';
		multiRow.value = '';
		multiRow.focus();
		result.innerHTML = '';
		multiTIme.value = '';
	}
	
	return {
		createTable: createMyTable,
		resetTable: resetTable
	}
	
})();
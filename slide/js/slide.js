
window.onload = function () {
	var con = document.getElementById('con');
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var bit = document.getElementsByClassName('bit')
	var pot = bit[0].getElementsByTagName('i');
	var main = document.getElementsByClassName('container')[0];
   
	var index = 1;

	function showbtn() {
		for (var i = 0; i < pot.length; i++) {
			pot[i].className = '';
		}
		pot[index-1].className = 'on';
	
	}

	function silde(rel) {
		var conleft = parseInt(con.style.left) + rel;

		if (parseInt(con.style.left, 10) <= -1000  && parseInt(con.style.left, 10) >= -5000) {
			con.style.left = parseInt(con.style.left, 10) +   'px';
			con.style.left =  conleft + 'px';
		}
		if (conleft >= 0) {
	        con.style.left = -5000 + 'px';
        }else if (conleft <= -6000) {
	        con.style.left = -1000 + 'px'; 
        }; 
		
	};



	next.onclick = function () {
		if (index == 5) {			
		    index = 1;
		}else{			
			index += 1;
		}

		showbtn();
		silde(-1000);

	};


	prev.onclick = function () { 
        if (index == 1) {
            index = 5;
        }else{
		    index -= 1;  	
        }
        showbtn();         
		silde(1000);  
	};

	function star() {
		hand = setInterval(next.onclick,2000);
	}

	star();


	for (var i = 0; i < pot.length; i++) {
		pot[i].onclick = function () {

			var select = parseInt(this.getAttribute('index'), 10);
			var change = -1000 * (select - index);

			silde(change);
			index = select;
			showbtn();
		}
	}
};
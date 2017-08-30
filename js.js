
window.onload = function() {
    var ul = document.querySelector(".pageTree");
    // document.querySelector("#parse").onclick = function(){
    // 	insertUlText('sec.html');
	
    // }
    // document.querySelector("#parse2").onclick = function(){
    // 	insertUlText('first.html');
	
    // }
    ul.onclick = function(e) {
        var target = e.target;
	if(target.tagName != "A") return;
	var href= target.getAttribute('href');

	
	history.pushState(null,null,href);
	insertUlText(href);
	e.preventDefault();
    }
}

function insertUlText(href) {
    var req = new XMLHttpRequest();
     req.onreadystatechange = function() {
         if(req.readyState == 4) {
 	     document.querySelector(".insert").innerHTML = req.responseText;
 	}
     }
     req.open('GET', 'http://localhost/desolio.com/' + href.split('/').pop());
     req.send();
}

function historyCome() {
    insertUlText(location.pathname);
}
window.addEventListener('popstate',historyCome);





































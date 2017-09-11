
window.onload = function() {
    var navigation = document.querySelector(".site-parts");
    
    navigation.onclick = function(e) {
        var target = e.target;
	if(target.tagName != "A") return;
	var href= target.getAttribute('href');
	
	history.pushState(null, null, href);
	insertContent(href);
	e.preventDefault();
    };
};

 function insertContent(href) {
     var req = new XMLHttpRequest();
     req.onreadystatechange = function() {
         if(req.readyState == 4) {
 	    pastContent.innerHTML = req.responseText;
 	}
     };
     req.open('GET', 'http://localhost/desolio.com/' + href.split('/').pop());
     req.send();
}

function historyCome() {
    insertContent(location.pathname);
}
window.addEventListener('popstate', historyCome);




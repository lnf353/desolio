
window.onload = function() {
    var navigation = document.querySelector(".site-parts");
    var b = document.querySelectorAll('.site-parts')[0];
    
    var highlightPartOfMenu = function(e) {
	if(e.target.tagName != "A") return;
	if(!e.target.classList.contains('site-parts--highlight-point')) {
	    e.target.classList.add('site-parts--highlight-point');
	    b.classList.remove('site-parts--highlight-point');
	    b=e.target;
	}
	
	if(e.target.getAttribute('href') != "home.html"){
	    navigation.classList.add('site-parts--black-menu');
	    
	} else {
	    navigation.classList.remove('site-parts--black-menu');
	}
    };

    

    var logoSlider = function() {
	
    };
    
    document.addEventListener('click', highlightPartOfMenu);
    
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
 	    document.querySelector('.past-content').innerHTML = req.responseText;
 	}
    };
    req.open('GET', 'http://localhost/desolio.com/' + href.split('/').pop());
    req.send();
}

function historyCome() {
    insertContent(location.pathname);
}

window.addEventListener('popstate', historyCome);




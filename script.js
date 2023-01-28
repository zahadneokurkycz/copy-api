var pole = location.search.substring(1).split('&'); 

var copyarea = document.getElementById('copyarea');

var copybtn = document.getElementById('copybtn')

var httpGetVars = new Array(); 



for(i = 0; i < pole.length; i++){

	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 

}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);

copyarea.innerHTML = httpGetVars['text'];



function copy() {

    copybtn.innerHTML = '<i class="bi bi-clipboard-check-fill"></i>';

    copyarea.select();

    copyarea.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyarea.innerHTML);

}
var pole = location.search.substring(1).split('&'); 
var copyarea = document.getElementById('copyarea');
var copybtn = document.getElementById('copybtn');
var copyspan = document.getElementById('copyspan');
var httpGetVars = new Array(); 

for(i = 0; i < pole.length; i++){
	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 
}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);
copyspan.innerHTML = httpGetVars['text'];
copyarea.value = copyspan.innerHTML;

document.getElementById("copybtn")
.onclick = function() {
    let text = document.getElementById("copyarea").value;
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Text copied to clipboard');
    })
    .catch(err => {
        alert('Error in copying text: ', err);
    });
}
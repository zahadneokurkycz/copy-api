var pole = location.search.substring(1).split('&'); 
var copybtn = document.getElementById('copybtn');
var httpGetVars = new Array(); 

for(i = 0; i < pole.length; i++){
	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 
}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);
document.getElementById('copyspan').innerHTML = httpGetVars['text'];
document.getElementById('copyarea').innerHTML = document.getElementById('copyspan').innerHTML;

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
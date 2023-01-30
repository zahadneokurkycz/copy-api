var pole = location.search.substring(1).split('&'); 
var httpGetVars = new Array(); 
var copybtn = document.getElementById('copybtn');

for(i = 0; i < pole.length; i++){
	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 
}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);

function copy() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {

            navigator.clipboard.writeText(httpGetVars['text']).then(() => {
                document.getElementById('copybtn').innerHTML = '<i class="bi bi-clipboard-check-fill"></i>';
                setTimeout('changeback();', 3 * 1000);
            },() => {
                alert('Failed to copy');
                /* Rejected - text failed to copy to the clipboard */
            });
        }
    });
}

function changeback() {
    
}
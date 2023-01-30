var pole = location.search.substring(1).split('&'); 
var httpGetVars = new Array(); 

for(i = 0; i < pole.length; i++){
	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 
}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);

function copy() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {

            navigator.clipboard.writeText(httpGetVars['text']).then(() => {
                change('clipboard-check-fill');
                setTimeout("change('clipboard');", 1500);
            },() => {
                alert('Failed to copy');
                /* Rejected - text failed to copy to the clipboard */
            });
        }
    });
}

function change(symbol) {
    document.getElementById('copysymbol').classList = 'bi ';
    document.getElementById('copysymbol').classList += 'bi-' + symbol;
}

function btnpaste() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = 'copy();'
    btn.title = 'Click to copy';
    btn.id = 'copybtn';
    btn.innerHTML = '<i class="bi bi-clipboard" id="copysymbol"></i>';
    if (httpGetVars['outline'] == 'true') {
        btn.className = 'btn btn-outline-success';
    } else {
        btn.className = 'btn btn-success';
    }
    document.body.appendChild(btn);
}

document.getElementById("copybtn").addEventListener("click", copy);
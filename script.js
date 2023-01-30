var pole = location.search.substring(1).split('&'); 
var httpGetVars = new Array(); 

for(i = 0; i < pole.length; i++){
	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 
}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);

if (httpGetVars['outline'] == 'true') {
    document.getElementById('copybtn').classList = 'btn ';
    document.getElementById('copybtn').classList += 'btn-outline-success'
}

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
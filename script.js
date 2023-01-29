var pole = location.search.substring(1).split('&'); 
var httpGetVars = new Array(); 

for(i = 0; i < pole.length; i++){
	httpGetVars[pole[i].split('=')[0]] = decodeURIComponent(pole[i].split('=')[1]); 
}

document.documentElement.setAttribute('data-bs-theme', httpGetVars['theme']);

function copy() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {

            navigator.clipboard.writeText("This is the text to be copied").then(() => {
                alert('Text successfully copied to clipboard');
                /* Resolved - text copied to clipboard successfully */
            },() => {
                alert('Failed to copy');
                /* Rejected - text failed to copy to the clipboard */
            });
        }
    });
}
$(document).ready(function () {
    console.log(getUrlVars().patientno);

    var firstTabEl = document.querySelector('#myTab li:last-child a');
    var firstTab = new bootstrap.Tab(firstTabEl);
    
    firstTab.show();
    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
});
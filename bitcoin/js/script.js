
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://blockchain.info/fr/rawblock/$block_index", true);'Voici l"Api des données WS'
xmlhttp.send();

function homePageLoading() {
    url = '';
    elementID = 'idDeVotreElementHtml';
    fonctionRequeteApi(url, elementID);

    ...
}

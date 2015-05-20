//See README.md for a full description.

$(document).ready(function() {
    var xmlhttp = new XMLHttpRequest();
    var url = "news.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            displayNews(json);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    
    function displayNews(news) {
        $('.news').html('<h3>' + news[0].title + '</h3>');
    }
});
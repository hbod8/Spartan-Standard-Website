//See README.md for a full description.

$(document).ready(function() {
    var xmlhttp = new XMLHttpRequest();
    var url = "news.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            console.log(json);
            displayNews(json);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function newsListener(table, news) {
        var article;
        $(".newsitem").click(function() {
            $(".news").html("");
            article = $(this).attr("tableitem");
            console.info("Getting article: " + article);
            $(".news").html("<tr><td class=\"newsitem\"><button class=\"backbutton\">Back</button><h2>" + news[article].title + "</h2><em>" + news[article].date_created + "<br>Uploaded:  " + news[article].date_uploaded + "</em><br><h5>" + news[article].description + "</h5><br><p>" + news[article].content);
            $("button").click(function() {
                console.log("Back button pressed.");
                $(".news tr").remove();
                displayNews(news);
            });
        });
    }
    
    function displayNews(news) {
        var table;
        var numberOfRows = 0;
        table += "<tr>";
        for (i = 0, a = 0; i < news.length; i++, a++) {
            if (a == 3) {
                table += "</tr><tr>";
                numberOfRows++;
                a = 0;
            }
            table += "<td class=\"newsitem\" tableitem=" + i + "><h5>" + news[i].title + "</h5><em>" + news[i].date_uploaded + "</em><p>&nbsp&nbsp&nbsp" + news[i].description + "<p></td>";
        }
        table += "</tr>";
        console.info("Added \'" + numberOfRows + "\' row(s).");
        $(".news").append(table);
        newsListener(table, news);
    }
});
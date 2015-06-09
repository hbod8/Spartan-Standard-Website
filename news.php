<html>
    <head>
        <link rel="stylesheet" type="text/css" href="stylesheet.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <div class="nav">
            <ul class="navbar">
                <a class="navlink" href="index.html"><li class="navitem"><p class="navtext">Home</p></li></a>
                <a class="navlink" href="news.html"><li class="navitem"><p class="navtext">News</p></li></a>
                <a class="navlink" href="index.html"><li class="navitem"><p class="navtext">About</p></li></a>
                <a class="navlink" href="index.html"><li class="navitem"><p class="navtext">Writers</p></li></a>
                <a class="navlink" href="index.html"><li class="navitem"><p class="navtext">...</p></li></a>
                <a class="navlink" href="index.html"><li class="navitem"><p class="navtext">...</p></li></a>
            </ul>
        </div>
        <div class="news">
            <?php
$file = fopen("news.json", "r") or die("Error");
$fileContents = fread($file, filesize("news.json"));
fclose($file);

$JSONData = json_decode($fileContents);

echo '<div class="newsItem"></div>';
            ?>
        </div>
    </body>
</html>
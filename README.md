# Spartan Standard Website
The official website for The Spartan Standard newspaper.

## Table of Contents:
1. [About & Licence](#about)
2. [How to Upload New Articles](#upload)
3. [JS Documentaion](#js)

<h2 id="about">About & Licence</h2>

The Spartan Standard Website is built to serve as a site for the online needs of the Spartan Standard newspaper.

Licence Information (summarized):

Permitted:
- Commercial Use
- Distribution
- Modification
- Patent Grant
- Private Use
- Sublicensing

Forbidden:
- Hold Liable
- Use Trademark

See the "LICENCE" file for futher and detailed information.

<h2 id="upload">How to Upload New Articles</h2>

Here are sets of instructions to edit, add to, or delete articles from the website:

#### Add:

1. Gain permissions to access the location of the website and establish a secure connection using either FTP or SFTP.
2. Locate the news.json file, this file is a master copy so if you delete it all data from articles will be lost.  *WARNING: when using FTP and SFTP the is NO UNDO BUTTON once a file is deleted.*
3. Either download the file for editing or use a built-in remote file editor if availible.  Open the file ready for editing.
4. This file uses the [JavaScript Object Notation](http://www.json.org/) (JSON) as its interchange format.  In the file you will need to add a new element to the base array, to do this first copy and paste the syntax into the top of the page:

Syntax:
```json
    {
        "title": "Title of article.",
        "description": "A short three sentence abstract to catch gthe readers attention.",
        "author": "First Last",
        "date_created": "Date the article was authored",
        "date_uploaded": "Date the article was put here",
        "content": "Content of the article."
    },
```

NOTE: when putting in the content make sure it is all on one line and use `<br>` to make new lines and `&nbsp&nbsp&nbsp&nbsp&nbsp` for indents.

then,

If the file looks like this:
```json
[
//    *ADD THE SYNTAX HERE REPLACING THIS LINE*
    {
        "title": "Title of article.",
        "description": "A short three sentence abstract to catch gthe readers attention.",
        "author": "First Last",
        "date_created": "Date the article was authored",
        "date_uploaded": "Date the article was put here",
        "content": "Content of the article."
    },
    {
        "title": "Title of article.",
        "description": "A short three sentence abstract to catch gthe readers attention.",
        "author": "First Last",
        "date_created": "Date the article was authored",
        "date_uploaded": "Date the article was put here",
        "content": "Content of the article."
    },
    {
        "title": "Title of article.",
        "description": "A short three sentence abstract to catch gthe readers attention.",
        "author": "First Last",
        "date_created": "Date the article was authored",
        "date_uploaded": "Date the article was put here",
        "content": "Content of the article."
    }
]
```

5. Once you are done editing upload the edited document back to EXACTLY where you found it on the server.
6. Done! Now if you visit the news page there should be a new article with the information included.

#### Edit:

1. Gain permissions to access the location of the website and establish a secure connection using either FTP or SFTP.
2. Locate the news.json file, this file is a master copy so if you delete it all data from articles will be lost.  *WARNING: when using FTP and SFTP the is NO UNDO BUTTON once a file is deleted.*
3. Either download the file for editing or use a built-in remote file editor if availible.  Open the file ready for editing.
4. Edit any article without deleting any full lines of text (ie. `"author": ""` needs to stay a line so the website can see that there is no data.
5. Once you are done editing upload the edited document back to EXACTLY where you found it on the server.
6. Done! Now if you visit the news page there should be a new article with the information included.

#### Delete:

1. Gain permissions to access the location of the website and establish a secure connection using either FTP or SFTP.
2. Locate the news.json file, this file is a master copy so if you delete it all data from articles will be lost.  *WARNING: when using FTP and SFTP the is NO UNDO BUTTON once a file is deleted.*
3. Either download the file for editing or use a built-in remote file editor if availible.  Open the file ready for editing.
4. To delete a whole article, first, locate it using the "title" tag and delete everything between and including the `{` above the title and the `},` below the content.
5. Once you are done editing upload the edited document back to EXACTLY where you found it on the server.
6. Done! Now if you visit the news page there should be a new article with the information included.
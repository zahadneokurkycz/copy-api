<!DOCTYPE html>
<html lang="CS">
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <script src="script.js"></script>
        <meta charset="utf-8">
        <title>Copy system</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
        <textarea id="copyarea" title="Text to copy"><?php
            echo $_GET['text']; 
         ?></textarea>
        <span id="copyspan" style="display: none;"></span>
        <button class="btn btn-outline-success" id="copybtn" title="Copy"><i class="bi bi-clipboard"></i></button>
    </body>
</html>
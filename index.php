<!DOCTYPE html>
<html lang="CS">
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <!--<script src="script.js"></script>-->
        <meta charset="utf-8">
        <title>Copy system</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
        <script>
            navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
                if (result.state == "granted" || result.state == "prompt") {
                    alert("Write access granted!");
                }
            });
        </script>
    </body>
</html>

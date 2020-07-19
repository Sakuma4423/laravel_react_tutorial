<!DOCTYPE html>
<html lang="ja" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href={{asset("css/app.css")}}>
        <script src="{{mix('js/bootstrap.js')}}" defer></script>
        <title>react app</title>
    </head>
    <body>
        <div id="file_upload"></div>
    </body>
</html>

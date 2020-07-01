<!DOCTYPE html>
<html lang="ja" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>react app</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{mix('js/index.js')}}"></script>
    </body>
</html>

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Broast</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display" rel="stylesheet">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script src="{{ mix('/js/page-style-guide.js') }}"></script>
</body>
</html>

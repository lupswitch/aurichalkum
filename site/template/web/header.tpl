<html>
<head>
    <title>Aurichalkum{if $title} - {$title}{/if}</title>
    <meta charset="utf-8" />

    <link rel="icon" type="image/x-icon" href="static/images/favicon.ico"/>
    <link rel="stylesheet" href="static/css/bootstrap.css">
    <link rel="stylesheet" href="static/css/bootstrap-theme.css">

    <script src="static/scripts/util/require.js" data-main="aurichalkum"></script>
    <script>
        require.config({
            baseUrl: '/static/scripts',
            paths: {
                jquery: 'util/jquery',
                bootstrap: 'util/bootstrap',
            },
            shim: {
                bootstrap: {
                    deps: ['jquery']
                },
            },
        });
    </script>
</head>
<body>

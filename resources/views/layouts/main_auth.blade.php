<!DOCTYPE html>
<html lang="en">

<head>

    <title>Cooperative - @yield('subtitle')</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    @include('layouts.partials._header')

</head>

<body class="bg-gradient-primary">

<div class="container">
    @yield('content')
</div>

@include('layouts.partials._footer')

</body>

</html>

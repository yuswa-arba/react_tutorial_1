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

<body id="page-top">

<div id="wrapper">

    @include('layouts.partials._sidebar')

    <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">

            @include('layouts.partials._topbar')

            <div class="container-fluid">
                @yield('content')
            </div>

        </div>

    </div>

</div>

<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

@include('layouts.snippets._logout_modal')
@include('layouts.partials._footer')

</body>

</html>

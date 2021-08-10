@extends('layouts.main_auth')

@section('subtitle')
    Login
@endsection

@push('child-page-controller')
    <script src="{{asset(mix('js/frontend/auth/Auth.js'))}}"></script>
@endpush

@section('content')

    <!-- Outer Row -->
    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div id="app"></div>
                </div>
            </div>

        </div>

    </div>

@endsection

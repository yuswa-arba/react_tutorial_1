@extends('layouts.main')

@section('subtitle')
    Dashboard
@endsection

@push('child-page-controller')
    <script src="{{asset(mix('js/frontend/dashboard/Dashboard.js'))}}"></script>
@endpush

@section('content')
    <div id="app"></div>
@endsection

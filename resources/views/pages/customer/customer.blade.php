@extends('layouts.main')

@section('subtitle')
    Customer
@endsection

@push('child-page-controller')
    <script src="{{asset(mix('js/frontend/customer/Customer.js'))}}"></script>
@endpush

@section('content')
    <div id="app"></div>
@endsection

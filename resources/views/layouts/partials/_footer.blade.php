<!-- Bootstrap core JavaScript-->
<script src="{{ asset(mix('plugins/js/jquery.min.js')) }}"></script>
<script src="{{ asset(mix('plugins/js/bootstrap.bundle.min.js')) }}"></script>

<!-- Core plugin JavaScript-->
<script src="{{ asset('plugins/jquery-easing/jquery.easing.min.js') }}"></script>

<!-- Custom scripts for all pages-->
<script src="{{ asset('js/app.js') }}"></script>

@stack('child-page-controller')

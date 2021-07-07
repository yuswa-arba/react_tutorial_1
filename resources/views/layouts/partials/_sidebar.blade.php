<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{ '' }}">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Cooperative</div>
    </a>

    <hr class="sidebar-divider my-0">

    @include('layouts.partials.sidebars._dashboard')

    <hr class="sidebar-divider">
    <div class="sidebar-heading">
        Testing
    </div>

    @include('layouts.partials.sidebars._testing')
    @include('layouts.partials.sidebars._testing_2')

    <hr class="sidebar-divider d-none d-md-block">

    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>

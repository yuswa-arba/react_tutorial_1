<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboards')
    ->namespace('Dashboard')
    ->group(function () {

        Route::get('customerActive', 'DashboardController@getCustomerActiveMonthly')->name('dashboard.customer.active');
        Route::get('customerGender', 'DashboardController@getCustomerGender')->name('dashboard.customer.gender');
        Route::get('headerAll', 'DashboardController@getDashboardHeader')->name('dashboard.header.all');
        Route::get('customerReligion', 'DashboardController@getCustomerReligion')->name('dashboard.customer.religion');
        Route::get('customerActivity', 'DashboardController@getCustomerActivity')->name('dashboard.customer.activity');

    });

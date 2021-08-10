<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')
    ->namespace('Dashboard')
    ->group(function () {

        Route::get('', 'DashboardController@index')->name('dashboard');

    });

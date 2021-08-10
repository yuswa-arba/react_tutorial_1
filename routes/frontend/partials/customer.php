<?php

use Illuminate\Support\Facades\Route;

Route::prefix('customers')
    ->namespace('Customer')
    ->group(function () {

        Route::get('', 'CustomerController@index')->name('customer.index');
        Route::get('{any}', 'CustomerController@index')->where('any', '.*');

    });

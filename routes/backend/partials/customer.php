<?php

use Illuminate\Support\Facades\Route;

Route::prefix('customers')
    ->namespace('Customer')
    ->group(function () {

        Route::get('', 'CustomerController@get')->name('customers.get');
        Route::post('', 'CustomerController@create')->name('customers.create');
        Route::post('{customer}/update', 'CustomerController@update')->name('customers.update');

    });

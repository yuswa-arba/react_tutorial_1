<?php

use Illuminate\Support\Facades\Route;

Route::prefix('')
    ->namespace('Auth')
    ->group(function () {

        Route::get('login', 'LoginController@showLoginForm')->name('login');
        Route::get('register', 'RegisterController@showRegistrationForm')->name('register');

    });

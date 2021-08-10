<?php

use Illuminate\Support\Facades\Route;

Route::prefix('components')
    ->namespace('Component')
    ->group(function () {

        Route::prefix('religions')
            ->group(function () {

                Route::get('', 'ReligionController@get')->name('component.religion.get');

            });

    });

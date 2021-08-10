<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', 'Controller@blank');
Route::get('testing', 'Controller@testing');

//Auth::routes();


<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Frontend\Dashboard\DashboardController;
use Faker\Factory;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function testing(Request $request)
    {
        $faker = Factory::create();
        $genders = ['male', 'female'];
        $key = array_rand($genders);
        return ;
    }

    public function blank()
    {
        return (new DashboardController)->index();
//        return view('pages.blank');
    }

}

<?php

namespace App\Http\Controllers\Backend\Component;

use App\Http\Controllers\Controller;
use App\Models\Religion;
use Illuminate\Http\Request;

class ReligionController extends Controller
{
    public function get(Request $request)
    {
        $religions = Religion::where(function ($query) use ($request) {

            if ($request->has('v') && strlen($request->v) >= 3) {
                $query->where('name', 'LIKE', "%$request->v%");
            }

        })->get();

        $data = ['religions' => $religions];
        return response_json(true, $data);
    }
}

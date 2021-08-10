<?php

namespace App\Http\Controllers\Backend\Customer;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    public function get(Request $request)
    {
        $customers = Customer::search($request)
            ->ofActive()
            ->orderBy('name', 'ASC')
            ->paginate(50);
        if (!$customers || count($customers) == 0) {
            return response_error('Customer not found');
        }

        $results = ['customers' => $customers->map(function ($customer) {
            return $customer->toArray();
        })->toArray()];
        $results += parse_pagination($customers);

        return response_json(true, $results);
    }

    public function detail(Customer $customer)
    {
        $result = ['customer' => $customer->toArray()];
        return response_json(true, $result);
    }

    public function create(Request $request)
    {
        $customer = Customer::create($request->except(['email', 'password']));

        $customer->user()->save(new User([
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]));

        $result = ['customer' => $customer->toArray()];
        return response_json(true, $result);
    }

    public function update(Request $request, Customer $customer)
    {
        $customer->update($request->except(['email', 'password']));

        $updatePassword = [];
        if ($request->password) {
            $updatePassword = ['password' => Hash::make($request->password)];
        }
        $customer->user()->update([
                'email' => $request->email,
            ] + $updatePassword);

        $result = ['customer' => $customer->fresh()->toArray()];
        return response_json(true, $result);
    }

}

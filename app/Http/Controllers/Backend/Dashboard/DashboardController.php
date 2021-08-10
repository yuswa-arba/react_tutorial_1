<?php

namespace App\Http\Controllers\Backend\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\CustomerActivity;
use App\Models\Loan;
use App\Models\Saving;
use Carbon\Carbon;
use Cassandra\Custom;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DashboardController extends Controller
{
    public function getCustomerActiveMonthly(Request $request)
    {
        $fromDate = Carbon::now()->subYear()->startOfMonth()->startOfDay();
        $toDate = Carbon::now()->startOfDay();

        $customers = Customer::ofActive()->whereBetween('created_at', [$fromDate, $toDate])->get();

        $customersInMonth = $customers->groupBy(function ($customer) {
            return $customer->created_at->format('M Y');
        });

        $customerDashboardData = collect($customersInMonth)->map(function ($customers, $index) {
            return [
                'month' => $index,
                'total' => count($customers)
            ];
        })->values()->toArray();

        $results = ['dashboards' => $customerDashboardData];
        return response_json(true, $results);
    }

    public function getCustomerGender(Request $request)
    {
        $fromDate = Carbon::now()->subYear()->startOfMonth()->startOfDay();
        $toDate = Carbon::now()->startOfDay();

        $customers = Customer::ofActive()->whereBetween('created_at', [$fromDate, $toDate])->get();

        $customersGender = $customers->groupBy(function ($customer) {
            return $customer->gender;
        });

        $customerDashboardData = collect($customersGender)->map(function ($customers, $index) {
            return [
                'gender' => Str::title($index),
                'total' => count($customers)
            ];
        })->values()->toArray();

        $results = ['dashboards' => $customerDashboardData];
        return response_json(true, $results);
    }

    public function getDashboardHeader()
    {
        return response_json(true, [
            'dashboards' => [
                [
                    'title' => 'Customer Active',
                    'total' => Customer::ofActive()->count(),
                    'icon' => 'fa-user',
                    'color' => 'border-left-primary'
                ],
                [
                    'title' => 'Customer Not Active',
                    'total' => Customer::ofNotActive()->count(),
                    'icon' => 'fa-user',
                    'color' => 'border-left-warning'
                ],
                [
                    'title' => 'Total Loan',
                    'total' => 'Rp ' . number_format(Loan::sum('amount'), 2, '.', ','),
                    'icon' => 'fa-dollar-sign',
                    'color' => 'border-left-success'
                ],
                [
                    'title' => 'Total Saving',
                    'total' => 'Rp ' . number_format(Saving::sum('amount'), 2, '.', ','),
                    'icon' => 'fa-dollar-sign',
                    'color' => 'border-left-info'
                ],
            ]
        ]);
    }

    public function getCustomerReligion(Request $request)
    {
        $customers = Customer::ofActive()->get();
        $totalAllCustomer = count($customers);

        $customersInReligion = $customers->groupBy(function ($customer) {
            return optional($customer->religion)->name;
        });

        $customerDashboardData = collect($customersInReligion)->map(function ($customers, $index) use ($totalAllCustomer) {

            $total = count($customers);

            return [
                'isAll' => false,
                'percent' => round(($total * 100 / $totalAllCustomer)) . '%',
                'religion' => Str::title($index),
                'total' => $total
            ];

        })->values()->toArray();

        $customerDashboardData[] = [
            'isAll' => true,
            'percent' => '100%',
            'religion' => 'Total All',
            'total' => count($customers)
        ];

        $results = ['dashboards' => $customerDashboardData];
        return response_json(true, $results);
    }

    public function getCustomerActivity(Request $request)
    {
        $activities = CustomerActivity::orderBy('id', 'DESC')
            ->take(20)
            ->get();

        $results = ['dashboards' => $activities->map(function ($customer) {
            return $customer->toDashboardArray();
        })->toArray()];

        return response_json(true, $results);
    }

}

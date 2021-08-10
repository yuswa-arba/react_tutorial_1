<?php

namespace App\Console;

use App\Models\Customer;
use App\Models\CustomerAction;
use App\Models\CustomerActivity;
use App\Models\CustomerBalance;
use App\Models\Loan;
use App\Models\Religion;
use App\Models\Saving;
use App\Models\User;
use Faker\Factory;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class TestCommand extends Command
{
    protected $signature = 'dev-test';
    protected $description = '';

    public function handle()
    {
        shell_exec('php artisan migrate:fresh');

        $this->createCustomers();
        $this->createSavings();
        $this->createLoans();
    }

    private function createCustomers()
    {
        Customer::truncate();
        User::truncate();

        $faker = Factory::create();

        $genders = ['male', 'female'];

        $parseDate = now()->subYear();

        $religions = Religion::all();
        foreach ($religions as $religion) {

            for ($a = 0; $a < 100; $a++) {

                $isAdmin = false;
                if ($a == 0) {
                    $isAdmin = true;
                }

                $genderKey = array_rand($genders);

                $parseDate->addDay();

                $customer = Customer::create([
                    'name' => $faker->name,
                    'religionId' => $religion->id,
                    'address' => $faker->address,
                    'gender' => $genders[$genderKey],
                    'active' => rand(0, 1),
                    'isAdmin' => $isAdmin,
                    'created_at' => $parseDate,
                    'updated_at' => $parseDate
                ]);

                User::create([
                    'customerId' => $customer->id,
                    'email' => $faker->email,
                    'password' => Hash::make('global101')
                ]);

                $customer->balance()->save(new CustomerBalance([
                    'loan' => 0,
                    'saving' => 0,
                ]));

            }

        }
    }

    private function createSavings()
    {
        $customers = Customer::inRandomOrder()->take(100)->get();
        foreach ($customers as $customer) {

            for ($a = 0; $a < rand(5, 20); $a++) {

                $amount = rand(10000, 1000000);

                $saving = $customer->savings()->save(new Saving([
                    'dateTime' => now(),
                    'amount' => $amount
                ]));

                $prevBalance = $customer->loanBalance;
                $balance = $customer->savingBalance + $amount;

                $customer->updateSavingBalance($balance);

                $customer->activities()->save(new CustomerActivity([
                    'dateTime' => now(),
                    'action' => CustomerAction::SAVING,
                    'description' => 'Create Saving',
                    'reference' => $saving->id,
                    'referenceType' => get_class($saving),
                    'activityAttributes' => [
                        'prevBalance' => currency_rupiah($prevBalance),
                        'amount' => currency_rupiah($amount),
                        'balance' => currency_rupiah($balance)
                    ],
                ]));

            }

        }
    }

    private function createLoans()
    {
        $customers = Customer::inRandomOrder()->take(100)->get();
        foreach ($customers as $customer) {

            for ($a = 0; $a < rand(5, 20); $a++) {

                $amount = rand(10000, 1000000);

                $loan = $customer->loans()->save(new Loan([
                    'dateTime' => now(),
                    'amount' => $amount
                ]));

                $prevBalance = $customer->loanBalance;
                $balance = $customer->loanBalance + $amount;

                $customer->updateLoanBalance($balance);

                $customer->activities()->save(new CustomerActivity([
                    'dateTime' => now(),
                    'action' => CustomerAction::LOAN,
                    'description' => 'Create Loan',
                    'reference' => $loan->id,
                    'referenceType' => get_class($loan),
                    'activityAttributes' => [
                        'prevBalance' => currency_rupiah($prevBalance),
                        'amount' => currency_rupiah($amount),
                        'balance' => currency_rupiah($balance)
                    ],
                ]));

            }

        }
    }
}

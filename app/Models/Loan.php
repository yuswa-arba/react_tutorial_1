<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $table = 'loans';
    protected $guarded = [''];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }

}

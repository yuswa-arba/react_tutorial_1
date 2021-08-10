<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Saving extends Model
{
    protected $table = 'savings';
    protected $guarded = [''];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }

}

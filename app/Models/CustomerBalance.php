<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerBalance extends Model
{
    protected $table = 'customerBalances';
    protected $guarded = [''];
    protected $casts = [
        'loan' => 'float',
        'saving' => 'float'
    ];
}

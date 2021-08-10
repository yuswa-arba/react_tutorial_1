<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Religion extends Model
{
    protected $connection = 'employee';
    protected $table = 'religions';
    protected $guarded = [''];

    public function toArray()
    {
        return $this->only('id', 'name');
    }

}

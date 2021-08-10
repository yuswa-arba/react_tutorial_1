<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class Customer extends Model
{
    protected $table = 'customers';
    protected $guarded = [''];
    protected $dates = [
        'created_at'
    ];


    /*
     |--------------------------------------------------------------------------
     |  Relationships
     |--------------------------------------------------------------------------
     */

    public function user()
    {
        return $this->hasOne(User::class, 'customerId');
    }

    public function religion()
    {
        return $this->belongsTo(Religion::class, 'religionId');
    }

    public function loans()
    {
        return $this->hasMany(Loan::class, 'customerId');
    }

    public function savings()
    {
        return $this->hasMany(Saving::class, 'customerId');
    }

    public function balance()
    {
        return $this->hasOne(CustomerBalance::class, 'customerId');
    }

    public function activities()
    {
        return $this->hasMany(CustomerActivity::class, 'customerId');
    }


    /*
     |--------------------------------------------------------------------------
     |  Scopes
     |--------------------------------------------------------------------------
     */

    public function scopeOfActive($query)
    {
        return $query->where('active', true);
    }

    public function scopeOfNotActive($query)
    {
        return $query->where('active', false);
    }

    public function scopeSearch($query, Request $request)
    {
        return $query->where(function ($search) use ($request) {

            if ($request->has('religionId') && $request->religionId) {
                $search->where('religionId', $request->religionId);
            }

            if ($request->has('v') && strlen($request->v) >= 3) {
                $search->where('name', 'LIKE', "%$request->v%");
            }

        });
    }


    /*
     |--------------------------------------------------------------------------
     |  Accessor
     |--------------------------------------------------------------------------
     */

    public function getLoanBalanceAttribute()
    {
        return optional($this->balance)->loan;
    }

    public function getSavingBalanceAttribute()
    {
        return optional($this->balance)->saving;
    }


    /*
     |--------------------------------------------------------------------------
     |  Functions
     |--------------------------------------------------------------------------
     */

    public function updateLoanBalance($balance)
    {
        $this->balance->update(['loan' => $balance]);
    }

    public function updateSavingBalance($balance)
    {
        $this->balance->update(['saving' => $balance]);
    }

    public function toArray()
    {
        Log::info($this->id);
        Log::info($this->user);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->user->email,
            'religion' => $this->religion->only('id', 'name'),
            'gender' => Str::title($this->gender),
            'address' => $this->address,
            'admin' => $this->admin,
        ];
    }

}

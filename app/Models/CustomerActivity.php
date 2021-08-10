<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class CustomerActivity extends Model
{
    protected $table = 'customerActivities';
    protected $guarded = [''];

    protected $dates = [
        'dateTime'
    ];
    protected $casts = [
        'activityAttributes' => 'array'
    ];


    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }

    public function referable()
    {
        return $this->morphTo('referable', 'referenceType', 'reference');
    }


    public function toDashboardArray()
    {
        return [
            'id' => $this->id,
            'dateTime' => $this->dateTime->format('d M Y H:i'),
            'customer' => $this->customer->only('id', 'name'),
            'action' => $this->actionName(),
            'description' => $this->description,
            'activityAttributes' => $this->activityAttributes
        ];
    }

    public function actionName()
    {
        return Str::title(str_replace('_', ' ', $this->action));
    }

}

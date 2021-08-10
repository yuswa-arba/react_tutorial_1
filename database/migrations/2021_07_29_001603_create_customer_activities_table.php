<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customerActivities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customerId');
            $table->dateTime('dateTime');
            $table->char('action', 30);
            $table->text('description')->nullable();
            $table->foreignId('reference')->nullable();
            $table->string('referenceType')->nullable();
            $table->json('activityAttributes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customerActivities');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoffeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coffees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->boolean('is_sold_out')->default(false);
            $table->boolean('is_single_origin')->default(false);
            $table->boolean('is_available_ground')->default(false);
            $table->boolean('is_available_whole')->default(true);
            $table->boolean('is_retired')->default(false);
            $table->decimal('bag_in_ounces', 3, 2);
            $table->decimal('price_per_bag', 4, 2);
            $table->integer('max_quantity')->default(1);
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
        Schema::dropIfExists('coffees');
    }
}

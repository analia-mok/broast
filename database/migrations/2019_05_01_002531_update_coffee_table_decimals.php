<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateCoffeeTableDecimals extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('coffees', function (Blueprint $table) {
            $table->decimal('bag_in_ounces', 8, 2)->change();
            $table->decimal('price_per_bag', 8, 2)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('coffees', function (Blueprint $table) {
            // Reverse to original settings.
            $table->decimal('bag_in_ounces', 3, 2)->change();
            $table->decimal('price_per_bag', 4, 2)->change();
        });
    }
}

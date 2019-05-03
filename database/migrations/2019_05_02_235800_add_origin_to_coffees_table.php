<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOriginToCoffeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('coffees', function (Blueprint $table) {
            $table->string('origin_country', 255)->nullable();
            $table->text('coffee_image')->nullable();
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
            if (Schema::hasColumn('coffees', 'origin_country')) {
                $table->dropColumn('origin_country');
            }

            if (Schema::hasColumn('coffees', 'coffee_image')) {
                $table->dropColumn('coffee_image');
            }
        });
    }
}

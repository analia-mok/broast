<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateRoastersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('roasters', function (Blueprint $table) {
            $table->dropColumn('location');

            $table->string('city', 255);
            $table->string('state', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('roasters', function (Blueprint $table) {
            // Re-add location column
            $table->string('location', 255);

            $table->dropColumn('city');
            $table->dropColumn('state');
        });
    }
}

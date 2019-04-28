<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCoffeesConstraints extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add relationships.
        Schema::table('coffees', function (Blueprint $table) {
            $table->bigInteger('roaster_id')->unsigned()->nullable();
            $table->foreign('roaster_id')
                ->references('id')
                ->on('roasters')
                ->onDelete('set null');

            $table->bigInteger('flavor_profile_id')->unsigned()->nullable();
            $table->foreign('flavor_profile_id')
                ->references('id')
                ->on('flavor_profiles')
                ->onDelete('set null');

            $table->bigInteger('roast_level_id')->unsigned()->nullable();
            $table->foreign('roast_level_id')
                ->references('id')
                ->on('roast_levels')
                ->onDelete('set null');

            $table->bigInteger('best_brew_method_id')->unsigned()->nullable();
            $table->foreign('best_brew_method_id')
                ->references('id')
                ->on('brewmethod')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop constraints.
        Schema::table('coffees', function (Blueprint $table) {
            $table->dropForeign('coffees_roaster_id_foreign');
            $table->dropForeign('coffees_flavor_profile_id_foreign');
            $table->dropForeign('coffees_roast_level_id_foreign');
            $table->dropForeign('coffees_best_brew_method_id_foreign');
        });
    }
}

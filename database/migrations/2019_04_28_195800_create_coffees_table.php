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

            // TODO: Add relationships.
            $table->unsignedBigInteger('roaster_id')->nullable();
            $table->foreign('roaster_id')
                ->reference('id')
                ->on('roasters')
                ->onDelete('null');

            $table->unsignedBigInteger('flavor_profile_id')->nullable();
            $table->foreign('flavor_profile_id')
                ->reference('id')
                ->on('flavor_profiles')
                ->onDelete('null');

            $table->unsignedBigInteger('roast_level_id')->nullable();
            $table->foreign('roast_level_id')
                ->reference('id')
                ->on('roast_levels')
                ->onDelete('null');

            $table->unsignedBigInteger('best_brew_method_id')->nullable();
            $table->foreign('best_brew_method_id')
                ->reference('id')
                ->on('brewmethod')
                ->onDelete('null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop constraints first.
        Schema::table('coffees', function (Blueprint $table) {
            $table->dropForeign('coffees_roaster_id_foreign');
            $table->dropForeign('coffees_flavor_profile_id_foreign');
            $table->dropForeign('coffees_roast_level_id_foreign');
            $table->dropForeign('coffees_best_brew_method_id_foreign');
        });

        // Then delete table.
        Schema::dropIfExists('coffees');
    }
}

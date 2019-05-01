<?php

use BrewMethodSeeder;
use FlavorProfileSeeder;
use Illuminate\Database\Seeder;
use RoastLevelSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BrewMethodSeeder::class);
        $this->call(FlavorProfileSeeder::class);
        $this->call(RoastLevelSeeder::class);
    }
}

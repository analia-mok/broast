<?php

use Illuminate\Database\Seeder;

class BrewMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brew_methods')->insert(['title' => 'AeroPress']);
        DB::table('brew_methods')->insert(['title' => 'Auto Drip']);
        DB::table('brew_methods')->insert(['title' => 'Chemex']);
        DB::table('brew_methods')->insert(['title' => 'Cold Brew']);
        DB::table('brew_methods')->insert(['title' => 'French Press']);
        DB::table('brew_methods')->insert(['title' => 'Moka Pot']);
        DB::table('brew_methods')->insert(['title' => 'Pour Over']);
    }
}

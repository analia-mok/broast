<?php

use Illuminate\Database\Seeder;

class RoastLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Fill with base roast levels.
        DB::table('roast_levels')->insert(['name' => 'Light']);
        DB::table('roast_levels')->insert(['name' => 'Light-Medium']);
        DB::table('roast_levels')->insert(['name' => 'Medium']);
        DB::table('roast_levels')->insert(['name' => 'Medium-Dark']);
        DB::table('roast_levels')->insert(['name' => 'Dark']);
    }
}

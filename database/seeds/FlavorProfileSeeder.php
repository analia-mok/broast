<?php

use Faker\Factory as FakerFactory;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class FlavorProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('flavor_profiles')->insert([
            'profile_name' => 'Comforting & Rich',
        ]);

        DB::table('flavor_profiles')->insert([
            'profile_name' => 'Balanced & Fruity',
        ]);

        DB::table('flavor_profiles')->insert([
            'profile_name' => 'Roasty & Smoky',
        ]);

        DB::table('flavor_profiles')->insert([
            'profile_name' => 'Sweet & Smooth',
        ]);
    }
}

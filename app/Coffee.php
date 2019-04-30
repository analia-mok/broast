<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coffee extends Model
{
    /**
     * Get roaster.
     *
     * @return \App\Roaster roaster
     */
    public function roaster()
    {
        return $this->belongsTo('App\Roaster');
    }

    /**
     * Get flavor profile.
     *
     * @return \App\FlavorProfile flavorProfile
     */
    public function flavorProfile()
    {
        return $this->belongsTo('App\FlavorProfile');
    }

    /**
     * Get roast level.
     *
     * @return \App\RoastLevel roastLevel
     */
    public function roastLevel()
    {
        return $this->belongsTo('App\RoastLevel');
    }

    /**
     * Get recommended brew method.
     *
     * @return \App\BrewMethod brewMethod
     */
    public function bestBrewMethod()
    {
        return $this->belongsTo('\App\BrewMethod');
    }
}

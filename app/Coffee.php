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
        return $this->belongsTo(Roaster::class);
    }

    /**
     * Get flavor profile.
     *
     * @return \App\FlavorProfile flavorProfile
     */
    public function flavorProfile()
    {
        return $this->belongsTo(FlavorProfile::class);
    }

    /**
     * Get roast level.
     *
     * @return \App\RoastLevel roastLevel
     */
    public function roastLevel()
    {
        return $this->belongsTo(RoastLevel::class);
    }

    /**
     * Get recommended brew method.
     *
     * @return \App\BrewMethod brewMethod
     */
    public function brewMethod()
    {
        return $this->belongsTo(BrewMethod::class);
    }
}

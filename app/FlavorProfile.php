<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlavorProfile extends Model
{
    /**
     * Get coffees with the current flavor profile.
     *
     * @return Collection coffees
     */
    public function coffees()
    {
        return $this->hasMany('\App\Coffee');
    }
}

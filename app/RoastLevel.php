<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoastLevel extends Model
{
    /**
     * Get coffees with this roast level.
     *
     * @return Collection coffees
     */
    public function coffees()
    {
        return $this->hasMany('\App\Coffee');
    }
}

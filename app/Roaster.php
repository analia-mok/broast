<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roaster extends Model
{
    /**
     * Get this roasters coffees.
     *
     * @return Collection coffees
     */
    public function coffees()
    {
        return $this->hasMany('\App\Coffee');
    }
}

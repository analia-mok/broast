<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BrewMethod extends Model
{
    /**
     * Get coffees best brewed with this method.
     *
     * @return Collection coffees
     */
    public function coffees()
    {
        return $this->hasMany('App\Coffee');
    }
}

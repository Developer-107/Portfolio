<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stack extends Model
{
    
    public function projects()
        {
            return $this->belongsToMany(Project::class);
        }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contemporary extends Model
{
    use HasFactory;
    protected $table = 'contemporaries';
    protected $fillable = [
        'title',
        'file',
        'category',
        'description',
        'author',
        'country'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tresuares extends Model
{
    use HasFactory;
    protected $table = 'tresuares';
    protected $fillable = [
        'title',
        'file',
        'category',
        'description',
        'author',
        'country'
    ];
}

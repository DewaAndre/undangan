<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Greeting extends Model
{
    protected $fillable = [
        'nama',
        'ucapan_doa',
        'konfirmasi_kehadiran'
    ];
}

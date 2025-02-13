<?php

use App\Http\Controllers\Api\GreetingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::post('/greetings', [GreetingController::class, 'store']);
    Route::get('/greetings', [GreetingController::class, 'index']);
});

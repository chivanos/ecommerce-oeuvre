<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContemporaryController;
use App\Http\Controllers\TresuaresController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/asuser', [UserController::class, 'userCreate']);
Route::post('/contact/oeuvra/send', [ContactController::class, 'contactOeuvra']);
Route::post('/login/admin/oeuvra', [UserController::class, 'loginOeuvra']);
Route::get('/contact/receive', [ContactController::class, 'getContact']);
Route::get('/details/contact/{id}', [ContactController::class, 'getContactOne']);
Route::post('/add/cont/admin/oeuvra',[ContemporaryController::class, 'contemporary']);
Route::post('/add/roy/admin/oeuvra',[TresuaresController::class, 'royal']);
Route::delete('/delete/cont/{id}',[ContemporaryController::class, 'deleteCont']);
Route::delete('/delete/contact/{id}',[ContactController::class, 'deleteContact']);
Route::delete('/delete/roy/{id}',[TresuaresController::class, 'deleteRoy']);
Route::get('/list/cont/oeuvra',[ContemporaryController::class, 'index']);
Route::get('/details/cont/{id}',[ContemporaryController::class, 'artOne']);
Route::get('/list/roy/oeuvra',[TresuaresController::class, 'index']);
Route::get('/details/roy/{id}',[TresuaresController::class, 'royOne']);
Route::put('/putupdate/cont/{id}',[ContemporaryController::class, 'putCont']);
Route::put('/putupdate/roy/{id}',[TresuaresController::class, 'putRoy']);


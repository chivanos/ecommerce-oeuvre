<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected function userCreate(Request $request)
    {
        $user = new User;

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return $user;

    }

    protected function loginOeuvra(Request $request)
    {
        $verify = User::where('email',$request->email)->first();

        if(!$verify || !Hash::check($request->password,$verify->password))
        {
            return ['message' => 'Not found user'];
        }
        return $verify;
    }
    
    
}

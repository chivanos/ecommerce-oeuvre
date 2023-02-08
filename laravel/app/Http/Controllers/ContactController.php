<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    protected function contactOeuvra(Request $request)
    {
        $info = $this->validate($request,[
            'email' => 'required',
            'mail' => 'required'
        ]);

        if(!$info)
        { 
            return $response()->json([
                "status" => 200
            ]);
        }
        else
        {          
            $contact = new Contact;
            $contact->email = $request->input('email');
            $contact->mail = $request->input('mail');
            $contact->save();
        }
        
        return $contact;
    }

    public function getContact()
    {
        return Contact::all();
    }

    public function getContactOne($id)
    {
        $contact = Contact::where('id',$id);
        
        if(!$contact->count()>0)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        return $contact->get();
    }

    protected function deleteContact($id)
    {
        $delete = Contact::where('id',$id)->delete();

        if(!$delete)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        else
        {
            return response()->json([
                'success' => 'Mail supprimé avec succèss!'
            ]);
        }
    }
}

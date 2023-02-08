<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contemporary;

class ContemporaryController extends Controller
{
    protected function contemporary(Request $request)
    {
        $this->validate($request,[
            'title' => 'required',
            'file' => 'required|image',
            'category' => 'required',
            'description' => 'required',
            'author' => 'required',
            'country' => 'required'
        ]);

        $cont = new Contemporary;
        $cont->title = $request->input('title');
        $cont->category = $request->input('category');
        $cont->description = $request->input('description');
        $cont->author = $request->input('author');
        $cont->country = $request->input('country');

        if($request->hasFile('file'))
        {
            $file = $request->file('file');
            $extension = $file->getClientOriginalExtension();
            $filename = time(). '.' . $extension;
            $file->move('uploads/contemporary/',$filename);
            $cont->file = 'uploads/contemporary/'.$filename;
        }
        $cont->save();

        return response()->json([$cont,
            'message' => 'Add successfull !'
        ]);


    }

    protected function index()
    {
        return Contemporary::all();
    }

    protected function artOne($id)
    {
        $cont = Contemporary::where('id',$id);

        if(!$cont->count()>0)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        return $cont->get();
    }

    protected function deleteCont($id)
    {
        $delete = Contemporary::where('id',$id)->delete();

        if(!$delete)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        else
        {
            return response()->json([
                'success' => 'Oeuvre supprimé avec succèss!'
            ]);
        }
    }

    protected function putCont(Request $request,$id)
    {
        $update = Contemporary::where('id',$id)->update();

        if(!$update)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        // else
        // {
        //     return response()->json([
        //         'success' => 'Art mis a jour avec succèss!'
        //     ]);
        // }
            return $update;
    }
}

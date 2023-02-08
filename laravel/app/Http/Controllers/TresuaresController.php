<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tresuares;
class TresuaresController extends Controller
{
    protected function royal(Request $request)
    {
        $verify = $this->validate($request,[
            'title' => 'required',
            'file' => 'required|image',
            'category' => 'required',
            'description' => 'required',
            'author' => 'required',
            'country' => 'required'
        ]);

        if(!$verify)
        {
            return response()->json([
                'message' => 'Add do not'
            ]);
        }
        else
        {
            $roy = new Tresuares;
            $roy->title = $request->input('title');
            $roy->category = $request->input('category');
            $roy->description = $request->input('description');
            $roy->author = $request->input('author');
            $roy->country = $request->input('country');

            if($request->hasFile('file'))
            {
                $file = $request->file('file');
                $extension = $file->getClientOriginalExtension();
                $filename = time(). '.' . $extension;
                $file->move('uploads/roy/',$filename);
                $roy->file = 'uploads/roy/'.$filename;
            }
            $roy->save();

            return response()->json([$roy,
                'message' => 'Add successfull !'
            ]);

            
        }
    }

    protected function index()
    {
        return Tresuares::all();
    }

    protected function royOne($id)
    {
        $roy = Tresuares::where('id',$id);

        if(!$roy->count()>0)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        return $roy->get();
    }

    protected function putRoy(Request $request,$id)
    {
        $update = Tresuares::where('id',$id)->update();

        if(!$update)
        {
            return response()->json([
                'error' => 'Operation Failled'
            ]);
        }
        else
        {
            return response()->json([
                'success' => 'Art mis a jour avec succèss!'
            ]);
        }
    }

    protected function deleteRoy($id)
    {
        $delete = Tresuares::where('id',$id)->delete();

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
}

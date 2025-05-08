<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //List all products /api/products
    public function getAll(){
        $products = Product::all();
        return response()->json($products);

    }

    // Create new products /api/products

    public function createProducts(Request $request){
            $product = new Product;
            $product->name = $request->name;
            $product->category_id = $request->category_id;
            $product->pricing = $request->pricing;
            $product->save();
            return $product;    
        

    }
    
    

    // get product by id  /api/product/{productId}

    public function findProductByID($productId){
        $product = Product::findOrFail($productId);

        if(!$product){
            return response()->json([
                'message' => 'Product not found ',
            ]);
        }
        else {
            return response()->json($product);
        }
    }

   // --- Patch /api/products/{productId}
   public function updateProduct(Request $request, $productId) {
    $product = Product::find($productId);
    $product->name = $request->name;
    $product->category_id = $request->category_id;
    $product->pricing = $request->pricing;
    $product->save();
    return ["message" => "success"];
}

// --- Delete /api/products/{productId}
public function deleteProduct($productId) {
    $product = Product::find($productId);
    $product->delete();
    return $product;
}
}
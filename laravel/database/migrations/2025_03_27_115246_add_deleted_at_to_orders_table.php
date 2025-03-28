<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->softDeletes();
            // add deleted_at column
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->softDeletes();
            // add deleted_at column
        });

        Schema::table('customers', function (Blueprint $table) {
            $table->softDeletes();
            // add deleted_at column
        });

        Schema::table('carts', function (Blueprint $table) {
            $table->softDeletes();
            // add deleted_at column
        });

        Schema::table('wishlists', function (Blueprint $table) {
            $table->softDeletes();
            // add deleted_at column
        });

       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropSoftDeletes();
            //
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->dropSoftDeletes();
            //
        });

        Schema::table('customers', function (Blueprint $table) {
            $table->dropSoftDeletes();
            //
        });

        Schema::table('carts', function (Blueprint $table) {
            $table->dropSoftDeletes();
            //
        });

        Schema::table('wishlists', function (Blueprint $table) {
            $table->dropSoftDeletes();
            //
        });
    }
};

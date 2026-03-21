<?php

use Illuminate\Support\Facades\Route;

Route::get('/about/{name}/{age}', function (name, $age) {
    return view('welcome');
});


Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
});
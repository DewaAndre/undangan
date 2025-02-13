<?php

namespace App\Http\Controllers\Api;

use App\Models\Greeting;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\GreetingResource;
use App\Http\Requests\Api\GreetingRequest;


class GreetingController extends Controller
{
    public function store(GreetingRequest $request): JsonResponse
    {
        try {
            $greeting = Greeting::create($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Ucapan berhasil disimpan',
                'data' => new GreetingResource($greeting)
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menyimpan ucapan',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index(): JsonResponse
    {
        try {
            $greetings = Greeting::latest()->get();

            return response()->json([
                'success' => true,
                'message' => 'Data berhasil diambil',
                'data' => GreetingResource::collection($greetings)
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

<?php

namespace App\Http\Requests\Api;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class GreetingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nama' => ['required', 'string', 'max:255'],
            'ucapan_doa' => ['required', 'string', 'max:1000'],
            'konfirmasi_kehadiran' => ['required', 'string', 'in:Hadir,Tidak Hadir']
        ];
    }

    public function messages(): array
    {
        return [
            'nama.required' => 'Nama harus diisi',
            'nama.max' => 'Nama maksimal 255 karakter',
            'ucapan_doa.required' => 'Ucapan dan doa harus diisi',
            'ucapan_doa.max' => 'Ucapan dan doa maksimal 1000 karakter',
            'konfirmasi_kehadiran.required' => 'Konfirmasi kehadiran harus diisi',
            'konfirmasi_kehadiran.in' => 'Konfirmasi kehadiran harus Hadir atau Tidak Hadir'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'success' => false,
                'message' => 'Validasi gagal',
                'errors' => $validator->errors()
            ], 422)
        );
    }
}

<?php

if (!function_exists('response_json')) {

    function response_json($status = true, $data = [], $message = 'Success')
    {
        return response()->json([
            'status' => $status ? 'success' : 'error',
            'msg' => $message,
            'data' => $data
        ], 200);
    }

}

if (!function_exists('response_error')) {

    function response_error($message = 'Error')
    {
        return response_json(false, [], $message);
    }

}

if (!function_exists('parse_pagination')) {

    function parse_pagination($data)
    {
        if ($data) {
            return [
                'meta' => [
                    'pagination' => [
                        'count' => $data->count(),
                        'current_page' => $data->currentPage(),
                        'links' => [
                            'next' => $data->nextPageUrl(),
                            'previous' => $data->previousPageUrl()
                        ],
                        'per_page' => $data->perPage(),
                        'total' => $data->total(),
                        'total_pages' => $data->lastPage()
                    ]
                ]
            ];
        } else {
            return [];
        }
    }

}

if (!function_exists('currency_rupiah')) {

    function currency_rupiah($value)
    {
        if ($value > 0 && $value != null && $value != "") {
            return number_format($value, 2, ',', '.');
        } else {
            return $value;
        }
    }

}

<?php
require_once 'db_config.php';


if (!function_exists('old_field_value')) {

    function old_field_value($field_name)
    {
        return isset($_REQUEST[$field_name]) ? $_REQUEST[$field_name] : '';
    }
}

if (!function_exists('user_auth')) {

    function user_auth()
    {
        return isset($_SESSION['user_id']);
    }
}

if (!function_exists('field_error')) {

    $errors = [];

    function field_error($field_name)
    {
        global $errors;

        if (isset($errors) && !empty($errors[$field_name])) {
            return '<span class="text-danger">' . $errors[$field_name] . '</span>';
        }
    }
}

if (!function_exists('login_user')) {

    function login_user($uid, $name, $location = null)
    {

        $_SESSION['user_id'] = $uid;
        $_SESSION['user_name'] = $name;

        if (isset($location)) {
            header("location: $location");
            exit;
        }
    }
}

if (!function_exists('redirect_unauthorized')) {

    function redirect_unauthorized($redirect_if_is_logged = false, $location = './')
    {

        if (
            ($redirect_if_is_logged && user_auth()) ||
            (!$redirect_if_is_logged && !user_auth())
        ) {
            header("location: $location");
            exit;
        }
    }
}


// if (!function_exists('redirect_unauthorized')) {

//     define('REDIRECT_UNAUTHORIZED_LOGGED', 1);
//     define('REDIRECT_UNAUTHORIZED_NOT_LOGGED', 2);

//     function redirect_unauthorized($location = './', $flag = REDIRECT_UNAUTHORIZED_LOGGED)
//     {

//         if (
//             ($flag === REDIRECT_UNAUTHORIZED_LOGGED && user_auth()) ||
//             ($flag === REDIRECT_UNAUTHORIZED_NOT_LOGGED && !user_auth())
//         ) {
//             header("location: $location");
//             exit;
//         }
//     }
// }




if (!function_exists('csrf_name')) {

    function csrf_name()
    {
        return 'csrf_token';
    }
}

if (!function_exists('csrf')) {

    function csrf()
    {
        $token = sha1(rand(1, 1000000000) . '$$' . rand(1, 1000000) . 'icar');
        $_SESSION[csrf_name()] = $token;
        return $token;
    }
}


if (!function_exists('validate_csrf')) {

    function validate_csrf()
    {
        if (isset($_REQUEST[csrf_name()]) && isset($_SESSION[csrf_name()])) {
            return $_REQUEST[csrf_name()] === $_SESSION[csrf_name()];
        }

        return false;
    }
}

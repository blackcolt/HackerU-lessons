<?php
require_once 'db_config.php';


if (!function_exists('old_field_value')) {

    function old_field_value($field_name)
    {
        return isset($_REQUEST[$field_name]) ? $_REQUEST[$field_name] : '';
    }
}

<?php
session_start();

session_destroy();
setcookie(
    session_name(),
    '',
    time() - 1,
    session_get_cookie_params()['path']
);

header('location: ./');

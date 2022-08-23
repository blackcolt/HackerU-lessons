<?php
// include('./forImport/some_html.php');
include './forImport/some_html.php';

echo "<br>$some_import_variable";
echo '<br>' . SOME_CONSTANT_FROM_IMPORT;
echo '<br>' . some_fn_from_import();

// require('./forImport/some_html2.php');
require './forImport/some_html2.php';


echo "<br>$some_import_variable2";
echo '<br>' . SOME_CONSTANT_FROM_IMPORT2;
echo '<br>' . some_fn_from_import2();


// //**************** require vs include on non existence file */
// include './forImport/some_none_existence_file.php';
// echo '<h1>Include gave warning and continued</h1>';

// require './forImport/some_none_existence_file.php';
// echo '<h1>This will never show because require will send a fatal error</h1>';


//********** include/require vs include_once/require_once */
include_once './forImport/some_html.php'; // will not return the file if already included
// include './forImport/some_html.php'; // will try and run the file again which may cause errors due to re-declarations

require_once './forImport/some_html.php'; // will not run the file if already required
// require './forImport/some_html.php'; // will try and run the file again which may cause errors due to re-declarations


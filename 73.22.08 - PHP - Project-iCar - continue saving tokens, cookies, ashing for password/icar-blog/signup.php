<?php
session_start();
require_once './app/helpers.php';

redirect_unauthorized(true);

if (validate_csrf() && isset($_POST['submit'])) {

    $link = mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB);

    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $name = mysqli_real_escape_string($link, $name);

    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = mysqli_real_escape_string($link, $email);

    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);
    $password = mysqli_real_escape_string($link, $password);


    $is_form_valid = true;

    if (!$name || mb_strlen($name) < 2 || mb_strlen($name) > 70) {
        $is_form_valid = false;
        $errors['name'] = '* Name is required for minimum 2 characters and maximum 70';
    }

    if (!$email || mb_strlen($email) < 6) {
        $is_form_valid = false;
        $errors['email'] = '* Email is required for a valid email address';
    }

    if (!$password || mb_strlen($password) < 6 || mb_strlen($password) > 20) {
        $is_form_valid = false;
        $errors['password'] = '* Password is required for minimum 6 characters and maximum 20';
    }

    if ($is_form_valid) {
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
        $result = mysqli_query($link, $sql);

        if ($result && mysqli_affected_rows($link) > 0) {
            $new_user_id = mysqli_insert_id($link);
            login_user($new_user_id, $name, './blog.php');
        }
    }
}


$page_title = "SIGN UP";
include './tpl/header.php';
?>


<main class="container flex-fill">

    <!-- PAGE HEADER -->
    <section id="main-content-top">
        <div class="row">
            <div class="col-12 mt-5 text-center">
                <h1 class="display-3 text-primary">
                    Sign up for a new account
                </h1>
            </div>
        </div>
    </section>

    <!-- PAGE CONTENT -->
    <section id="main-content" class="container">
        <div class="row mb-2">

            <div class="col-12 col-md-6 mx-auto">
                <form action="" method="POST" novalidate="novalidate" autocomplete="off">

                    <input type="hidden" name="<?= csrf_name(); ?>" value="<?= csrf(); ?>" />

                    <div class="form-group mt-3">
                        <label for="name">
                            <span class="text-danger">*</span>
                            Name
                        </label>
                        <input type="text" name="name" value="<?= old_field_value('name'); ?>" id="name" class="form-control">
                        <?= field_error('name'); ?>
                    </div>

                    <div class="form-group mt-3">
                        <label for="email">
                            <span class="text-danger">*</span>
                            Email
                        </label>
                        <input type="text" name="email" value="<?= old_field_value('email'); ?>" id="email" class="form-control">
                        <?= field_error('email'); ?>
                    </div>

                    <div class="form-group mt-3">
                        <label for="password">
                            <span class="text-danger">*</span>
                            Password
                        </label>
                        <input type="password" name="password" value="<?= old_field_value('password'); ?>" id="password" class="form-control">
                        <?= field_error('password'); ?>
                    </div>



                    <div class="d-flex my-3">
                        <input type="submit" name="submit" value="Sign Up" class="btn btn-primary">
                        <?= field_error('submit'); ?>
                    </div>
                </form>
            </div>

        </div>
    </section>


</main>

<?php include './tpl/footer.php'; ?>
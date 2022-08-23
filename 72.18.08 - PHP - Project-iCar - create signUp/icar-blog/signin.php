<?php
session_start();
require_once 'app/helpers.php';

redirect_unauthorized(true);

if (isset($_POST["submit"])) {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, 'password', FILTER_UNSAFE_RAW);

    if (!$email) {
        $errors['email'] = '* A valid email is required';
    } elseif (!$password) {
        $errors['password'] = '* Please enter a password';
    } else {

        $link = mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB);

        $email = mysqli_real_escape_string($link, $email);
        $password = mysqli_real_escape_string($link, $password);

        $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = mysqli_query($link, $sql);

        if ($result && mysqli_num_rows($result) === 1) {

            $user = mysqli_fetch_assoc($result);

            login_user($user['id'], $user['name'], './');
        } else {
            $errors['submit'] = '* Wrong email or password';
        }
    }
}


$page_title = "SIGN IN";
include './tpl/header.php';
?>

<main class="container flex-fill">

    <!-- PAGE HEADER -->
    <section id="main-content-top">
        <div class="row">
            <div class="col-12 mt-5 text-center">
                <h1 class="display-3 text-primary">
                    Sign in with your account
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, minima!
                </p>
            </div>
        </div>
    </section>

    <!-- PAGE CONTENT -->
    <section id="main-content" class="container mt-5">
        <div class="row mb-2">
            <div class="col-12 col-md-6 mx-auto">

                <form action="" method="POST" novalidate="novalidate" autocomplete="off">
                    <div class="form-group mt-3">
                        <label for="email">
                            <span class="text-danger me-1">*</span>
                            Email
                        </label>
                        <input type="email" name="email" id="email" class="form-control">
                        <?= field_error('email'); ?>
                    </div>

                    <div class="form-group mt-3">
                        <label for="password">
                            <span class="text-danger me-1">*</span>
                            Password
                        </label>
                        <input type="password" name="password" id="password" class="form-control">
                        <?= field_error('password'); ?>
                    </div>

                    <input type="submit" name="submit" value="Sign In" class="btn btn-primary mt-3">
                    <?= field_error('submit'); ?>
                </form>

            </div>
        </div>
    </section>


</main>

<?php include './tpl/footer.php'; ?>
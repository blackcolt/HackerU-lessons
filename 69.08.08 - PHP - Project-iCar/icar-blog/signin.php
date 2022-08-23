<?php


$errors = [
    'email'     => '',
    'password'  => '',
    'submit'    => ''
];

if (isset($_POST["submit"])) {
    $email = !empty($_POST['email']) ? trim($_POST['email']) : '';
    $password = !empty($_POST['password']) ? trim($_POST['password']) : '';

    if (!$email) {
        $errors['email'] = '* A valid email is required';
    } elseif (!$password) {
        $errors['password'] = '* Please enter a password';
    } else {
        // login the user
        echo 'logged in';
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
    <section id="main-content" class="continer mt-5">
        <div class="row mb-2">
            <div class="col-12 col-md-6 mx-auto">

                <form action="" method="POST" novalidate="novalidate" autocomplete="off">
                    <div class="form-group mt-3">
                        <label for="email">
                            <span class="text-danger me-1">*</span>
                            Email
                        </label>
                        <input type="email" name="email" id="email" class="form-control">
                        <?php if ($errors['email']) : ?>
                            <span class="text-danger">
                                <?= $errors['email']; ?>
                            </span>
                        <?php endif; ?>
                    </div>

                    <div class="form-group mt-3">
                        <label for="password">
                            <span class="text-danger me-1">*</span>
                            Password
                        </label>
                        <input type="password" name="password" id="password" class="form-control">
                        <?php if ($errors['password']) : ?>
                            <span class="text-danger">
                                <?= $errors['password']; ?>
                            </span>
                        <?php endif; ?>
                    </div>

                    <input type="submit" name="submit" value="Sign In" class="btn btn-primary mt-3">
                    <?php if ($errors['submit']) : ?>
                        <span class="text-danger">
                            <?= $errors['submit']; ?>
                        </span>
                    <?php endif; ?>
                </form>

            </div>
        </div>
    </section>


</main>

<?php include './tpl/footer.php'; ?>
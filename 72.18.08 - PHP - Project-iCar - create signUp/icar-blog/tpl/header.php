<?php define('LOGO', 'i<i class="bi bi-truck mx-1"></i>Car'); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iCAR <?= isset($page_title) ? " | $page_title" : ""; ?></title>

    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</head>

<body class="d-flex flex-column min-vh-100">
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary shadow-lg" aria-label="Third navbar example">
            <div class="container">

                <!-- LOGO -->
                <a class="navbar-brand" href="./">
                    <?= LOGO; ?>
                </a>

                <!--  BOOTSTRAP NAVBAR TOGGLER -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- NAVBAR LINKS -->
                <div class="collapse navbar-collapse" id="navbarsExample03">

                    <!-- NAVBAR LEFT LINK -->
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <a class="nav-link" href="./about.php">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./blog.php">Blog</a>
                        </li>
                    </ul>

                    <!-- NAVBAR LEFT RIGHT -->
                    <ul class="navbar-nav ms-auto mb-2 mb-sm-0">

                        <?php if (!user_auth()) : ?>

                            <li class="nav-item">
                                <a class="nav-link" href="./signin.php">Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./signup.php">Sign Up</a>
                            </li>

                        <?php else : ?>

                            <li class="nav-item">
                                <a class="nav-link" href="./profile.php"><?= $_SESSION['user_name']; ?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./signout.php">Sign Out</a>
                            </li>

                        <?php endif; ?>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
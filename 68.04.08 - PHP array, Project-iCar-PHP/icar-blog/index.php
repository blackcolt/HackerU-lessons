<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iCAR</title>

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
                    i<i class="bi bi-truck mx-1"></i>Car
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
                        <li class="nav-item">
                            <a class="nav-link" href="./signin.php">Sign In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./signup.php">Sign Up</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>

    <main class="container flex-fill">

        <!-- PAGE HEADER -->
        <section id="main-content-top">
            <div class="row">
                <div class="col-12 mt-5 text-center">
                    <h1 class="display-3 text-primary">
                        Welcome, Car Lovers <i class="bi bi-heart-fill ms-3"></i>
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, minima!
                    </p>
                    <p class="mt-4">
                        <a href="./signup.php" class="btn btn-outline-success btn-lg">Join Us!</a>
                    </p>
                </div>
            </div>
        </section>

        <!-- PAGE CONTENT -->
        <section id="main-content" class="continer mt-5">
            <div class="row mb-2">

                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">
                                Highlights
                            </strong>
                            <h3 class="mb-0">
                                Highlighted Cars
                            </h3>
                            <div class="mb-1 text-muted">
                                Nov 12
                            </div>
                            <p class="card-text mb-auto">
                                The most amazing cars you had ever whitnest
                            </p>
                            <a href="#" class="stretched-link">
                                Continue reading <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img class="img-fluid" src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg" alt="highlighted car">
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">
                                Priceless
                            </strong>
                            <h3 class="mb-0">
                                The most Priceless Cars
                            </h3>
                            <div class="mb-1 text-muted">
                                Nov 12
                            </div>
                            <p class="card-text mb-auto">
                                The most priceless cars on the market
                            </p>
                            <a href="#" class="stretched-link">
                                Continue reading <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img class="img-fluid" src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_960_720.jpg" alt="priceless car">
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </main>

    <footer class="bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="text-white text-center m-0 p-2">
                        <span>i<i class="bi bi-truck mx-1"></i>Car</span>
                        <span>&copy;</span>
                        <span><?= date('Y') ?></span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>
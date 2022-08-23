<?php
session_start();

$page_title = "HOME";
include './tpl/header.php';
?>

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

<?php include './tpl/footer.php'; ?>
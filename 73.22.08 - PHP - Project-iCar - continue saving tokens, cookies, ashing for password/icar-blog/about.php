<?php
session_start();
require_once 'app/helpers.php';

$page_title = "ABOUT";
include './tpl/header.php';
?>

<main class="container flex-fill">

    <!-- PAGE HEADER -->
    <section id="main-content-top">
        <div class="row">
            <div class="col-12 mt-5 text-center">
                <h1 class="display-3 text-primary">
                    About <?= LOGO; ?>
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, minima!
                </p>
            </div>
        </div>
    </section>

    <!-- PAGE CONTENT -->
    <!-- <section id="main-content" class="continer mt-5">
            <div class="row mb-2">


            </div>
        </section> -->


</main>

<?php include './tpl/footer.php'; ?>
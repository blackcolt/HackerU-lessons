<?php
$title_page = 'Forms Example';
include_once '../tpl/header.php';
?>

<main class="container-fluid flex-fill">
    <!-- PAGE HEADER -->
    <section id="main-top-content">
        <div class="row">
            <div class="col-12 mt-5 text-center">
                <h1 class="display-3 text-primary">
                    Forms Example
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro facere tempore beatae doloremque a accusantium recusandae similique quasi, voluptatibus eum?
                </p>
            </div>
        </div>
    </section>

    <!-- PAGE CONTENT -->
    <section class="main-content container mt-5">
        <div class="row">
            <div class="col-12">
                <details open>
                    <summary><b>$_POST array (query string in body)</b></summary>
                    <pre><?php var_dump($_POST); ?></pre>
                </details>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <details open>
                    <summary><b>$_GET array (query string in url)</b></summary>
                    <pre><?php var_dump($_GET); ?></pre>
                </details>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <details open>
                    <summary><b>$_REQUEST array ($_GET and $_POST data)</b></summary>
                    <pre><?php var_dump($_REQUEST); ?></pre>
                </details>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2>SELECT FORM GET or POST</h2>
                <select id="post_get_selector">
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                </select>
                <a href="./forms.php" class="text-danger">Reload and Clear POST and GET Data</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 mt-3 mx-auto">
                <form id="custom-form" action="" method="POST" novalidate="novalidate" autocomplete="off">
                    <div class="form-group">
                        <label for="email">
                            <span class="text-danger">*</span>
                            Email
                        </label>
                        <input type="email" name="email" id="email" class="form-control">
                        <span class="text-danger">
                            ERROR
                        </span>
                    </div>

                    <div class="form-group">
                        <label for="password">
                            <span class="text-danger">*</span>
                            Password
                        </label>
                        <input type="password" name="password" id="password" class="form-control">
                        <span class="text-danger">
                            ERROR
                        </span>
                    </div>

                    <div class="form-group">
                        <label for="number">
                            <span class="text-danger">*</span>
                            Number
                        </label>
                        <input type="number" name="number" id="number" class="form-control">
                        <span class="text-danger">
                            ERROR
                        </span>
                    </div>

                    <input type="submit" name="submit" value="sign in" class="btn btn-primary">
                    <span class="ml-4 text-danger">ERROR</span>
                </form>

            </div>
        </div>
    </section>
</main>

<script>
    const form = document.getElementById('custom-form');
    const getPostSelector = document.getElementById('post_get_selector')

    function changeFormMethodBySelector() {
        form.setAttribute('method', getPostSelector.value)
    }

    getPostSelector.addEventListener('change', changeFormMethodBySelector)

    changeFormMethodBySelector()
</script>


<?php include_once '../tpl/footer.php'; ?>
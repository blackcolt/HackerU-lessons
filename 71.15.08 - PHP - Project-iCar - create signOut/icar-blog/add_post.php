<?php
session_start();

require_once './app/helpers.php';

$errors = [
    'title'     => '',
    'article'   => ''
];

if (isset($_POST['submit'])) {
    $title = !empty($_POST['title']) ? trim($_POST['title']) :  '';
    $article = !empty($_POST['article']) ? trim($_POST['article']) :  '';

    $is_form_valid = true;

    if (!$title || mb_strlen($title) <=  2) {
        $is_form_valid = false;
        $errors['title'] = '* Title is required for minimum of 2 characters';
    }

    if (!$article || mb_strlen($article) <=  2) {
        $is_form_valid = false;
        $errors['article'] = '* Article is required for minimum of 2 characters';
    }


    if ($is_form_valid) {

        $uid = $_SESSION['user_id'];

        $link = mysqli_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB);

        $sql = "INSERT INTO posts (user_id, title, article) VALUES (1, '$title', '$article')";
        $result = mysqli_query($link, $sql);

        if ($result && mysqli_affected_rows($link) === 1) {
            header('location: ./blog.php');
            exit;
        }
    }
}


$page_title = "ADD POST";
include './tpl/header.php';
?>

<main class="container flex-fill">

    <!-- PAGE HEADER -->
    <section id="main-content-top">
        <div class="row">
            <div class="col-12 mt-5 text-center">
                <h1 class="display-3 text-primary">
                    Add a New Post
                </h1>
            </div>
        </div>
    </section>

    <!-- PAGE CONTENT -->
    <section id="main-content" class="container">
        <div class="row mb-2">

            <div class="col-12 col-md-6 mx-auto">
                <form action="" method="POST" novalidate="novalidate" autocomplete="off">

                    <div class="form-group mt-3">
                        <label for="title">
                            <span class="text-danger">*</span>
                            Title
                        </label>
                        <input type="text" name="title" value="<?= old_field_value('title'); ?>" id="title" class="form-control">
                        <?php if ($errors['title']) : ?>
                            <span class="text-danger">
                                <?= $errors['title']; ?>
                            </span>
                        <?php endif; ?>
                    </div>

                    <div class="form-group mt-3">
                        <label for="article">
                            <span class="text-danger">*</span>
                            Article
                        </label>
                        <textarea name="article" rows="10" id="article" class="form-control"><?= old_field_value('article'); ?></textarea>

                        <?php if ($errors['article']) : ?>
                            <span class="text-danger">
                                <?= $errors['article']; ?>
                            </span>
                        <?php endif; ?>
                    </div>

                    <div class="d-flex my-3">
                        <input type="submit" name="submit" value="Save Post" class="btn btn-primary">

                        <a href="./blog.php" class="btn btn-secondary ms-2">Cancel</a>
                    </div>
                </form>
            </div>

        </div>
    </section>


</main>

<?php include './tpl/footer.php'; ?>
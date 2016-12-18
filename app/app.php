<?php

// SETUP:
// mysql.server start
// mysql -uroot -proot
// apachectl start
// To update password, run this command: SET PASSWORD = PASSWORD('root');

    date_default_timezone_set('America/Los_Angeles');
    require_once __DIR__."/../vendor/autoload.php";
    require_once __DIR__."/../src/User.php";
    require_once __DIR__."/../src/Service.php";

    use Symfony\Component\Debug\Debug;
    Debug::enable();


// notifys silex exists
    $app = new Silex\Application();

    $app['debug'] = true;

// db connection info for local development
    $server = 'mysql:host=localhost;dbname=black_rabbit';
    $username = 'root';
    $password = 'root';
    $DB = new PDO($server, $username, $password);

// Save user log-in in session
    session_start();
    if (empty($_SESSION['current_user'])) {
        $_SESSION['current_user'] = null;
    }

    $app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views'));

    use Symfony\Component\HttpFoundation\Request;
    Request::enableHttpMethodParameterOverride();

// Homepage
    $app->get("/", function() use ($app) {
        return $app['twig']->render('index.html.twig', array('current_user' => $_SESSION['current_user'], 'alert' => null));
    });

 // signup page
    $app->get('/sign_up', function() use ($app) {
        return $app['twig']->render('sign_up.html.twig', array('alert' => null, 'current_user' => $_SESSION['current_user']));
    });

// submit sign up form
    $app->post('/sign_up', function() use ($app) {
        $username = $_POST['username'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $name = $_POST['name'];
        $bio = $_POST['bio'];
        $location = $_POST['location'];
        $new_user = new User($username, $password, $name, $bio, $location);
        $new_user->update($name, $bio, $location);
        $valid = $new_user->save();
        if ($valid == true) {
            $_SESSION['current_user'] = $new_user;
            return $app['twig']->render('user_dashboard.html.twig', array('user' => $new_user, 'alert' => 'login-success', 'current_user' => $_SESSION['current_user']));
        } else {
            return $app['twig']->render('sign_up.html.twig', array('alert' => 'signup', 'current_user' => $_SESSION['current_user']));
        }
    });

// login page
    $app->get('/log_in', function() use ($app) {
        return $app['twig']->render('log_in.html.twig', array('alert' => null, 'current_user' => $_SESSION['current_user']));
    });

// submit login form
    $app->post('/login', function() use ($app) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $valid = User::verifyLogin($username, $password);
        if ($valid == false) {
            return $app['twig']->render('log_in.html.twig', array('alert' => 'login', 'current_user' => $_SESSION['current_user']));
        }
        return $app['twig']->render('user_dashboard.html.twig', array('current_user' => $_SESSION['current_user'], 'alert' => 'login-success'));
    });

// log out
    $app->get('/logout', function() use ($app) {
        $_SESSION['current_user'] = null;
        return $app['twig']->render('index.html.twig', array('alert' => 'logout', 'current_user' => $_SESSION['current_user']));
    });


    return $app;
?>

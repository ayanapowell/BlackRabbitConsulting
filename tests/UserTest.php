<?php
    /**
    * @backupGlobals disabled
    * @backupStaticAttributes disabled
    */
    require_once "src/User.php";
    require_once "src/Service.php";

    $server = 'mysql:host=localhost;dbname=black_rabbit_test';
    $username = 'root';
    $password = 'root';
    $DB = new PDO($server, $username, $password);

    class UserTest extends PHPUnit_Framework_TestCase
    {
        protected function tearDown()
        {
            User::deleteAll();
            Service::deleteAll();
        }

        function test_getUsername()
        {
            //Arrange
            $username = "admin";
            $password = "admin";
            $new_user = new User($username, $password);

            //Act
            $result = $new_user->getUsername();

            //Assert
            $this->assertEquals($username, $result);
        }

        function test_getPassword()
        {
            //Arrange
            $username = "admin";
            $password = "admin";
            $new_user = new User($username, $password);

            //Act
            $result = $new_user->getPassword();

            //Assert
            $this->assertEquals($password, $result);
        }

        function test_getId()
        {
            //Arrange
            $username = "admin";
            $password = "admin";
            $id = 2;
            $new_user = new User($username, $password, $id);

            //Act
            $result = $new_user->getId();

            //Assert
            $this->assertEquals($id, $result);
        }

        function test_setUsername()
        {
            //Arrange
            $username = "admin";
            $password = "admin";
            $new_user = new User($username, $password);

            //Act
            $new_username = "colbyhayden";
            $new_user->setUsername($new_username);
            $result = $new_user->getUsername();

            //Assert
            $this->assertEquals($new_username, $result);
        }

        function test_setPassword()
        {
            //Arrange
            $username = "admin";
            $password = "admin";
            $new_user = new User($username, $password);

            //Act
            $new_password = "colbyhayden";
            $new_user->setPassword($new_password);
            $result = $new_user->getPassword();

            //Assert
            $this->assertEquals($new_password, $result);
        }

        function test_save()
        {
            //Arrange
            $username = "admin";
            $password = "admin";
            $new_user = new User($username, $password);
            $new_user->save();

            //Act
            $result = User::getAll();

            //Assert
            $this->assertEquals([$new_user], $result);
        }


    }
?>

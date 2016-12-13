<?php
    /**
    * @backupGlobals disabled
    * @backupStaticAttributes disabled
    */
    require_once "src/User.php";
    require_once "src/Service.php";

    $server = 'mysql:host=localhost;dbTitle=black_rabbit_test';
    $userTitle = 'root';
    $password = 'root';
    $DB = new PDO($server, $userTitle, $password);

    class ServiceTest extends PHPUnit_Framework_TestCase
    {
        protected function tearDown()
        {
            User::deleteAll();
            Service::deleteAll();
        }

        function test_getId()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            $output = $new_service->getId();

            $this->assertEquals(true, is_numeric($output));
        }

        function test_save()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            $output = Service::getAll();

            $this->assertEquals([$new_service], $output);
        }

        function test_getAll()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            $output = Service::getAll();

            $this->assertEquals([$new_service], $output);
        }

        function test_deleteAll()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            Service::deleteAll();
            $output = Service::getAll();

            $this->assertEquals([], $output);
        }

        function test_delete()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            $title2 = "Support";
            $description2 = "loren loren loren loren loren loren";
            $new_service2 = new Service($title, $description);
            $new_service2->save();

            $new_service->delete();
            $output = Service::getAll();

            $this->assertEquals([$new_service2], $output);
        }

        function test_findById()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            $output = Service::findById($new_service->getId());

            $this->assertEquals($new_service, $output);
        }

        function test_update()
        {
            $title = "Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();
            $new_title = "Community Connections";

            $new_service->update($new_title, $description);

            $this->assertEquals('Community Connections', $new_service->getTitle());
        }

        function test_cleanUp()
        {
            $title = "Community's Connections";
            $description = "loren loren loren loren loren loren";
            $new_service = new Service($title, $description);
            $new_service->save();

            $new_service->setTitle(Service::cleanUp($title));
            $output = $new_service->getTitle();

            $this->assertEquals("Communitys Connections", $output);
        }

    }
?>

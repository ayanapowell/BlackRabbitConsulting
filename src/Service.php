<?php
class Service
{
    private $title;
    private $description;
    private $id;

    function __construct($title, $description, $id = null)
    {
        $this->title = $title;
        $this->description = $description;
        $this->id = $id;
    }

// Standard Functions
    function save()
    {
      $GLOBALS['DB']->exec("INSERT INTO services (title, description) VALUES ('{$this->title}','{$this->description}');");
       $this->id = $GLOBALS['DB']->lastInsertId();
    }

    function update($new_title, $new_description)
    {
        $GLOBALS['DB']->exec("UPDATE services SET title = '{$new_title}', description = '{$new_description}' WHERE id = {$this->getId()};");
        $this->setTitle(Service::cleanUp($new_title));
        $this->setDescription(Service::cleanUp($new_description));
    }

    function delete()
    {
        $GLOBALS['DB']->exec("DELETE FROM services WHERE id = {$this->getId()};");
    }

// Static Functions
    static function findById($search_id) {
        $returned_services = Service::getAll();
        $service = null;
        foreach($returned_services as $returned_service) {
            if($returned_service->getId() == $search_id) {
                $service = $returned_service;
                break;
            }
        }
        return $service;
    }

    static function getAll()
    {
      $returned_services = $GLOBALS['DB']->query("SELECT * FROM services;");
      $services = array();
      foreach($returned_services as $service) {
          $title = $service['title'];
          $description = $service['description'];
          $id = $service['id'];
          $new_service = new Service($title, $description, $id);
          array_push($services, $new_service);
      }
      return $services;
    }

    static function deleteAll() {
        $GLOBALS['DB']->exec("DELETE FROM services;");
    }

    static function cleanUp($text)
    {
        $unwanted = array("'");
        return str_ireplace($unwanted, '', $text);
    }


// Setters and getters
    function setTitle($new_title)
    {
        $this->title = $new_title;
    }

    function getTitle()
    {
        return $this->title;
    }

    function setDescription($new_description)
    {
        $this->description = $new_description;
    }

    function getDescription()
    {
        return $this->description;
    }

    function getId()
    {
        return $this->id;
    }
}
?>

<?php
header('Content-Type:application/json');
function response($payload) {
    $json = json_encode($payload);
    echo $json;
}


function isPostRequest() {
    if($_SERVER["REQUEST_METHOD"] == "POST") return true;
    else return false;
}

function isGetRequest() {
    if($_SERVER["REQUEST_METHOD"] == "GET") return true;
    else return false;
}



class Scores {
    private $results = [];
    private $path = __DIR__."/data/database.db";

    public function __construct() {
        $this->load();
    }

    public function save() {
        $string = serialize($this->results);
        file_put_contents($this->path, $string);
    }

    public function load() {
        if(!file_exists($this->path)) touch($this->path);
        $string = file_get_contents($this->path);
        if(strlen($string)) {
            $this->results = unserialize($string);
        }
    }

    public function add($result) {
        array_push($this->results, $result);
    }

    public function getResults() {
        return $this->results;
    }
}

$scores = new Scores;
<?php


$results = $scores->getResults();
usort($results, function($a,$b){
    if ($a["score"] == $b["score"]) {
        return 0;
    }
    return ($a < $b) ? 1 : -1;
});
$results = array_slice($results, 0,5); 
print_r($results);
return response($results);
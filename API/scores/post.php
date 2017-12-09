<?php


if(!$_POST) return response([
    "status" => 400,
    "message" => "Missing arguments"
]);


if(!isset($_POST["nickname"])) return response([
    "status" => 400,
    "message" => "Missing argument nickname"
]);

if(!isset($_POST["score"])) return response([
    "status" => 400,
    "message" => "Missing argument score"
]);


$result = [
    "nickname" => $_POST["nickname"],
    "score" => $_POST["score"],
    "time" => time()
];

$scores->add($result);
$scores->save();

return response([
    "status" => 200,
    "message" => "Score saved",
    "payload" => $result
]);


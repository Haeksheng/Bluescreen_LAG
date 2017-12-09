<?php
require_once "../functions.php";
if(isPostRequest()) {
    require_once "post.php";
} else {
    require_once "get.php";
}
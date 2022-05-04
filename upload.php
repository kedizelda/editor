<?php

// Move uploaded file to a directory
$targetPath = "upload/" . basename($_FILES["inpFile"]["name"]);
move_uploaded_file($_FILES["inpFile"]["tmp_name"], $targetPath);
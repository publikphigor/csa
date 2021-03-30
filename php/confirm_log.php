<?php

include('./connections.php');

$Return['status'] = 0;
$Return['message'] = 'Access Denied';

session_start();


if(isset($_SESSION['User_Log']) || iset($_COOKIE['User_Log'])){
    
    if(isset($_SESSION['User_Log'])){
        $Log = pack('H*', $_SESSION['User_Log']);
    }else if(isset($_COOKIE['User_Log'])){
        $Log = pack('H*', $_COOKIE['User_Log']);
        $_SESSION['User_Log'] = $_COOKIE['User_Log'];
    }
    
    $Confirm = "SELECT * FROM student_accounts WHERE Email = '$Log' ";
    
    $Con = mysqli_query($Crypto, $Confirm);
    
    if(mysqli_num_rows($Con) == 1){
        $Return['status'] = 1;
        $Return['message'] = 'Account Valid';
        $data = mysqli_fetch_array($Con);
        $Return['email'] = $data['Email'];
        $Return['name'] = $data['Name'];
        $Return['wallet'] = $data['Wallet'];
        $Ned_Id = $data['Id'];
        $Courses = "SELECT * FROM registered_courses WHERE User_Id = $Ned_Id ";
        $Course = mysqli_query($Crypto, $Courses);
        $Return['courses'] = mysqli_num_rows($Course);
        $CCourses = "SELECT * FROM registered_courses WHERE User_Id = $Ned_Id ";
        $CCourse = mysqli_query($Crypto, $CCourses);
        $Return['completed_courses'] = mysqli_num_rows($CCourse);
    }else{
        $Return['message'] = 'Account Details Not Valid';
    }
    
}

echo json_encode($Return);

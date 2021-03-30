<?php

include( './connections.php' );

$Return = array();
$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if ( isset( $_POST['Email'] ) ) {

    $Name = mysqli_real_escape_string( $Crypto, $_POST['Name'] );
    $Email = mysqli_real_escape_string( $Crypto, $_POST['Email'] );
    $Password = mysqli_real_escape_string( $Crypto, $_POST['Password'] );
    $CPassword = mysqli_real_escape_string( $Crypto, $_POST['CPassword'] );

    $Mail = "SELECT * FROM student_accounts WHERE Email ='$Email' ";

    $Mailing = mysqli_query( $Crypto, $Mail );

    if ( mysqli_num_rows( $Mailing ) == 0 ) {
        if ( $Password == $CPassword ) {
            $Password = password_hash( $Password, PASSWORD_DEFAULT );
            $New_Account = "INSERT INTO student_accounts (Name, Email, Password) VALUES ('$Name', '$Email', '$Password' ) ";
            if ( mysqli_query( $Crypto, $New_Account ) ) {
                $Return['status'] = 1;
                $Return['message'] = 'Registration Successful';
            } else {
                $Return['message'] = 'Server Error';
            }
        } else {
            $Return['message'] = 'Password Error';
        }
    }else{
        $Return['message'] = 'Account Details Already Exist';
    }
}

echo json_encode( $Return );

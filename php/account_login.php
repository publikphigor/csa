<?php

include( './connections.php' );

$Return = array();
$Return['status'] = 0;
$Return['message'] = 'Access Denied';

if ( isset( $_POST['Email'] ) ) {

    $Email = mysqli_real_escape_string( $Crypto, $_POST['Email'] );
    $Password = mysqli_real_escape_string( $Crypto, $_POST['Password'] );

    $Mail = "SELECT * FROM student_accounts WHERE Email ='$Email' ";

    $Mailing = mysqli_query( $Crypto, $Mail );

    if ( mysqli_num_rows( $Mailing ) == 1 ) {

        $Real = mysqli_fetch_array( $Mailing );
        $Passed = $Real['Password'];

        if ( password_verify( $Password, $Passed ) ) {
            $Return['status'] = 1;
            $Return['message'] = 'Access Granted';
            session_start();
            $_SESSION['User_Log'] = bin2hex( $Email );
            setcookie( 'User_Log', bin2hex( $Email ), time() + 2592000 );
        } else {
            $Return['message'] = 'Account Details Does Not Exist';
        }

    } else {
        $Return['message'] = 'Account Details Does Not Exist';
    }
}

echo json_encode( $Return );

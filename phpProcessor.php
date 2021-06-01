<?php

/////IM ONLY CHECKING FOR THE FIRSTNAME, email FIELDS  ..YOU CAN VALIDATE OTHER FIELDS @@@



////////////// check 1st name and pass code 400 for mild error
if(empty($_POST['name'])){
	$responseArray = array('code' => 400, 'message'=>'A first name is required !.' , 'timestamp'=> $recordTime );
echo json_encode($responseArray);
	exit();
} 

////////////// check email and pass code 401 for bad error
if(empty($_POST['email'])){
	$responseArray = array('code' => 401, 'message'=>'An email is required !.' , 'timestamp'=> $recordTime );
echo json_encode($responseArray);
	exit();
}


///////// passing 200 will tell the script your done and its ready to redirect.
	$responseArray = array('code' => 200, 'message'=>'Success , Congrats it worked ...' , 'timestamp'=> $recordTime );
	echo json_encode($responseArray);
	exit();


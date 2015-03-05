#pragma strict
private var x_move:float;
private var y_move:float;
function Start () {

}

function Update () {
	x_move = Input.GetAxis("JoystickLeftHorizontal"); 
	y_move = Input.GetAxis("JoystickLeftVertical"); 
	rigidbody.transform.Translate(new Vector3(x_move, 0, -y_move));	
}
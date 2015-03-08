#pragma strict
private var x_move:float;
private var y_move:float;
public var cam:GameObject;
function Start () {

}

function Update () {
	x_move = Input.GetAxis("JoystickLeftHorizontal"); 
	y_move = Input.GetAxis("JoystickLeftVertical"); 
	
	var cam_delta_x:float = cam.transform.position.x - rigidbody.transform.position.x;
	var cam_delta_z:float = cam.transform.position.z - rigidbody.transform.position.z;
	
	var cam_angle:float = Mathf.Atan2(cam_delta_x, cam_delta_z);

	var control_angle:float = Mathf.Atan2(y_move, x_move) + 1.5;
	var angle:float = cam_angle+control_angle;
	
	var strength:float = Mathf.Sqrt(x_move * x_move + y_move * y_move) /10;
	//rigidbody.AddForce(Vector3.up * 20, ForceMode.VelocityChange);
	rigidbody.transform.Translate(new Vector3(-Mathf.Sin(angle)*strength, 0, -Mathf.Cos(angle)*strength));	
	
	rigidbody.transform.rotation.Set(rigidbody.transform.rotation.x, angle, rigidbody.transform.rotation.z, 0);
}
public function Jump(strength:float)
{
	//rigidbody.AddForce(Vector3.up * strength, ForceMode.VelocityChange);
}
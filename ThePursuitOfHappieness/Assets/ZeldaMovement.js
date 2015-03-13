#pragma strict
private var x_move:float;
private var y_move:float;
public var cam:GameObject;
private var stride:boolean = false;
private var speed:float = 0;
public var maxRunSpeed:float = 5;
public var maxWalkSpeed:float = 2.5;
public var friction:float = 1.05;
private var bodyAngle:Vector3 = new Vector3(0, 0, 0);
private var angleVector:Vector3 = new Vector3(0, 0, 0);

function Start () {

}

function Update () {
	x_move = Input.GetAxis("JoystickLeftHorizontal"); 
	y_move = Input.GetAxis("JoystickLeftVertical"); 
	
	var cam_delta_x:float = cam.transform.position.x - rigidbody.transform.position.x;
	var cam_delta_z:float = cam.transform.position.z - rigidbody.transform.position.z;
	
	var cam_angle:float = Mathf.Atan2(cam_delta_x, cam_delta_z);

	var control_angle:float = Mathf.Atan2(y_move, x_move) + 1.5;
	var control_vector:float = Mathf.Sqrt(x_move * x_move + y_move * y_move);
	
	var angle:float = cam_angle+control_angle;
	angleVector.Set(Mathf.Cos(angle), 0, Mathf.Sin(angle));
	
	var runRange:float = 1;
	var walkRange:float = 0.25;
	var turnRange:float = 0.03;
	
	var running:boolean = control_vector >= runRange ? true:false;
	var walking:boolean = !running && control_vector >walkRange;
	var turning:boolean = !walking && !running && control_vector > turnRange;
	

	var slerpSpeed:float = 0.0;
	stride = false;
	var vel:float = 0;
	if(running)
	{
		vel = control_vector/20;
		if(speed>maxRunSpeed / friction) 
		{
			speed = maxRunSpeed;
			stride = true;
		}
		slerpSpeed = 0.1;
	}
	else if(walking)
	{
		vel = control_vector/50;
		if(speed>maxWalkSpeed) 
		{
			
			stride = true;
		}
		slerpSpeed = 0.05;
		//speed = 0.5;
	}
	else if(turning)
	{	
		slerpSpeed = 0.01;
	 	//speed = 0;
	}
	else
	{
		//speed = 0;
	}
	if(control_vector >=1)
	{
		stride = true;
	}
	else
	{
		stride = false;
	}
	var targetDir:Vector3 = bodyAngle - angleVector;
    var forward:Vector3 = transform.forward;
    var a:float = Vector3.Angle(bodyAngle, angleVector);
    if (a < 10F || stride)
    {
    	speed += vel;
    }
            
	
	speed = (speed) / friction;
	bodyAngle = Vector3.Slerp(bodyAngle, angleVector, slerpSpeed);
	Debug.Log(walking);
	
	
	
	var deltaAngle = Vector3.AngleBetween(bodyAngle, angleVector);
	
	//Debug.Log(control_angle_delta);
	
	
	
	var strength:float = Mathf.Sqrt(x_move * x_move + y_move * y_move) /10;
	//rigidbody.AddForce(Vector3.up * 20, ForceMode.VelocityChange);
	//rigidbody.transform.Translate(new Vector3(-Mathf.Sin(angle)*strength, 0, -Mathf.Cos(angle)*strength));	
	//rigidbody.transform.Translate(new Vector3(0, 0, speed / 10));
	//rigidbody.AddRelativeForce(transform.forward * speed, ForceMode.Impulse);
	//var  q:Quaternion = Quaternion.LookRotation(new Vector3(rigidbody.transform.rotation.x, Mathf.Atan2(bodyAngle.y, bodyAngle.x), rigidbody.transform.rotation.z));
	//rigidbody.transform.rotation = q;
	rigidbody.velocity = transform.forward * (speed * 5);
	rigidbody.transform.rotation = Quaternion.AngleAxis(Mathf.Atan2(bodyAngle.z, bodyAngle.x)/(Mathf.PI/180)+180, Vector3.up);
}
public function Jump(strength:float)
{
	//rigidbody.AddForce(Vector3.up * strength, ForceMode.VelocityChange);
}
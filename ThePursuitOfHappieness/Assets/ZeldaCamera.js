#pragma strict
public var target:GameObject;
public var pitch:float = 0;
public var yaw:float = 0;
public var maxRadius:float = 100;
private var radius:float = maxRadius;
function Start () {

}

function Update () {
	var pos:Vector3 = new Vector3(
		target.transform.position.x + radius * Mathf.Cos(yaw) * Mathf.Cos(pitch), 
		target.transform.position.y + radius * Mathf.Sin(yaw),
		target.transform.position.z+ radius *Mathf.Cos(yaw) * Mathf.Sin(pitch)
	);
	transform.position = pos;
	yaw += Input.GetAxis("JoystickRightVertical") / 30;
	pitch += Input.GetAxis("JoystickRightHorizontal") / 30;
}
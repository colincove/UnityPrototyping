#pragma strict
var force:Vector3;
function Start () {
	force = new Vector3(10, 0, 10);
}

function Update () 
{
	rigidbody.AddForce(10, 0, 10, ForceMode.Acceleration);
}
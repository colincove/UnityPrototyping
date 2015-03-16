#pragma strict

function Start () {

}

function Update () {

}
function UpdateState(state:States)
{
	if(state == States.Idle || state == States.Walking)
	{
		//rigidbody.useGravity = false; 
	}
	else if (state == States.Jumping)
	{
		//rigidbody.useGravity = true; 
	}
}
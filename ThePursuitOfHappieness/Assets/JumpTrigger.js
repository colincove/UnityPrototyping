#pragma strict

public var footTrigger:BoxCollider;
public var movement:ZeldaMovement;
private var x_move:float; 
private var y_move:float;
public var stateMachine:ZeldaStateMachine;
function Start () {
	
}

function Update () {
		if(stateMachine.currentState != States.Walking)
	{
		return;
	}

	x_move = Input.GetAxis("JoystickLeftHorizontal"); 
	y_move = Input.GetAxis("JoystickLeftVertical"); 
	
	 var hit : RaycastHit;
	 var deploymentHeight:int = 3;
	 var ray:Ray =new Ray(transform.position + transform.forward * 0.5 + transform.up *1.5, Vector3.down);
	if (Physics.Raycast (ray, hit, deploymentHeight)) 
	{
		var distanceToGround = hit.distance;
		Debug.DrawRay (ray.origin, ray.direction * deploymentHeight, Color.green);
	} else{
		movement.Jump(10);
		Debug.DrawRay (ray.origin, ray.direction * deploymentHeight, Color.red);
	}
}
function OnTriggerExit(other)
{
	//Debug.Log("ON TRIGGER EXIT");
	//movement.Jump(30);
}

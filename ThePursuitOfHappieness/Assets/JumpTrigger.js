#pragma strict

public var footTrigger:BoxCollider;
public var movement:ZeldaMovement;
private var x_move:float; 
private var y_move:float;
function Start () {
	
}

function Update () {
	x_move = Input.GetAxis("JoystickLeftHorizontal"); 
	y_move = Input.GetAxis("JoystickLeftVertical");  
}
function OnTriggerExit(other)
{
	Debug.Log("ON TRIGGER EXIT");
	movement.Jump(30);
}

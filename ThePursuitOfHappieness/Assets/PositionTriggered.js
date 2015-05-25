#pragma strict
public var targetPosition:Vector3;
public var slurpSpeed:float = 0.01;
private var _active:boolean;
private var _startPosition:Vector3;
function Start () {
	_active = false;
	_startPosition = transform.position;
}

function Update () {
	if(_active)
	{
		transform.position = Vector3.Slerp(transform.position, targetPosition, slurpSpeed);
	}
	else
	{
		transform.position = Vector3.Slerp(transform.position ,_startPosition,  slurpSpeed);
	}
}
function OnTriggered(active:boolean)
{
	_active = active;
}
#pragma strict
public var targetAngle:Vector3;
public var slurpSpeed:float = 0.01;
private var _active:boolean;
private var _startPosition:Vector3;
function Start () {
	_active = false;
	_startPosition = transform.localEulerAngles;
}

function Update () {
	if(_active)
	{
		transform.localEulerAngles = Vector3.Slerp(transform.localEulerAngles, targetAngle, slurpSpeed);
	}
	else
	{
		transform.localEulerAngles = Vector3.Slerp(transform.localEulerAngles ,_startPosition,  slurpSpeed);
	}
	
}
function OnTriggered(active:boolean)
{
	_active = active;
}
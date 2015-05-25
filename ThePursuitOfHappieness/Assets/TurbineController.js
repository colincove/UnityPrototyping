#pragma strict
public var turbine:GameObject;
public var objWindController:GameObject;
public var range:float = 20;
public var acc:float = 0.2;
public var fric:float = 1.05;
private var vel:float = 0;
private var _turning:boolean = false;

private var _windController:WindController;
function Start () 
{
	_windController = objWindController.GetComponent(WindController);
}

function Update () 
{
	var a:float = turbine.transform.eulerAngles.y * Mathf.Deg2Rad;
	var tmpAngle:Vector3 = new Vector3(Mathf.Cos(a), 0, Mathf.Sin(a));

	if(Vector3.Angle(_windController.angle * -1, tmpAngle) < range)
	{
		if(!_turning)
		{
			_turning = true;
			SendMessage("OnTrigger", true);
		}
		vel += acc;
	}
	else
	{
		if(_turning)
		{
			_turning = false;
			SendMessage("OnTrigger", false);
		}
	}
	
	turbine.transform.eulerAngles.z += vel;
	vel = vel / fric;
}
function OnTrigger(active:boolean):void
{
}
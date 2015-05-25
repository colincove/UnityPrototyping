#pragma strict
public var targetAngle:Vector3;
public var slerpSpeed:float = 0.01;
private var _active:boolean;
private var startPosition:Vector3;
private var _currentPosition:Vector3;
function Start () 
{
	_active = false;
	startPosition = convert(transform.localEulerAngles);
	targetAngle = convert(targetAngle);
	_currentPosition = startPosition;
}

function Update () {
	var target:Vector3;
	if(_active)
	{
		target = targetAngle;
		//transform.localEulerAngles = Vector3.SmoothDamp(transform.localEulerAngles, targetAngle, velocity, slurpSpeed);
	}
	else
	{
		target = startPosition;	
		
		//transform.localEulerAngles = Vector3.SmoothDamp(transform.localEulerAngles ,_startPosition, velocity,  slurpSpeed);
	}
	
	var a:Vector3  = _currentPosition;
	var b:Vector3  = target;
	
	/*var x:float = Mathf.Abs(a.x - b.x);
	var y:float = Mathf.Abs(a.y - b.y);
	var z:float = Mathf.Abs(a.z - b.z);*/
	
	var x:float = (a.x - b.x);
	var y:float = (a.y - b.y);
	var z:float = (a.z - b.z);
	
	var xDir = x > 0 ? -1:1;
	var yDir = x > 0 ? -1:1;
	var zDir = x > 0 ? -1:1;
	
	xDir = x > 180 ? 1:-1;
	yDir = x > 180 ? 1:-1;
	zDir = x > 180 ? 1:-1;
	
	x = x > 180 ? 180 - (x - 180):x;
	y = y > 180 ? 180 - (y - 180):y;
	z = z > 180 ? 180 - (z - 180):z;
	
	xDir = x < -180 ? -1:1;
	yDir = x < -180 ? -1:1;
	zDir = x < -180 ? -1:1;
	
	x = x < -180 ? a.x + (360 - b.x):x;
	y = y < -180 ? a.y + (360 - b.y):y;
	z = z < -180 ? a.z + (360 - b.z):z;
	
	x = Mathf.Abs(x);
	y = Mathf.Abs(y);
	z = Mathf.Abs(z);
	
	/*var xDir = a.x == b.x + x ? -1:1;
	var yDir = a.y == b.y + y ? -1:1;
	var zDir = a.z == b.z + z ? -1:1;*/
	
	
	
	
	
	
	_currentPosition = new Vector3(
	_currentPosition.x + x * slerpSpeed * xDir, 
	_currentPosition.y + y * slerpSpeed * yDir,
	_currentPosition.z + z * slerpSpeed * zDir);
	
	transform.localEulerAngles = _currentPosition;

}
private function convert(vector:Vector3):Vector3
{
	//converts any angle into a 0-360 degree plane
	var result:Vector3 = new Vector3(vector.x, vector.y, vector.z);
	
	
	var xInt:int = result.x / 360 * -1 + 1;//cannot parse this inline with next calculation. Lame. 
	result.x = result.x < 0 ? result.x + (360 * xInt):result.x;
	result.x = result.x > 360 ? result.x % 360:result.x;
	
	var yInt:int = result.y / 360 * -1 + 1;//cannot parse this inline with next calculation. Lame. 
	result.y = result.y < 0 ? result.y + (360 * yInt):result.y;
	result.y = result.y > 360 ? result.y % 360:result.y;
	
	var zInt:int = result.z / 360 * -1 + 1;//cannot parse this inline with next calculation. Lame. 
	result.z = result.z < 0 ? result.z + (360 * zInt):result.z;
	result.z = result.z > 360 ? result.z % 360:result.z;
	
	return result;
	//result.x = result.x <
}
function OnTriggered(active:boolean)
{
	_active = active;
}
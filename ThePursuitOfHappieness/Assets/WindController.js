public var angle:Vector3;
public var x:float = 0;
public var y:float = 0;
public var z:float = 0;
// Use this for initialization
function Start () {
	angle = new Vector3(x, y, z);
}

// Update is called once per frame
function Update () {
}
public function SetAngle(x:float, y:float, z:float):void
{
	this.angle.Set(x, y, z);
}


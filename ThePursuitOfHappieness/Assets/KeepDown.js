#pragma strict
public var deploymentHeight:int = 2;
function Start () {

}

function Update () {
	
	var ray:Ray =new Ray(transform.position+ transform.up *0.5, Vector3.down);
	var hit : RaycastHit;
	if (Physics.Raycast (ray, hit, deploymentHeight)) 
	{
		if(hit.collider.tag != "Ground")
		{
			return;
		}
		//rigidbody.MovePosition(Vector3.down * ((transform.position.y - hit.point.y) -1.2));
		//var distanceToGround = hit.distance;
		
		Debug.DrawRay (ray.origin, ray.direction * deploymentHeight, Color.green);
	}
}
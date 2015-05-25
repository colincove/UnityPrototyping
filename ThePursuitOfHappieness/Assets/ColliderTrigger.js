
// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}

function OnTriggerEnter(collider:Collider):void
{

	if(collider.tag == "Player")
	{
		SendMessage("OnTrigger", true); 
	}
}

function OnTriggerExit(collider:Collider):void
{
	if(collider.tag == "Player")
	{
		SendMessage("OnTrigger", false); 
	}
}
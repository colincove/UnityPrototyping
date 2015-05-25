#pragma strict
public var listeners:GameObject[];

function OnTrigger(active:boolean)
{
	for(var obj:GameObject in listeners)
	{
		obj.SendMessage("OnTriggered", active);
	}
}

function OnTriggered(active:boolean)
{
	
}
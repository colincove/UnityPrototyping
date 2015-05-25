enum WindmillStates{Idle, TouchActive, Grabbing, Pushing};
private var _state:WindmillStates;
public var hero:GameObject;
public var body:GameObject;
public var mainCamera:GameObject;
public var cameraPoint:GameObject;
public var heroCamPoint:GameObject;
public var rotationMultiplyer:float = 1;
public var rotationSpeed:Number = 0.01;
public var grabPoint1:GameObject;
public var grabPoint2:GameObject;
private var _grabPoint:GameObject;
private var _heroStateMachine:ZeldaStateMachine;
// Use this for initialization
function Start () 
{
	_heroStateMachine = hero.GetComponent(ZeldaStateMachine);
	setState(WindmillStates.Idle);
}

// Update is called once per frame
function Update () 
{
	if(_state == WindmillStates.TouchActive && (Input.GetAxis("RB") || Input.GetAxis("LB")))
	{
		setState(WindmillStates.Grabbing);
	}
	else if (_state == WindmillStates.Grabbing) 
	{
		if(Input.GetAxis("RB") && Input.GetAxis("LB"))
		{
			setState(WindmillStates.Pushing);
		}
		else if(!Input.GetAxis("RB") && !Input.GetAxis("LB"))
		{
			setState(WindmillStates.TouchActive);
		}
	}
	else if (_state == WindmillStates.Pushing) 
	{
		if(!Input.GetAxis("RB") || !Input.GetAxis("LB"))
		{
			setState(WindmillStates.Grabbing);
		}
		
		rotationSpeed = Input.GetAxis("JoystickLeftVertical") * rotationMultiplyer * -1; 
		if(rotationSpeed < 0) rotationSpeed = 0;
		
		if(_grabPoint == grabPoint1)
		{
			body.transform.RotateAround(Vector3.up, -rotationSpeed);
		}
		else
		{
			body.transform.RotateAround(Vector3.up, rotationSpeed);
		}
	}
	if(_state == WindmillStates.Pushing || _state == WindmillStates.Grabbing)
	{
		var newPos:Vector3 = new Vector3(
		_grabPoint.transform.position.x, 
		_grabPoint.transform.position.y, 
		_grabPoint.transform.position.z); 
		hero.transform.position = newPos;
		
		var newRot:Vector3 = new Vector3(
		_grabPoint.transform.eulerAngles.x, 
		_grabPoint.transform.eulerAngles.y, 
		_grabPoint.transform.eulerAngles.z); 
		hero.transform.eulerAngles = newRot;
	}
}

private function setState(state:WindmillStates):void
{
	
	switch(state)
	{
		case WindmillStates.Idle:
			break;
		case WindmillStates.TouchActive:
			if(_state == WindmillStates.Grabbing)
			{
				_heroStateMachine.ChangeState(States.Idle);
			}
			break;
		case WindmillStates.Grabbing:
			selectGrabPoint();
			mainCamera.SendMessage("ChangeTarget", heroCamPoint);
			_heroStateMachine.ChangeState(States.Grabbing);
			break;
		case WindmillStates.Pushing:
			mainCamera.SendMessage("ChangeTarget", cameraPoint);
			_heroStateMachine.ChangeState(States.Pushing);
			break;
	}
	_state = state;
}

function OnTriggered(active:boolean):void
{
	setState(active ? WindmillStates.TouchActive:WindmillStates.Idle);
}

function selectGrabPoint():void
{
	if(Vector3.Distance(grabPoint1.transform.position, hero.transform.position) <
	Vector3.Distance(grabPoint2.transform.position, hero.transform.position))
	{
		_grabPoint = grabPoint1;
	}
	else
	{
		_grabPoint = grabPoint2;
	}
}
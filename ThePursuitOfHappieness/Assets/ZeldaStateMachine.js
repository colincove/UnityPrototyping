#pragma strict

enum States{Idle, Walking, Falling, Jumping, Climbing};
public var currentState:States;
function Start () 
{
	currentState = States.Idle;
}

function Update () {

}
function ChangeState(state:States)
{
	if(state == currentState)
	{
		return;
	}
	currentState = state;
	SendMessage("UpdateState", state);
}
function UpdateState(state:States)
{
}
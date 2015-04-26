#pragma strict
public var audioSource:AudioSource;
public var stepSounds:AudioClip[];
public var jumpSounds:AudioClip[];
public var landingSounds:AudioClip[];
public var stateMachine:ZeldaStateMachine;
function Start () {

}

function Update () {

}
function TakeStep()
{
	if(stateMachine.currentState != States.Walking) return;
	playSoundFromList(stepSounds);
}
function UpdateState(state:States)
{
	if(state == States.Jumping)
	{
		playSoundFromList(jumpSounds);
	}
	if(state == States.Idle && stateMachine.oldState == States.Jumping)
	{
		playSoundFromList(landingSounds);
	}
}
function playSoundFromList(list:AudioClip[])
{
	audioSource.clip = list[Mathf.Round(Random.Range(0, list.Length))];
	audioSource.Play();
}
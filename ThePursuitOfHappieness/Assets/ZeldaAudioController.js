#pragma strict
public var audioSource:AudioSource;
public var stepSounds:AudioClip[];
public var stepSoundsWood:AudioClip[];
public var jumpSounds:AudioClip[];
public var landingSounds:AudioClip[];
public var landingSoundsWood:AudioClip[];
public var stateMachine:ZeldaStateMachine;
public var groundTag:String;
function Start () {

}

function Update () {

}
function TakeStep()
{
	if(stateMachine.currentState != States.Walking) return;
	playSoundFromList(groundTag == "Ground" ? stepSounds:stepSoundsWood);
}
function UpdateState(state:States)
{
	if(state == States.Jumping)
	{
		playSoundFromList(jumpSounds);
	}
	if(state == States.Idle && stateMachine.oldState == States.Jumping)
	{
		playSoundFromList(groundTag == "Ground" ? landingSounds:landingSoundsWood);
	}
}
function playSoundFromList(list:AudioClip[])
{
	audioSource.clip = list[Mathf.Round(Random.Range(0, list.Length))];
	audioSource.Play();
}
function OnCollisionEnter (collision:Collision):void
{
	groundTag = collision.gameObject.tag;
}
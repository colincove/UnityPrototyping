#pragma strict
public var audioSource:AudioSource;
public var woodRustleSource:AudioSource;
public var stepSounds:AudioClip[];
public var stepSoundsWood:AudioClip[];
public var woodRustleSound:AudioClip[];
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
	playSoundFromList(groundTag == "Ground" ? stepSounds:stepSoundsWood, audioSource);
	//if(!woodRustleSource.isPlaying)
	//{
		playSoundFromList(woodRustleSound, woodRustleSource);
	//}
	
}
function UpdateState(state:States)
{
	if(state == States.Jumping)
	{
		playSoundFromList(jumpSounds, audioSource);
	}
	if(state == States.Idle && stateMachine.oldState == States.Jumping)
	{
		playSoundFromList(groundTag == "Ground" ? landingSounds:landingSoundsWood, audioSource);
	}
}
function playSoundFromList(list:AudioClip[], source:AudioSource)
{
	source.clip = list[Mathf.Round(Random.Range(0, list.Length))];
	source.Play();
}
function OnCollisionEnter (collision:Collision):void
{
	groundTag = collision.gameObject.tag;
}
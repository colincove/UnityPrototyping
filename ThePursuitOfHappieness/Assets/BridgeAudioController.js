#pragma strict
public var audioSource:AudioSource;
public var windClips:AudioClip[];
public var moveSounds:AudioClip[];
private var playingAudio:boolean;
private var volume:float = 1f;
private var audioFriction:float = 1.005;
function Start () {

}

function Update () {
	audioSource.volume = volume;
	if(!playingAudio && audioSource.isPlaying)
	{
		volume = volume / audioFriction;
		if(volume < 0.05) 
		{
			audioSource.Stop();
		}
	}
	else if(playingAudio)
	{
		if(volume < 1) 
		{
			volume = volume * audioFriction;
		}
		else
		{
			volume = 1;
		}
	}
	
	
}
function startSound()
{
	
	playingAudio = true;
	if(!audioSource.isPlaying)
	{
		volume = 1;
		playSoundFromList(windClips);
	}
}

function endSound()
{
	playingAudio = false;
}

function OnTriggerEnter (collision:Collider):void
{
	if(collision.gameObject.tag == "Player")
	{
		startSound();
	}
}
function OnTriggerExit (collision:Collider):void
{
	if(collision.gameObject.tag == "Player")
	{
		endSound();
	}
}
function playSoundFromList(list:AudioClip[])
{
	audioSource.clip = list[Mathf.Round(Random.Range(0, list.Length))];
	audioSource.Play();
}
function OnTriggered(active:boolean):void
{
	playSoundFromList(moveSounds);
}
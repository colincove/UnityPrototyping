#pragma strict
public var audioSource:AudioSource;
public var windClips:AudioClip[];
function Start () {

}

function Update () {

}
function startSound()
{
	playSoundFromList(windClips);
}

function endSound()
{
	audioSource.Stop();
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
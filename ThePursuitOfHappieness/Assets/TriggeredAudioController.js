public var audioSource:AudioSource;
public var activeClips:AudioClip[];
public var inactiveClips:AudioClip[];
// Use this for initialization
function Start () 
{
}

// Update is called once per frame
function Update () 
{
}
function OnTriggered(active:boolean):void
{
	playSoundFromList(active ? activeClips:inactiveClips, audioSource);
}

function playSoundFromList(list:AudioClip[], source:AudioSource)
{
	source.clip = list[Mathf.Round(Random.Range(0, list.Length))];
	source.Play();
}

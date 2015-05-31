#pragma strict
public var rotar:GameObject;
public var audioSource:AudioSource;
public var rotarSource:AudioSource;
private var _sailSource:AudioSource;
public var rotateSounds:AudioClip[];
public var turningSounds:AudioClip[];
public var body:GameObject;
private var _turbineController:TurbineController;
private var _controller:WindmillController;
function Start () {
	_controller = GetComponent(WindmillController);
	_turbineController = body.GetComponent(TurbineController);
	_sailSource = rotar.GetComponent(AudioSource);
}

function Update () {
	if(_controller.GetState() == WindmillStates.Pushing)
	{
		if(!rotarSource.isPlaying)
		{
			if(Input.GetAxis("JoystickLeftVertical") != 0)
			{
				playSoundFromList(rotateSounds, rotarSource);
			}
			
		}
	}
	if(_turbineController.IsTurning() && !audioSource.isPlaying)
	{
		audioSource.Play();
		_sailSource.Play();
	}
	if(!_turbineController.IsTurning() && audioSource.isPlaying)
	{
		audioSource.Stop();
		_sailSource.Stop();
	}
}
function playSoundFromList(list:AudioClip[], source:AudioSource)
{
	source.clip = list[Mathf.Round(Random.Range(0, list.Length))];
	source.Play();
}

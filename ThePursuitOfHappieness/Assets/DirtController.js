#pragma strict
public var objWindController:GameObject;
public var particleSystem:ParticleSystem;
public var strength:float = 1f;

private var _windController:WindController;
function Start () {
	_windController = objWindController.GetComponent(WindController);
}

function Update () {
}
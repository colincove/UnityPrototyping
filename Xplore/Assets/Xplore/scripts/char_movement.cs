using UnityEngine;
using System.Collections;

public class char_movement : MonoBehaviour {
	public float speed = 3.0F;
	public float rotateSpeed = 3.0F;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		CharacterController controller = GetComponent<CharacterController>();
		transform.Rotate(0, Input.GetAxis("Horizontal") * rotateSpeed, 0);
		Vector3 forward = transform.TransformDirection(Vector3.forward);
		float curSpeed = speed * Input.GetAxis("Vertical");
		controller.SimpleMove(forward * curSpeed);	


	}

}

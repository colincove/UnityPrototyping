using UnityEngine;
using System.Collections;

public class orb_movement : MonoBehaviour {
	private float changeDirectionFrequency = 5000;
	private float lastDirectionChange = 0;
	private Vector3 force;
	private int strength = 3;
	// Use this for initialization
	void Start () {
		force = new Vector3 ();
	}
	
	// Update is called once per frame
	void Update () 
	{
		transform.rigidbody.AddForce (force);

		if (lastDirectionChange + changeDirectionFrequency < Time.time * 1000) 
		{
			//transform.rigidbody.velocity = Vector3.zero;
			//transform.rigidbody.angularVelocity  = Vector3.zero;

			lastDirectionChange = Time.time * 1000;

			float a = Random.Range(0, 360);

			force.z = Mathf.Cos(a * (Mathf.PI/180)) * strength;
			force.x = Mathf.Sin(a * (Mathf.PI/180)) * strength;
		}
	}
}

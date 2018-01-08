#pragma strict

function Start () {

}


function Update () {

}

function OnCollisionEnter(collisionInfo : Collision){

	if(collisionInfo.gameObject.tag == "digda")

	{
			collisionInfo.gameObject.SendMessage("digda_Destroy");
		
			Debug.Log("뿅망치 맞음!");
	}

	Destroy(gameObject);
	
}

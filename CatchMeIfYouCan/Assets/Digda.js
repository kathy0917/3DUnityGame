#pragma strict
private var killTimer : float = 2.0;

private var arr = new Array(8);

private var time : float;
private var elapsedTime : float;

var particlePrefab : GameObject;
var score : GameObject;

function Start () {

   time = 1.0f;
   elapsedTime = 0.0f;
   
}

function Update () {

 	elapsedTime += Time.deltaTime;
 	if(elapsedTime >= time)
 	{
 		Up();
 		elapsedTime = 0.0f;
 	}
 	
 }
 
function Up() {
 
	for(var i = 1; i < 4; i++){
	 	var randNum : int = Random.Range(1,8);
	 	arr[randNum] = 1;
	 }
	 
	for(var j = 1; j < 8; j++){
	 
		if(arr[j] == 1){
		  	GetComponent.<Animation>().Play("digda_Up");
		  	arr[j] = 0;
		  }
		else
		  	GetComponent.<Animation>().Play("digda_Idle");
	  }
 
}

function digda_Destroy(){
	GetComponent.<AudioSource>().Play();
	GetComponent.<Animation>().Play("digda_Down");
	yield WaitForSeconds(0.2);
	
	if(particlePrefab != null){
	
		Instantiate(particlePrefab, transform.position, transform.rotation);
	}
	
	score.gameObject.SendMessage("DigdaHit", 10);
	Debug.Log("두더지 맞음");
	
}
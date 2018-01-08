#pragma strict
@script RequireComponent(Score)

var skin : GUISkin;

private var scoreResult : Score;
private var state : String;

function Start () {

}

function Update () {
	scoreResult = GetComponent(Score) as Score;
}

function TimeUp() {

	state = "Time Up";
	yield WaitForSeconds(1.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "Show Score";
	while(!Input.GetButton("Fire1"))
		yield;
		
	Application.LoadLevel("title");

}

function OnGUI() {
	
	GUI.skin = skin;
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	if(state == "Time Up")
	{
		GUI.Label(Rect(sw*2/5, sh/4, sw*3/5, sh/4), "Time Up!!!", "Message");
	}else if(state == "Show Score")
	{
		var scoreText : String = "Your Score is " + scoreResult.score.ToString();
		GUI.Label(Rect(sw/5, sh/4, sw*3/5, sh/4), scoreText, "Message");
		GUI.Label(Rect(sw*3/10, sh/2, sw/5, sh/4), "Click to Exit", "Message");
	}
}
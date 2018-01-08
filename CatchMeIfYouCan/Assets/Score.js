#pragma strict

@HideInInspector

var score : int = 0;

function Start () {

}

function Update () {

}

function DigdaHit(amount : int)
{
	 score += amount;
}

function OnGUI()
{
	this.GetComponent.<GUIText>().text = "Score : " + score;
}

function TimeUp() {

	enabled = false;

}
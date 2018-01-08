#pragma strict

var labelStyle : GUIStyle;
var underLableStyle : GUIStyle;

function Start () {

}

function Update () 
{

	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("main");
	}

}

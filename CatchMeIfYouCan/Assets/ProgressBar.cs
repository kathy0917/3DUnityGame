using UnityEngine;
using System.Collections;


public class ProgressBar : MonoBehaviour {
	public UISlider slider;
	float m_time =0;
	
	void Start () {
		
	}
	
	
	void Update () {
		m_time += Time.deltaTime ;
		if (slider.sliderValue <= 1f) {
			
			slider.sliderValue -= 0.001f;
			if (slider.sliderValue <= 0.05f) {
				
				slider.sliderValue -= 1000f;
				
			}
			m_time = 0; 
		}

	}
	
} 

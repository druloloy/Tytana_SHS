
	
//wag niyo na to pansinin
		window.onload = function () { 
   		 autoChange() 
	}

	function autoChange(){
    document.getElementById("btn1").style.background = "#0b0";
    document.getElementById("front").style.filter = "none";
	}



//pati ito
	function colorChange1()
	{
		document.getElementById("btn1").style.background = "#0b0";
		document.getElementById("btn2").style.background = "#fff";
		document.getElementById("btn3").style.background = "#fff";
	}
	function colorChange2()
	{
		document.getElementById("btn1").style.background = "#fff";
		document.getElementById("btn2").style.background = "#0b0";
		document.getElementById("btn3").style.background = "#fff";
	}
	function colorChange3()
	{
		document.getElementById("btn1").style.background = "#fff";
		document.getElementById("btn2").style.background = "#fff";
		document.getElementById("btn3").style.background = "#0b0";
	}



	//ito yung function para lumabas ung mga strands
	function showModal()
	{
		document.getElementById("strands").style.display="block";

	}
	function hideModal()
	{
		document.getElementById("strands").style.display="none";
	}
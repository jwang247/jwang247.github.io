  let area1 = document.getElementById('area1');
  let area2 = document.getElementById('area2');
  let area3 = document.getElementById('area3');
  let area4 = document.getElementById('area4');
  let from = document.getElementById('from');
  let num = document.getElementById('num');
  let btn = document.getElementById('btn');
  let music=document.getElementById("myAudio");
  let FirstOrNot = false;
  let color = 0;
  
  let arrNum = [1, 5, 3, 7];
  let arr = [area1, area2, area3, area4];
  
  let playerCount = 0;                                                            
  
  let draw = function(){
	  for(let i=0; i<arr.length; i++)
	  {
		  while(arr[i].lastChild!=null)
		  {
			  arr[i].removeChild(arr[i].lastChild);
		  }
	  }
	  for(let i=0; i<arr.length; i++){
	      for(let j=0; j<arrNum[i]; j++){
	          let chess = document.createElement('img');
			  if(color % 5 === 0)
			  {
				chess.src = './chess1.png';
			  }
			  else if(color % 5 === 1)
			  {
				  chess.src = './chess.png';
			  }
			  else if(color % 5 === 2)
			  {
			  	  chess.src = './bitcoin.png';
			  }
			  else if(color % 5 === 3)
			  {
			  	  chess.src = './eth.png';
			  }
			  else if(color % 5 === 4)
			  {
			  	  chess.src = './dogecoin.png';
			  }
	          chess.style.width = '38px';
	          chess.style.height = '38px';
	  	      arr[i].appendChild(chess);
	      }
	  }
	  Arrow();
  }
  draw();
  
  let pick = function(area, subNum)
  {
	  let index = area - 1;
	  for(let i = 0; i < subNum; i++)
	  {
		  arr[index].removeChild(arr[index].lastChild);
	  }
  }
  
  let isWin = function(n1, n2, n3, n4)                                            
  {
	  if(n1 === 0 && n2 === 0 && n3 === 0 && n4 === 0)
	  {
	  	if(playerCount % 2 === 0)
		{
			alert("GPT-0 win");
			re();
			return true;
		}
		else
		{
			alert("You win!");
			re();
			return true;
		}
	  }
  }
  
  let isclick = true;
  
  btn.addEventListener('click', function() {
	  
	if(isclick){
	isclick = false;
    let n1 = arrNum[0];
    let n2 = arrNum[1];
	let n3 = arrNum[2];
	let n4 = arrNum[3];
	let area = 0;
    let subNum = parseInt(num.value);
    if (from.value === "1" && n1 >= subNum) 
	{
      arrNum[0] = n1 - subNum;
	  area = 1;
    } 
	else if (from.value === "2" && n2 >= subNum) 
	{
      arrNum[1] = n2 - subNum;
	  area = 2;
    }
	else if(from.value === "3" && n3 >= subNum)
	{
		arrNum[2] = n3 - subNum;
		area = 3;
	}
	else if(from.value === "4" && n4 >= subNum)
	{
		arrNum[3] = n4 - subNum;
		area = 4;
	}
	else if((from.value === "1" && n1 < subNum)||(from.value === "2" && n2 < subNum)||(from.value === "3" && n3 < subNum)||(from.value === "4" && n4 < subNum))
	{
		alert("There are not enough pieces left in the selected area. Please reselect!");
		isclick = true;
		return;
	}
	if(isWin(arrNum[0], arrNum[1], arrNum[2], arrNum[3]) === true)
	{
		return;
	}
	playerCount++;
	Arrow();
	pick(area, subNum);
	setTimeout(ai2, 3000);
	setTimeout(function(){
	      isclick = true;
	    }, 3000);
	}
  });
  
  let ai = function()
  {
	  let area = "0";
	  let aaa = 0;
	  let n1 = arrNum[0];
	  let n2 = arrNum[1];
	  let n3 = arrNum[2];
	  let n4 = arrNum[3];
	  if(n1 !== 0)
	  {
		  arrNum[0] = n1 - 1;
		  area = "one";
		  aaa = n1;
	  }
	  else if(n2 !== 0)
	  {
		  arrNum[1] = n2 - 1;
		  area = "two";
		  aaa = n2;
	  }
	  else if(n3 !== 0)
	  {
		  arrNum[2] = n3 - 1;
		  area = "three";
		  aaa = n3;
	  }
	  else if(n4 !== 0)
	  {
		  arrNum[3] = n4 - 1;
		  area = "four";
		  aaa = n4;
	  }
	  document.getElementById("action").innerHTML = '小王从第'+area+'区域中拿了一个,棋子由'+aaa+'个变为'+(aaa - 1)+'个';
	  if(isWin(arrNum[0], arrNum[1], arrNum[2], arrNum[3]) === true)
	  {
	  	return;
	  }
	  playerCount++;
	  pick(4, subNum);
  }
  
  let ai2 = function()
  {
	  let last = 0;
	  let areaWord;
	  let n1 = arrNum[0];
	  let n2 = arrNum[1];
	  let n3 = arrNum[2];
	  let n4 = arrNum[3];
	  
	  let area = findWin(n1, n2, n3, n4)[0];
	  let takeNum = findWin(n1, n2, n3, n4)[1];                
	  
	  if(takeNum === 0)                                        
	  {
		  area = take(n1, n2, n3, n4)[0];
		  takeNum = take(n1, n2, n3, n4)[1];
	  }
	  
	  if(area === 0)                                           
	  {
		  if(findaabbbbcccccc(n1, n2, n3 ,n4))
		  {
			  area = 4;
			  takeNum = 1;
		  }
		  else if(n1 !== 0)
		  {
		  		  area = 1;
				  takeNum = 1;
		  }
		  else if(n2 !== 0)
		  {
		  		  area = 2;
		  		  takeNum = 1;
		  }
		  else if(n3 !== 0)
		  {
		  		  area = 3;
		  		  takeNum = 1;
		  }
		  else if(n4 !== 0)
		  {
		  		  area = 4;
		  		  takeNum = 1;
		  }
	  }
	  
	  if(area === 1)
	  {
		  arrNum[0] = n1 - takeNum;
		  areaWord = "one";
		  last = n1;
	  }
	  else if(area === 2)
	  {
		  arrNum[1] = n2 - takeNum;
		  areaWord = "three";
		  last = n2;
	  }
	  else if(area === 3)
	  {
		  arrNum[2] = n3 - takeNum;
		  areaWord = "two";
		  last = n3;
	  }
	  else if(area === 4)
	  {
		  arrNum[3] = n4 - takeNum;
		  areaWord = "four";
		  last = n4;
	  }
	  
	  document.getElementById("action").innerHTML = 'GPT_0 earsed ' + takeNum + ' pieces from area ' + areaWord + ', \nthe circle changed from ' + last + ' to ' + (last - takeNum);
	  if(isWin(arrNum[0], arrNum[1], arrNum[2], arrNum[3]) === true)
	  {
	  	return;
	  }
	  playerCount++;
	  Arrow();
	  pick(area, takeNum);
  }

  
  let take = function(n1, n2, n3, n4)
  {
	  for(var i = 0; i < 4; i++)
	  		  {
	  			  let arr = [n1, n2, n3, n4];
	  			  let tem = arr[i];
	  			  for(var j = 1; j <= tem ; j++)
	  			  {
					  let arr = [n1, n2, n3, n4];
	  				  arr[i] = arr[i] - j;
	  				  if(findAny(arr))
	  				  {
	  					  return Array(i + 1, j);
	  				  }
	  			  }
	  		  }
	  				  return Array(0, 0);
  }
  
  let findWin = function(n1, n2, n3, n4){                                           //判断是否这次拿取能直接获胜，返回值是拿取的数量
	  let arr = [n1, n2, n3, n4];
	  let area = 0;
	  arr.sort((a, b) => a - b);
	  if(arr[3] === n1)
	  {
		  area = 1;
	  }
	  else if(arr[3] === n2)
	  {
		  area = 2;
	  }
	  else if(arr[3] === n3)
	  {
		  area = 3;
	  }
	  else if(arr[3] === n4)
	  {
		  area = 4;
	  }
	  
	  if(arr[0] === 0 && arr[1] === 0 && arr[2] === 0)
	  {
		  return Array(area, arr[3] - 1);
	  }
	  else if(arr[0] === 0 && arr[1] === 0 && arr[2] === 1)
	  {
		  return Array(area, arr[3]);
	  }
	  return Array(0, 0);
  }
  
  let findaabbbbcccccc = function(n1, n2 ,n3 ,n4){
	  let arr = [n1, n2, n3, n4];
	  arr.sort((a, b) => a - b);
	  if(arr[0] === 0 && arr[1] === 2 && arr[2] === 4 && arr[3] === 6)
	  {
	  		  return true;
	  }
	  return false;
  }
  
  let findAny = function(arr){
	  arr.sort((a, b) => a - b);
	  if(arr[0] === 0 && arr[1] === 1 && arr[2] === 1 && arr[3] === 1)
	  {
	  		  return true;
	  }
	  
	  if((arr[0] === arr[1] && arr[2] === arr[3])&&!(arr[0] === 1 && arr[1] === 1 && arr[2] === 1 && arr[3] === 1))                                             
	  {
		  return true;
	  }
	  
	  if(arr[0] === 0 && arr[1] === 1 && arr[2] === 2 && arr[3] === 3)                        
	  {
		  return true;
	  }
	  
	  if(arr[0] === 0 && arr[1] === 1 && arr[2] === 4 && arr[3] === 5)
	  {
	  		  return true;
	  }
	  
	  if(arr[0] === 0 && arr[1] === 2 && arr[2] === 4 && arr[3] === 6)
	  {
	  		  return true;
	  }
	  
	  if(arr[0] === 1 && arr[1] === 3 && arr[2] === 4 && arr[3] === 6)
	  {
	  		  return true;
	  }
	  return false;
  }
  
  
  let re = function(){
	  arrNum[0] = 1;
	  arrNum[1] = 5;
	  arrNum[2] = 3;
	  arrNum[3] = 7;
	  num.value = "1";
	  playerCount = 0;
	  draw();
	  document.getElementById("action").innerHTML = 'You first';
	  if(FirstOrNot === true)
	  {
		  isclick = false;
		  setTimeout(function(){isclick=true}, 3000);
		  document.getElementById("action").innerHTML = 'GPT-0 first';
		  document.getElementById("turn").innerHTML = 'Player :\nGPT_0:<-';
		  setTimeout(function(){
		  let area = 4;
		  let takeNum = 1;
		  arrNum[3] = 6;
		  document.getElementById("action").innerHTML = 'GPT_0 earsed 1 pieces from area four, \nthe circle changed from 7 to 6';
		  Arrow();
		  pick(area, takeNum);
		  }
		  , 3000);	  
	  } 
  }
  restart.addEventListener("click", re);

  function playAudio(){
    
      var audio = document.getElementById("myAudio");
   
        if(audio.paused)
	    {
			audio.play();
        }
		else
		{
			audio.pause();
		}
   }
   
   let checkFirstClick = true;
   document.addEventListener('click', function() {
	   if(checkFirstClick == true)
	   {
		    document.getElementById('myAudio').play()
			checkFirstClick = false;
	   }
   })
   
   let orderclick = true;
   function changeOrder()
   {
	   if(orderclick === true){
	   if(isclick === true){
		   orderclick = false;
	   if(FirstOrNot === true)
	   {
		   FirstOrNot = false;
	   }
	   else
	   {
		   FirstOrNot = true;
	   }
	   setTimeout(function(){
	         orderclick = true;
	       }, 3000);
	   re();
	   }
	   }
   }
   
   let colorclick = true;
   function changeColor()
   {
	   if(colorclick === true){
		   colorclick = false;
	   color++;
	   setTimeout(function(){
	         colorclick = true;
	       }, 3000);
	   re();
	   }
   }
   
   function Arrow(){	   
	   if(playerCount % 2 === 0)
	   {
		   document.getElementById("turn").innerHTML = 'Player :<-\nGPT_0:';
	   }
	   else
	   {
		   document.getElementById("turn").innerHTML = 'Player :\nGPT_0:<-';
	   }
   }
   
   
   

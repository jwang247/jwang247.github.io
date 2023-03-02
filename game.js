  let area1 = document.getElementById('area1');
  let area2 = document.getElementById('area2');
  let area3 = document.getElementById('area3');
  let area4 = document.getElementById('area4');
  let from = document.getElementById('from');
  let num = document.getElementById('num');
  let btn = document.getElementById('btn');
  let playerCount = 0;                                                            //玩家计数器（用来判断当前是谁在操作）
  
  let isWin = function(n1, n2, n3, n4)                                            //判断输赢
  {
	  if(n1 === 0 && n2 === 0 && n3 === 0 && n4 === 0)
	  {
	  	if(playerCount % 2 === 0)
		{
			alert("小王赢了");
			re();
			return true;
		}
		else
		{
			alert("你赢了");
			re();
			return true;
		}
	  }
  }
  
  btn.addEventListener('click', function() {
    let n1 = parseInt(area1.innerHTML);
    let n2 = parseInt(area2.innerHTML);
	let n3 = parseInt(area3.innerHTML);
	let n4 = parseInt(area4.innerHTML);
    let subNum = parseInt(num.value);
    if (from.value === "1" && n1 >= subNum) 
	{
      area1.innerHTML = n1 - subNum;
    } 
	else if (from.value === "2" && n2 >= subNum) 
	{
      area2.innerHTML = n2 - subNum;
    }
	else if(from.value === "3" && n3 >= subNum)
	{
		area3.innerHTML = n3 - subNum;
	}
	else if(from.value === "4" && n4 >= subNum)
	{
		area4.innerHTML = n4 - subNum;
	}
	if(isWin(parseInt(area1.innerHTML), parseInt(area2.innerHTML), parseInt(area3.innerHTML), parseInt(area4.innerHTML)) === true)
	{
		return;
	}
	playerCount++;
	setTimeout(ai, 3000);
  });
  
  let ai = function()
  {
	  let area = "0";
	  let aaa = 0;
	  let n1 = parseInt(area1.innerHTML);
	  let n2 = parseInt(area2.innerHTML);
	  let n3 = parseInt(area3.innerHTML);
	  let n4 = parseInt(area4.innerHTML);
	  if(n1 !== 0)
	  {
		  area1.innerHTML = n1 - 1;
		  area = "一";
		  aaa = n1;
	  }
	  else if(n2 !== 0)
	  {
		  area2.innerHTML = n2 - 1;
		  area = "二";
		  aaa = n2;
	  }
	  else if(n3 !== 0)
	  {
		  area3.innerHTML = n3 - 1;
		  area = "三";
		  aaa = n3;
	  }
	  else if(n4 !== 0)
	  {
		  area4.innerHTML = n4 - 1;
		  area = "四";
		  aaa = n4;
	  }
	  document.getElementById("action").innerHTML = '小王从第'+area+'区域中拿了一个,棋子由'+aaa+'个变为'+(aaa - 1)+'个'+playerCount;
	  if(isWin(parseInt(area1.innerHTML), parseInt(area2.innerHTML), parseInt(area3.innerHTML), parseInt(area4.innerHTML)) === true)
	  {
	  	return;
	  }
	  playerCount++;
  }
  
  
  let re = function(){
	  area1.innerHTML = "1";
	  area2.innerHTML = "3";
	  area3.innerHTML = "5";
	  area4.innerHTML = "7";
	  num.value = "1";
	  playerCount = 0;
	  document.getElementById("action").innerHTML = '到您了';
  }
  restart.addEventListener("click", re);
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
	setTimeout(ai2, 3000);
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
	  document.getElementById("action").innerHTML = '小王从第'+area+'区域中拿了一个,棋子由'+aaa+'个变为'+(aaa - 1)+'个';
	  if(isWin(parseInt(area1.innerHTML), parseInt(area2.innerHTML), parseInt(area3.innerHTML), parseInt(area4.innerHTML)) === true)
	  {
	  	return;
	  }
	  playerCount++;
  }
  
  let ai2 = function()
  {
	  let last = 0;
	  let areaWord;
	  let n1 = parseInt(area1.innerHTML);
	  let n2 = parseInt(area2.innerHTML);
	  let n3 = parseInt(area3.innerHTML);
	  let n4 = parseInt(area4.innerHTML);
	  
	  let area = findWin(n1, n2, n3, n4)[0];
	  let takeNum = findWin(n1, n2, n3, n4)[1];                //判断能否拿了直接赢
	  
	  if(takeNum === 0)                                        //判断能否拿了达成秘籍
	  {
		  area = take(n1, n2, n3, n4)[0];
		  takeNum = take(n1, n2, n3, n4)[1];
	  }
	  
	  if(area === 0)                                            //没有合适的拿取对象，随便拿一个
	  {
		  if(n1 !== 0)
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
		  area1.innerHTML = n1 - takeNum;
		  areaWord = "一";
		  last = n1;
	  }
	  else if(area === 2)
	  {
		  area2.innerHTML = n2 - takeNum;
		  areaWord = "二";
		  last = n2;
	  }
	  else if(area === 3)
	  {
		  area3.innerHTML = n3 - takeNum;
		  areaWord = "三";
		  last = n3;
	  }
	  else if(area === 4)
	  {
		  area4.innerHTML = n4 - takeNum;
		  areaWord = "四";
		  last = n4;
	  }
	  
	  document.getElementById("action").innerHTML = '小王从第'+areaWord+'区域中拿了' + takeNum +'个,棋子由'+last+'个变为'+(last - takeNum)+'个';
	  if(isWin(parseInt(area1.innerHTML), parseInt(area2.innerHTML), parseInt(area3.innerHTML), parseInt(area4.innerHTML)) === true)
	  {
	  	return;
	  }
	  playerCount++;
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
  
  let findAny = function(arr){
	  arr.sort((a, b) => a - b);
	  if(arr[0] === 0 && arr[1] === 1 && arr[2] === 1 && arr[3] === 1)
	  {
	  		  return true;
	  }
	  
	  if(arr[0] === arr[1] && arr[2] === arr[3])                                             
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
	  area1.innerHTML = "1";
	  area2.innerHTML = "3";
	  area3.innerHTML = "5";
	  area4.innerHTML = "7";
	  num.value = "1";
	  playerCount = 0;
	  document.getElementById("action").innerHTML = '到您了';
  }
  restart.addEventListener("click", re);
'use strict';
var n=process.argv[2];
var m=process.argv[3];

function paixu(n,m)
{
	var arr = new Array();
	for(var i=0;i<n;i++){   
	   var num=parseInt(Math.random()*m,10) //10表示十进制
	     for(var j=0;j<i;j++)
	     {     
		      if(num === arr[i])
		      {
		             j--;       //重复则重新循环     
		             break; 
		       }
	      } 
	      if(j === i) //说明不重复
	      {
	      	arr[i]=num;
	      }
	}
	return arr;
	console.log(arr);
}

module.exports = paixu; //函数paixu作为模块的输出暴露出去


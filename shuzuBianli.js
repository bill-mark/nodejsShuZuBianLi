'use strict';
var arr=process.argv;
var n=arr.length;
var m=functio(arr[i]){
  m=arr[0];	
  for(var i=1;i<arr.length;i++){
  	if(m<arr[i])
           m=arr[i];
  }
}

var arr2[0]=arr[0];
for(var j=0;j<n;j++){   
   var num=parseInt(Math.random()*m,10)+1 //10表示十进制,+1则包含m
     for(k=0;k<j;k++){     
      if(num === arr2[j]){
             j--;
             break; 
       }
     } 
      if(k === j) //说明不重复
      {
      	arr2[j]=num;
      }
}

console.log('arr2');


module.export=arr2[];
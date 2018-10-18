# JavaScript
教程： http://www.w3school.com.cn/js/js_howto.asp
1 网页中引用外部的JavaScript文件，
外部 JavaScript 文件的文件扩展名是 .js。
js文件内容：纯js代码，没有script，body，head
document.write("www.dreamdu.com");
document.write("梦之都");
function jsTest(){   
/* 该函数可以在 其他的 JS 文件中直接访问;
   访问方式与定义在同个文件中的访问方式相同，eg：jsTest();  
   但需记得在其他 JS 引用时，必须将该文件放在引用它的文件前面。比如：dreamdu2.js 中使用了dreamdu.js 中的 jsTest() 函数，则必须先加载 dreamdu.js（放上面），后加载 dreamdu2.js（放下面）*/
　　alert("测试自定义 JS 的 function 部分");
   console.log("测试自定义 JS 的 function 部分");
}
2 js代码中的方法名不能带有空格
3 
您可以在字符串中使用引号，只要不匹配包围字符串的引号即可：
var answer="Nice to meet you!";
var answer="He is called 'Bill'";
var answer='He is called "Bill"';
4
布尔（逻辑）只能有两个值：true 或 false。
5在 JavaScript 函数内部声明的变量（使用 var）是局部变量
如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。
6 y = 5
++	累加	x=++y	x=6
--	递减	x=--y	x=4
==	等于	x==8 为 false
===	全等（值和类型）	x===5 为 true；x==="5" 为 false
== 只比较值 ，数字和字符串可以一样1 和"1" ,    === 比较值和类型
7直接在标签里面 src="c.jpg"//同一个文件夹下的c.jpg
每一个../表示向上一个节点（文件夹节点）

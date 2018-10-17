document.write("www.dreamdu.com");
document.write("梦之都");
function jsTest(){   
/* 该函数可以在 其他的 JS 文件中直接访问;
   访问方式与定义在同个文件中的访问方式相同，eg：jsTest();  
   但需记得在其他 JS 引用时，必须将该文件放在引用它的文件前面。比如：dreamdu2.js 中使用了dreamdu.js 中的 jsTest() 函数，则必须先加载 dreamdu.js（放上面），后加载 dreamdu2.js（放下面）*/
　　alert("测试自定义 JS 的 function 部分");
   console.log("测试自定义 JS 的 function 部分");
}
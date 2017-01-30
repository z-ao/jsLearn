## 参数传递
函数的参数都是按值传递,就是把函数外部的值,复制给函数内部的参数.
```
//基础类型
function add(num){
  num += 10;
  return num;
}

var count = 20;
var result = add(count);

alert(count) //20
alert(result) //30

//引用类型
function setName(obj){
  obj.name = "ziao";
  obj = new Object();
  obj.name = "lea";
}

var person = new Object();
setName(person);
alert(person.name); //ziao
```
传递方法有两种,基本类型传递和引用类型传递.
### 变量是基本类型就按基本类型传递.会把值复制给函数的局部变量.
### 变量是引用类型就按引用类型传递.会把值的地址复制给函数的局部变量.而局部变量的变化会反应给函数外部.
## 注意
### 函数重写变量时,这个变量引用的就是一个局部对象,而局部对象会在函数执行后被销毁.

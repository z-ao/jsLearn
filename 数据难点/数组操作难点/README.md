## 栈方法
栈是种后进先出的数据结构.
### 推入
从前面推入-unshift()
从后面推入-push()
### 弹出
从前面弹出-shift()
从后面弹出-pop()

## 操作方法
slice()
有一个到二个参数,指明返回项起始与结束位置.

```
var num = [1,2,3,4];
num1 = num.slice(1); //2,3,4
num2 = num.slice(1,3); //2.3
```
splice()
可是最强的数组方法,以删除,插入,替换.

```
var num = [1,2,3,4];
num1 = num.splice(0,1); //  num1 = [1]  num = [2,3,4] 删除
num2 = num.splice(0,0,1); // num2 = undefined num = [1,2,3,4] 插入
num3 = num.splice(0,4,3,2,1) // num3 = [1,2,3,4] num = [3,2,1] 替换
```

## 迭代方法
every-对数组中的每一项运行给定函数,如果函数的每项都返回true，就返回true.
some-对数组中的每一项运行给定函数,如果函数的其中一项都返回true，就返回true.

```
var nums = [1,2,3,4];
var everyNum = nums.every(function(item){
  return (item > 2);
}; // false

var someyNum = nums.some(function(item){
  return (item > 2);
}; // true
```
学习数组迭代可以优化数组的任务处理

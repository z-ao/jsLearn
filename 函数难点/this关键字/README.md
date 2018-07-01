# this关键字
this是个常用的关键字,它被自动生成在函数作用域里.并代表函数执行环境的上下文.   
如果在开发中,不了解this绑定在那个对象上,会很容易出现bug.   

## this绑定的规则
### 默认绑定
当函数独立使用,(没有对象属性的引用进行调用).   
this会默认绑定在**全局对象**或**undefined**.

```
var log = function () {
    console.log(this)
}
log() //window

使用严格模式
"use strict";
var log = function () {
    console.log(this)
}
log() //undefined
```

### 隐形绑定
当函数被某个对象的属性引用后调用.   
this会绑定在该对象上.

```
var obj = {
    log: function () {
        console.log(this);
    }
}
obj.log() //obj
```

### 显性绑定
当函数调用时,指定函数的this绑定对象.   
涉及的方法有**call**、**apply**和**bind**.   

```
var log = function () {
    console.log(this)
}
var target = {}

var bindLog = log.bind(target)
bindLog() //target
log.call(target) //target
log.apply(target) //target
```

> 显性绑定的优先级比隐形绑定高

```
function log() {
	console.log(this.name)
}

var visibleObj = {
	name: 'visible'
}

var hideObj = {
	name: 'hide',
	log: log
}

hideObj.log.call(visibleObj) //visible
```

### new绑定
当实例一个构造函数时.   
构造函数的this会绑定在实例上.

```
function construct(tag) {
    this.tag = tag;
}

var instance = new construct('instance')
console.log(instance.tag) //instance
```
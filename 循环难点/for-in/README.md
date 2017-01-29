## for-in

for-in函数是精准的迭代语句,可用来枚举对象属性.
```
for(var propName in window){
  document.write(propName);
}
```
与for语句类似,这里的var不是必须的.
### 注意
#### 在对象属性没有顺序.通过for-in循环顺序为不可预测的.当变量的值为null,undefined,for-in会抛出错误.在使用要确认对象的值.

## 转换数值
可以把非数值转换为数值函数:Number().把字符转换为数值函数:parseInt(),parseFloat().
### Number()
```
Number("Hello Wrold!"); //NaN
Number("); //0
Number("000011"); //11
Number("true"); //1
```
Number()函数各种数据类型转换为数值过程<strong>复杂</strong>而且<strong>不合理</strong>.<br/>
所以优先用parseInt()方法和parseFloat()方法.

### parseInt()
函数转换是“整数”字符串,逄是看其是否符合数值模式.也就是说小数点不是有效的数字字符.
#### 第一个参数是转换的值,第二个参数是基数--即多少进制.默认为十进制
```
parseInt("123blue") // 123
parseInt("") // NaN
parseInt("123") // 123
parseInt("123.222") // 123
parseInt("0xf") // 15
```
### parseFloat()
函数转换是字符串,逄是看其是否符合数值模式.
#### 第一个参数是转换的值,第二个参数是基数--即多少进制.默认为十进制
```
parseFloat("123blue") //123
parseFloat("") //NaN
parseFloat("123") //123
parseFloat("123.222") //123.222
parseFloat("0xf") //15
```

### 数值模式
它会忽略字符串前面的空格,直到找到第一个非空个字符.<br/>
如果第一个字符不是数字字符或者负号.就会返回NaN.如果第一个字符是数字字符,会继续解析下个字符

### 注意
#### Number()函数各种数据类型转换为数值过程<strong>复杂</strong>而且<strong>不合理</strong>.所以优先用parseInt()方法和parseFloat()方法.
#### 使用时不指定基数意味以为让函数决定如何解析输入的字符串,因此为了避免错误的解析,在什么的情况下明确指定基数.

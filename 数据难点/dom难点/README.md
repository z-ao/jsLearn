## 获取节点
### 获取元素的常见方法有
   getElementById 
   getElementsByTagName
   getElementsByClassName
   getElementsByName
   

### 获取元素的较常见方法
    querySelector()
    querySelectorAll()
```
      <ul>
          <li>that</li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      
      //获取that文本的节点
      querySelector('ul li');
      querySelectorAll('ul li')[0];
 ```
 函数querySelector-querySelectorAll区别是querySelector是获得第一个节点.querySelectorAll获得匹配节点对象.
   
### 获取元素不常见方法
   document.anchors  //文档中所有带name特性的<a>元素
   document.applets  //文档中所有<applet>元素
   document.forms   //文档中所有<form>元素
   document.images   //文档中所有<img>元素
   document.links   //文档中所有带href特性的<a>元素
#### 注意使用document开始,否则会返回undefined.

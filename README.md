# miniComponents

### 提供一种简单的解决方案
在父组件中json文件中引入
````
{
  "usingComponents": {
    "select": "/components/select/select"
  }
}
````
接受array的文件结构
````
 array: [
      {
        0: '复合状态',
        1: '已复合',
        2: '待复合'
      },
      {
        0: '结算状态',
        1: '已结算',
        2: '待结算'
      },
      {
        0: '结算状态',
        1: '已结算',
        2: '待结算'
      }
    ]
````
在wxml中引入
````
  <select 
  statusObject="{{array}}" 
  bindselect='bindtap'>
  </select>
````
在事件中通过e.detail接受参数，可以发送请求。
![](https://mmbiz.qpic.cn/mmbiz_png/vTMrngKwQicMqVpicS3z7HCU5iaxy8ZvsibXEMWnq3PQ2BINTVib6oTYshLJhMTECibepQ00f4IxHvUk2jPibgqaoyzCA/0?wx_fmt=png)
![](https://mmbiz.qpic.cn/mmbiz_png/vTMrngKwQicMqVpicS3z7HCU5iaxy8ZvsibXVLEhnSxqeTsIQdS1mQYXpQJu6iaHCicxNjW4AwOFf57kqegIsxdjq4iag/0?wx_fmt=png)

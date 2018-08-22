Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    statusObject: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    slectTop: {
      type: Number,
      value: 100,
      observer: function(newVal, oldVal, changedPath) {
        // this._getRect()
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    justifyContent: {
      type: String,
      value: 'space-between'
    }
  },
  data: {
    iheader: null,
    slectBombHeight: 0,
    optionList: [],
    showOptions: false,
    ioption: null,
    objectRage: {}
  },
  methods: {
    _getRect: function() {
      const self = this;
      const showOptions = this.data.showOptions;
      if (showOptions) {
        wx.createSelectorQuery().in(this).select('#select').boundingClientRect(function(rect) {
          wx.getSystemInfo({
            success: function(res) {
              self.setData({
                slectBombHeight: res.windowHeight - rect.top
              })
            }
          })
        }).exec();
      }
    },
    _bindTabClick(e) {
      // 判断展开
      let iheader = this.data.iheader;
      let showOptions = this.data.showOptions;
      let optionList = this.data.optionList;
      const index = e.currentTarget.dataset.index;
      let ioption = this.data.ioption;
      const objectRage = this.data.objectRage;
      if (iheader == index) {
        iheader = null;
        showOptions = false;
        ioption = null;
      } else {
        iheader = index;
        showOptions = true;
        ioption = objectRage[iheader] || null;
      }
      this.setData({
        iheader,
        showOptions,
        optionList,
        ioption
      })
      this._getRect()
    },
    onTap(e) {
      const i = e.currentTarget.dataset.index;
      let ioption = this.data.ioption;
      ioption = i;
      let objectRage = this.data.objectRage;
      objectRage[this.data.iheader] = ioption;
      this.setData({
        ioption,
        objectRage,
      })
      //处理外部事件
      var myEventDetail = objectRage // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('select', myEventDetail, myEventOption)
    },
  }
})
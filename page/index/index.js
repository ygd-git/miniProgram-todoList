// page/index/index.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaValue: '',
    type: 'all',
    todoItems: [

    ]
  },
  formConfirm: function (e) {
    console.log('confirm');
  },


  textareaInput: function (e) {
    this.setData({
      textareaValue: e.detail.value
    })
  },

  tapAddOneTodo: function () {
    // console.log('添加一个代办项,其id为:', app.addTodoItem());
    let item = this.data.todoItems;
    let newItem = {
      value: app.addTodoItem(),
      name: this.data.textareaValue,
      checked: false,
      finished: false,
      finishedDate: Date.now()
    };

    // console.log('add');
    item.push(newItem)
    this.setData({
      todoItems: item,
      textareaValue: ''
    })
    // console.log(this.data);
    // console.log(app.addTodoItem(), this.data.textareaValue);
  },

  /**
  * 确认完成,可以回收
  */
  tapConfirmFinish: function () {
    wx.showModal({
      title: '确认回收所有已完成的代办项?',
      content: '已回收的可以在已做菜单查看',
      success: function (e) {
        if (e.confirm) {
          
        } else {
          console.log('取消')
        }
      },
    })
  },

  checkboxChange: function(e){
    let todoItems = this.data.todoItems,
        chooseItems = e.detail.value;

    // console.log(e.detail)
    // console.log(chooseItems.includes('1001'));
    // return;
    todoItems.forEach(item=>{
      // console.log(chooseItems, item.value+'');
      // console.log(chooseItems.includes(item.value));
      item.checked = chooseItems.includes(item.value+'');      
    });

    console.log(todoItems)

    this.setData({
      todoItems
    })

    // console.log(todoItems);
  },

  tapType: function (e) {
    // 这里三个分类按钮都调用了这个方法 根据id区分
    let id = e.currentTarget.id,
      type = id.slice(id.lastIndexOf('-') + 1);
    // let items = this.data.todoItems.filter((x) => !x.finished);

    this.setData({
      type
    })
    console.log(this.data.type);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('index', this.data.type);
    // let todoItems = app.globalData.todoItems;

    // this.setData({
    //   todoItems: todoItems.filter((x) => !x.finished)
    // })
    // console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
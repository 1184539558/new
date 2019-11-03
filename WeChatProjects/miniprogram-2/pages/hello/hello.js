// pages/hello/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:10,
    user:{id : 1 ,name: "张三",sex : "男" },
    test:[
      {id : 1 ,name: "张三",sex : "男" },
      {id : 2 ,name: "张三",sex : "男" },
      {id : 3 ,name: "张三",sex : "男" },
      {id : 4 ,name: "张三",sex : "男" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
 
    console.log(111);
      setTimeout ( ()=>{
        this.setData({
          age:60
        });
      },3000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log(333);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log(222);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log(555);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log(4444);
  }


})
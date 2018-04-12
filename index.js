Page({
    data: {
      processData: [
        {
          name: '预约',
          start: '#fff',
          end: '#aaa',
          icon: 'images/process1.png'
        },
        {
          name: '已接单',
          start: '#aaa',
          end: '#aaa',
          icon: 'images/process1.png'
        },
        {
          name: '开始维修',
          start: '#aaa',
          end: '#aaa',
          icon: 'images/process1.png'
        },
        {
          name: '维修结束',
          start: '#aaa',
          end: '#aaa',
          icon: 'images/process1.png'
        },
        {
          name: '已确认',
          start: '#aaa',
          end: '#fff',
          icon: 'images/process1.png'
        }
      ],
      progress: [
        {
          word: "进度1",
          state: 1
        },{
          word: "进度2",
          state: 1
        },{
          word: "进度3",
          state: 1
        },{
          word: "进度4",
          state: 0
        }, {
          word: "进度5",
          state: 0
        }
      ]
    },
    onLoad: function (options) {
      this.setPeocessIcon()
    },
    setPeocessIcon: function () {
      var index = 0 //记录状态为1的最后的位置
      var processArr = this.data.processData
      for (var i = 0; i < this.data.progress.length; i++) {
        var item = this.data.progress[i]
        processArr[i].name = item.word
        if (item.state == 1) {
          index = i
          processArr[i].icon = "images/process3.png"
          processArr[i].start = "#45B2FE"
          processArr[i].end = "#45B2FE"
        } else {
          processArr[i].icon = "images/process1.png"
          processArr[i].start = "#aaa"
          processArr[i].end = "#aaa"
        }
      }
      processArr[index].icon = "images/process2.png"
      processArr[index].end = "#aaa"
      processArr[0].start = "#fff"
      processArr[this.data.progress.length - 1].end = "#fff"
      this.setData({
        processData: processArr
      })
    },
});
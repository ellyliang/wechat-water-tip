const app = getApp();

let content = [
    '经过一夜的睡眠，身体缺水，起床先喝250毫升水，帮助肾脏及肝脏解毒。',
    '从起床到办公室，身体无形中出现脱水现象，给自己一杯至少250毫升的水。',
    '工作一段时间后，再给自己一天里的第三杯水，补充流失的水分，放松紧张的工作情绪。',
    '用完午餐半小时后，喝一些水，促进消化。',
    '喝一杯健康矿泉水提神。',
    '下班前，再喝一杯水，增加饱足感，吃晚餐时自然不会暴饮暴食。',
    '散步后的一杯水，补充水分、放松身心。',
    '睡前1至半小时再喝上一杯水，不过别喝太多，以免起夜影响睡眠质量。'
];

Page({
  data:{
    actionSheetHidden: true,
    actionButtonText: '选择了解最佳喝水时间',
    actionSheetItems: ['06:30 AM', '08:00 AM', '10:00 AM', '12:50 PM', '15:00 PM', '17:30 PM', '19:00 PM', '22:00 PM'],
    actionTimeContent: ''
  },
  actionSheetTap(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  actionSheetChange(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  bindItemTap(e){
    this.setData({
        actionSheetHidden: true,
        actionButtonText: e.currentTarget.dataset.name,
        actionTimeContent: content[e.currentTarget.id]
    });
  }
});
const app = getApp();
let waterTime = ['06:30', '08:00', '10:00', '12:50', '15:00', '20:50', '21: 00', '22:00'];

Page({
  data:{
    src: 'http://7xkinp.com1.z0.glb.clouddn.com/f1a0749543ede8bde265844da588bec0.mp3',
    time: '',
    aixinHeight: 100
  },
  onLoad(options) {
    // 当前时间
    let i = 0;
    setInterval(() => {
      let getDate = new Date();
      let getHours = getDate.getHours();
      let getMinutes = getDate.getMinutes();
      let getSeconds = getDate.getSeconds();

      if(getHours < 10) {
        getHours = '0' + getHours;
      }
      if(getMinutes < 10) {
        getMinutes = '0' + getMinutes;
      }
      if(getSeconds < 10) {
        getSeconds = '0' + getSeconds;
      }
      this.setData({
        time: getHours +':'+ getMinutes +':'+ getSeconds
      });

      // 匹配喝水时间
      waterTime.forEach((element, index, array) => {
        let waterHour = element.split(':')[0];
        let waterMinute = element.split(':')[1];

        if((+getHours === +waterHour)) {
            this.setData({
              aixinHeight: 100 - (100 / (8 - index))
            });
        }

        if(+getHours === +waterHour && +getMinutes === +waterMinute) {
          // 提示铃声
            this.setData({
              action: {
                method: 'play',
                data: 1
              }
            });
        }

        // 当为凌晨的时候，置为默认
        if(waterHour == '00') {
          i = 0;
        }
      });
    }, 1000);
  }
})
//app.js
App({
	onLaunch() {
		console.log('初始化小程序');
	},

	onShow() {
		console.log('启动小程序or后台进入前台展示，触发onShow');
	},
	
	onHide() {
		console.log('小程序从前台进入后台，触发onHide');
	}
});
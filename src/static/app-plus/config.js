const PRO_APPID = "开发环境appid", // 开发环境appid
	DEV_APPID = "生产环境appid", // 生产环境appid
	HB_APPID = "HBuilder"; // HBuilder调试基座
// plus是app才有的变量
const APP_ID = plus.runtime.appid;
// 测试环境的配置
let config = {
	BASE_URL: 'http://dev/url',
	CURRENT_MODE: 'dev',
	MODE_CN: '测试环境APP'
}

// HBuilder调试基座
if (APP_ID === HB_APPID) {
	config.ALERT_MSG = "您正在使用HBuilder调试基座，请切换至本系统开发环境调试基座，如有技术问题，请咨询工号124546";
	config.CONFIG_PLATFORM= 'HBuilder_APP'
}
// 开发环境
if (APP_ID === DEV_APPID) {
	config.ALERT_MSG = "您正在使用本系统开发环境调试基座，所有数据和业务仅为测试使用，不会产生实际业务影响，如要办理实际业务，请在应用市场下载本app。"
	config.CONFIG_PLATFORM = 'DEV_APP'
}
if (APP_ID === PRO_APPID) {
	// 生产环境的配置
	config = {
		BASE_URL: 'https://product/url',
		CURRENT_MODE: 'product',
		CONFIG_PLATFORM: 'APP',
		MODE_CN: '生产环境APP'

	}
}

export const envConfig = {
	APP_ID,
	...config
}
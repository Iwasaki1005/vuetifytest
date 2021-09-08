
//module.exports = {
//	configureWebpack: {
//	  devServer: {
//		watchOptions: {
//		  poll: true
//		}
//	  }
//	},
//}
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	  ? '/weather-app/'   //任意
	  : '/'
}
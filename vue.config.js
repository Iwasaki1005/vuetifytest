
module.exports = {
	configureWebpack: {
	  devServer: {
		watchOptions: {
		  poll: true
		}
	  }
	},
	//
	publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-app/'   //任意
    : '/'
}

/**
 * Title: personal defined common functions libary
 * Author: Z.Ch.
 * Version: 1.1.3.18
 */

/** 控制台打印 */
const Log = (info, v=null) => {

	const logI = "color:#0f0;";
	const logD = "color:#f33;";
	const logM = "color:#33f;";
	const logE = "color:#f90;";

	/** 控制台打印内部使用方法，第一个参数是打印的内容，必须。 */
	const log = (info, prefix, v, css, type="log") => {
		v = v && "【"+prefix+"-\""+v+"\"】 如下：" || "【"+prefix+"】 如下：";
		console.log("%c"+v, css);
		if(typeof info == "object" || typeof info == "function") {
			console[type](info);
		} else {
			console[type]("%c"+info, css);
		}
		console.log("");
	}

	/** 打印一般信息 绿色 */
	Log.I = function(info, v) {
		log(info, "信息", v, logI);
	},
	/** 打印调试信息 红色 */
	Log.D = function(debug, v) {
		log(debug, "调试", v, logD, "error");
	},
	/** 打印监视变量 蓝色 */
	Log.M = function(monitor, v) {
		log(monitor, "监视", v, logM, "info");
	},
	/** 打印边界信息（主要用于边界的监视变量） 橙色 */
	Log.E = function(edge, v) {
		log(edge, "边界", v, logE, "warn");
	}

	Log.I(info, v);
}


/** 获取日期时间 */
const dateTime = () => {
	let currentDate = new Date();
	let year = currentDate.getFullYear();
	let month = currentDate.getMonth()+1;
	let date = currentDate.getDate();
	let day = currentDate.getDay();
	let hour = currentDate.getHours();
	let minute = currentDate.getMinutes();
	let second = currentDate.getSeconds();
	let days = ["日", "一", "二", "三", "四", "五", "六"];
	month = month>9?month.toString():'0'+month;
	date = date>9?date.toString():'0'+date;
	hour = hour>9?hour.toString():'0'+hour;
	minute = minute>9?minute.toString():'0'+minute;
	second = second>9?second.toString():'0'+second;
	return {
		year: year,
		month: month,
		date: date,
		day: '星期'+days[day],
		hour: hour,
		minute: minute,
		second: second,
		millsecond: currentDate.getTime(),
		fulldate: year+'年'+month+'月'+date+'日',
		fulltime: hour+':'+minute+':'+second,
		datetime: currentDate.toLocaleString(),
		dateNo: year.toString().substring(2, 4)+month+date
	};
}

/**
		 * 封装通用定时器
		 * @param  {Function}   foo    【必选】定时器要定时执行的主要函数
		 * @param  {integer}   loop    【必选】整数，间隔执行的毫秒数
		 * @param  {任意类型}   args   【可选】可选的任意类型参数，传递以供定时器主函数foo和回调函数callback中使用
		 * @param  {Function} callback 【可选】可选的回调函数，在定时器end之后执行
		 * @return {object timer}       返回封装好的定时器实例，包含start和end两个方法，用于开始定时器和停止定时器
		 * 说明：后两个可选参数可任选一个，同时使用时也不必注意前后顺序
		 */
// const timer = (foo, loop, args, callback) => {
// 	loop = _.isNumber(loop) && !_.isNaN(loop) && loop || 1000;
// 	let temp = callback;
// 	callback = _.isFunction(args) && args || (!!callback && callback || undefined);
// 	args = !_.isFunction(args) && args || (!_.isFunction(temp) && !!temp && temp || {});
// 	let timer = {};
// 	return {
// 		start: function() {
// 			timer = setInterval(function() {foo(args);}, loop);
// 		},
// 		end: function() {
// 			clearInterval(timer);
// 			callback && callback(args);
// 		}
// 	};
// }

export { Log, dateTime };
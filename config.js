/**
 * Created by shawn on 2014/9/8.
 */
var CHINA = [
	{
		name: "夏",
		start: -2029,
		end: -1559,
		child: []
	},{
		name: "商",
		start: -1559,
		end: -1046,
		child: []
	},{
		name: "西周",
		start: -1046,
		end: -771,
		child: []
	},{
		name: "东周",
		start: -770,
		end: -256,
		child: [
			{
				name: "春秋",
				start: -770,
				end: -476,
				child: []
			},{
				name: "战国",
				start: -475,
				end: -221,
				child: []
			}
		]
	},{
		name: "秦",
		start: -221,
		end: -207,
		child: []
	},{
		name: "西楚",
		start: -206,
		end: -202,
		child: []
	},{
		name: "汉",
		start: -202,
		end: 220,
		child: [
			{
				name: "西汉",
				start: -202,
				end: 8,
				child: []
			},{
				name: "新朝",
				start: 8,
				end: 23,
				child: []
			},{
				name: "东汉",
				start: 25,
				end: 220,
				child: []
			}
		]
	},{
		name: "三国",
		start: 220,
		end: 280,
		child: []
	},{
		name: "晋",
		start: 265,
		end: 420,
		child: [
			{
				name: "西晋",
				start: 265,
				end: 316,
				child: []
			},{
				name: "东晋",
				start: 317,
				end: 420,
				child: []
			}
		]
	},/*{
		name: "十六国",
		start: 304,
		end: 439,
		child: []
	},*/{
		name: "南北朝",
		start: 420,
		end: 589,
		child: []
	},{
		name: "隋",
		start: 581,
		end: 619,
		child: []
	},{
		name: "唐",
		start: 618,
		end: 907,
		child: []
	},{
		name: "五代十国",
		start: 891,
		end: 979,
		child: []
	},{
		name: "宋",
		start: 960,
		end: 1279,
		child: [
			{
				name: "北宋",
				start: 960,
				end: 1127,
				child: []
			},{
				name: "南宋",
				start: 1127,
				end: 1279,
				child: []
			}
		]
	},/*{
		name: "辽",
		start: 916,
		end: 1125,
		child: []
	},{
		name: "西夏",
		start: 1038,
		end: 1227,
		child: []
	},{
		name: "金",
		start: 1115,
		end: 1234,
		child: []
	},*/{
		name: "元",
		start: 1271,
		end: 1368,
		child: []
	},{
		name: "明",
		start: 1368,
		end: 1644,
		child: []
	},{
		name: "清",
		start: 1636,
		end: 1912,
		child: []
	},{
		name: "中华民国",
		start: 1912,
		end: 1949,
		child: []
	},{
		name: "中华人民共和国",
		start: 1949,
		end: 2014,
		child: []
	}
];

var CHINA_EVENTS = [
	{
		year: -1500,
		info: "甲骨文"
	},{
		year: -221,
		info: "万里长城"
	},{
		year: -591,
		info: "老子"
	},{
		year: -571,
		info: "孔子"
	},{
		year: 126,
		info: "道教开始形成"
	},{
		year: 674,
		info: "武则天登基"
	}
];

var JAPAN = [
	/*{
		name: "绳文时代",
		start: -2500,
		end: -400,
		child: []
	},*/{
		name: "弥生时代",
		start: -400,
		end: 250,
		child: []
	},{
		name: "大和时代",
		start: 250,
		end: 710,
		child: [
			{
				name: "古坟时代",
				start: 250,
				end: 538,
				child: []
			},{
				name: "飞鸟时代",
				start: 538,
				end: 710,
				child: []
			}
		]
	},{
		name: "奈良时代",
		start: 710,
		end: 794,
		child: []
	},{
		name: "平安时代",
		start: 794,
		end: 1185,
		child: []
	},{
		name: "镰仓时代",
		start: 1185,
		end: 1333,
		child: []
	},{
		name: "建武新政",
		start: 1333,
		end: 1336,
		child: []
	},{
		name: "室町时代",
		start: 1336,
		end: 1573,
		child: [
			{
				name: "南北朝",
				start: 1336,
				end: 1392,
				child: []
			},{
				name: "战国",
				start: 1467,
				end: 1573,
				child: []
			}
		]
	},{
		name: "安土桃山时代",
		start: 1568,
		end: 1603,
		child: []
	},{
		name: "江户时代",
		start: 1603,
		end: 1868,
		child: []
	},{
		name: "明治时代",
		start: 1868,
		end: 1912,
		child: []
	},{
		name: "大正时代",
		start: 1912,
		end: 1926,
		child: []
	},{
		name: "昭和时代",
		start: 1926,
		end: 1989,
		child: []
	},{
		name: "平成时代",
		start: 1989,
		end: 2014,
		child: []
	}
];

var JAPAN_EVENTS = [
	{
		year: -239,
		info: "卑弥呼"
	},{
		year: 574,
		info: "圣德太子"
	},{
		year: 1192,
		info: "幕府统治开始"
	},{
		year: 1394,
		info: "一休和尚"
	},{
		year: 1543,
		info: "德川家康"
	},{
		year: 1868,
		info: "明治维新"
	}
];

var INDIA = [
	{
		name: "哈拉帕文化时期",
		start: -2500,
		end: -1500,
		child: []
	},{
		name: "吠陀时期",
		start: -1500,
		end: -700,
		child: []
	},{
		name: "恒河流域列国",
		start: -700,
		end: -400,
		child: []
	},{
		name: "孔雀王朝",
		start: -322,
		end: -185,
		child: []
	},{
		name: "外族入侵（贵霜王朝）",
		start: -150,
		end: 300,
		child: []
	},{
		name: "笈多王朝",
		start: 320,
		end: 600,
		child: []
	},{
		name: "戒日王朝",
		start: 606,
		end: 647,
		child: []
	},{
		name: "阿拉伯入侵",
		start: 700,
		end: 1200,
		child: []
	},{
		name: "德里苏丹王朝",
		start: 1206,
		end: 1526,
		child: []
	},{
		name: "莫卧儿王朝",
		start: 1526,
		end: 1757,
		child: []
	},{
		name: "英国统治",
		start: 1757,
		end: 1947,
		child: []
	},{
		name: "印度共和国",
		start: 1950,
		end: 2014,
		child: []
	}
];

var INDIA_EVENTS = [
	{
		year: -623,
		info: "释迦摩尼"
	},{
		year: -273,
		info: "阿育王"
	},{
		year: 1869,
		info: "甘地"
	}
];

var RUSSIA = [
	{
		name: "留里克王朝",
		start: 862,
		end: 1598,
		child: []
	},{
		name: "大动乱时期",
		start: 1598,
		end: 1613,
		child: []
	},{
		name: "罗曼诺夫王朝",
		start: 1613,
		end: 1917,
		child: []
	},{
		name: "苏维埃时期",
		start: 1917,
		end: 1991,
		child: []
	},{
		name: "新俄罗斯",
		start: 1991,
		end: 2014,
		child: []
	}
];

var RUSSIA_EVENTS = [
	{
		year: 1729,
		info: "叶卡捷琳娜二世"
	}
];

var EGYPT = [
	{
		name: "前王朝时期",
		start: -4000,
		end: -3100,
		child: [
			{
				name: "阿姆拉特时期",
				start: -4000,
				end: -3500,
				child: []
			},{
				name: "格尔塞时期",
				start: -3500,
				end: -3100,
				child: []
			}
		]
	},{
		name: "早王朝时期",
		start: -3100,
		end: -2686,
		child: []
	},{
		name: "古王国时期",
		start: -2686,
		end: -2181,
		child: []
	},{
		name: "第一中间时期",
		start: -2181,
		end: -2055,
		child: []
	},{
		name: "中王国时期",
		start: -2055,
		end: -1650,
		child: []
	},{
		name: "第二中间时期",
		start: -1650,
		end: -1550,
		child: []
	},{
		name: "新王国时期",
		start: -1550,
		end: -1069,
		child: []
	},{
		name: "第三中间时期",
		start: -1069,
		end: -664,
		child: []
	},{
		name: "阿契美尼德王朝",
		start: -525,
		end: -332,
		child: []
	},{
		name: "托勒密时期",
		start: -332,
		end: -30,
		child: []
	},{
		name: "罗马及拜占庭治理时期",
		start: -30,
		end: 641,
		child: []
	},{
		name: "萨珊时期",
		start: 621,
		end: 629,
		child: []
	},{
		name: "阿拉伯治理时期",
		start: 641,
		end: 969,
		child: []
	},{
		name: "法蒂玛时期",
		start: 969,
		end: 1171,
		child: []
	},{
		name: "阿尤布时期",
		start: 1171,
		end: 1250,
		child: []
	},{
		name: "马木留克时期",
		start: 1250,
		end: 1517,
		child: []
	},{
		name: "奥斯曼治理时期",
		start: 1517,
		end: 1867,
		child: []
	},{
		name: "法国治理时期",
		start: 1798,
		end: 1801,
		child: []
	},{
		name: "穆罕默德·阿里时期",
		start: 1805,
		end: 1882,
		child: []
	},{
		name: "赫迪夫领时期",
		start: 1867,
		end: 1914,
		child: []
	},{
		name: "英国治理时期",
		start: 1882,
		end: 1953,
		child: []
	},{
		name: "苏丹国时期",
		start: 1914,
		end: 1922,
		child: []
	},{
		name: "王国时期",
		start: 1922,
		end: 1953,
		child: []
	},{
		name: "共和国时期",
		start: 1953,
		end: 2014,
		child: []
	}
];

var EGYPT_EVENTS = [
	{
		year: -2690,
		info: "胡夫金字塔"
	},{
		year: -70,
		info: "埃及艳后"
	}
];

var GREECE = [
	{
		name: "爱琴文明",
		start: -2700,
		end: -1050,
		child: [
			{
				name: "克里特文明",
				start: -2500,
				end: -1450,
				child: []
			},{
				name: "迈锡尼文明",
				start: -1600,
				end: -1050,
				child: []
			}
		]
	},{
		name: "荷马时代",
		start: -1100,
		end: -950,
		child: []
	},{
		name: "古风文明",
		start: -950,
		end: -650,
		child: []
	},{
		name: "古典文明",
		start: -650,
		end: -400,
		child: []
	},{
		name: "马其顿统治时代",
		start: -395,
		end: -323,
		child: []
	},{
		name: "希腊化时代",
		start: -323,
		end: -146,
		child: []
	},{
		name: "罗马时期",
		start: -146,
		end: 324,
		child: []
	},{
		name: "拜占庭时期",
		start: 324,
		end: 1453,
		child: []
	},{
		name: "奥斯曼统治时期",
		start: 1453,
		end: 1829,
		child: []
	},{
		name: "现代希腊",
		start: 1829,
		end: 2014,
		child: []
	}
];

var GREECE_EVENTS = [
	{
		year: -900,
		info: "荷马史诗"
	},{
		year: -776,
		info: "第1届古代奥运会"
	},{
		year: -550,
		info: "苏格拉底"
	},{
		year: -480,
		info: "希波战争"
	},{
		year: -400,
		info: "亚里士多德"
	}
];

var MESOPOTAMIA = [
	{
		name: "早期高度文明",
		start: -4000,
		end: -3000,
		child: []
	},{
		name: "苏美尔城邦",
		start: -3000,
		end: -2371,
		child: []
	},{
		name: "早亚述时期",
		start: -2500,
		end: -1500,
		child: [
			{
				name: "阿卡德王国时期",
				start: -2371,
				end: -2191,
				child: []
			},{
				name: "苏美尔复兴时期",
				start: -2000,
				end: -2110,
				child: []
			},{
				name: "乌尔第三王朝",
				start: -2111,
				end: -2003,
				child: []
			},{
				name: "巴比伦王国",
				start: -1850,
				end: -1550,
				child: []
			}
		]
	},{
		name: "中亚述时期",
		start: -1365,
		end: -1000,
		child: []
	},{
		name: "新亚述帝国",
		start: -1000,
		end: -612,
		child: []
	},{
		name: "新巴比伦王国",
		start: -626,
		end: -538,
		child: []
	},{
		name: "波斯帝国时期",
		start: -539,
		end: -330,
		child: []
	},{
		name: "马其顿—希腊时期",
		start: -330,
		end: -141,
		child: []
	},{
		name: "安息王朝",
		start: -129,
		end: 224,
		child: []
	},{
		name: "萨珊王朝",
		start: 224,
		end: 651,
		child: []
	}
];

var MESOPOTAMIA_EVENTS = [
	{
		year: -3200,
		info: "楔形文字"
	},{
		year: -3000,
		info: "最早天文历法"
	},{
		year: -2300,
		info: "世界最早的地图"
	},{
		year: -2170,
		info: "乌尔纳姆法典"
	},{
		year: -2000,
		info: "汉谟拉比法典"
	},{
		year: -612,
		info: "空中花园"
	}
];
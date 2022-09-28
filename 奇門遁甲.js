var styleDisc = document.getElementById("styleDisc");
var context = styleDisc.getContext("2d");
var stagecoachPosition = "";
var numberOfBoard = parseInt(localStorage.getItem("NumberOfBoard"));
var darkRed = "rgba(255, 0, 0, 1.0)";
var darkYellow = "rgba(200, 200, 0, 1.0)";
var white = "rgba(255, 255, 255, 1.0)";
var black = "rgba(0, 0, 0, 1.0)";
var lightYellow = "rgba(255, 255, 0, 1.0)";
var lightGreen = "rgba(0, 255, 0, 1.0)";
var darkGreen = "rgba(0, 200, 0, 1.0)";
var blue = "rgba(128, 128, 255, 1.0)";
var lightRed = "rgba(255, 128, 128, 1.0)";
var xunShou = null;
var xunShou_earthlyBranch = null;
var valueStar = null;
var valueEnableGate = null;
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ifSkyPanSendHeavenlyInXunShou = null;
var SiteHeavenlies = function (_numberOfBoard_)
{
	this.startingPoint = _numberOfBoard_;
	this.heavenlies = ["5", "6", "7", "8", "9", "10", "4", "3", "2"];
	this.positionOfHeavenlies = [];
};
SiteHeavenlies.prototype =
{
	setSiteHeavenliesPosition : function ()
	{
		if (localStorage.getItem("yinYangEscape") == "yang")
		{
			for (var i = 0; i < 9; ++i)
			{
				this.positionOfHeavenlies.push(this.startingPoint);
				
				if (this.startingPoint == 9)
				{
					this.startingPoint = 1;
				}
				else
				{
					++this.startingPoint;
				}
			}
		}
		else
		{
			for (var i = 0; i < 9; ++i)
			{
				this.positionOfHeavenlies.push(this.startingPoint);
				
				if (this.startingPoint == 1)
				{
					this.startingPoint = 9;
				}
				else
				{
					--this.startingPoint;
				}
			}
		}
		
		for (var i = 0; i < 9; ++i)
		{
			switch(this.positionOfHeavenlies[i])
			{
				case 1 :
					palace1.siteHeavenly = this.heavenlies[i];
					break;
				case 2 :
					palace2.siteHeavenly = this.heavenlies[i];
					break;
				case 3 :
					palace3.siteHeavenly = this.heavenlies[i];
					break;
				case 4 :
					palace4.siteHeavenly = this.heavenlies[i];
					break;
				case 5 :
					palace2.siteSendHeavenly = this.heavenlies[i];
					break;
				case 6 :
					palace6.siteHeavenly = this.heavenlies[i];
					break;
				case 7 :
					palace7.siteHeavenly = this.heavenlies[i];
					break;
				case 8 :
					palace8.siteHeavenly = this.heavenlies[i];
					break;
				case 9 :
					palace9.siteHeavenly = this.heavenlies[i];
					break;
			}
		}
	}
};
var SkyPanHeavenlies = function (_xunShou_)
{
	this.xunShou = _xunShou_;
	this.offset = null;
};
SkyPanHeavenlies.prototype =
{
	transformXunShou : function ()
	{
		switch(this.xunShou)
		{
			case 5 :
				this.xunShou = "5";
				break;
			case 6 :
				this.xunShou = "6";
				break;
			case 7 :
				this.xunShou = "7";
				break;
			case 8 :
				this.xunShou = "8";
				break;
			case 9 :
				this.xunShou = "9";
				break;
			case 10 :
				this.xunShou = "10";
				break;
		}
	},
	setSkyPanHeavenliesPosition : function ()
	{
		var start, end;
		
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].siteHeavenly == this.xunShou || map.global[i].siteSendHeavenly == this.xunShou)
			{
				start = i;
				break;
			}
		}
		
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].siteHeavenly == localStorage.getItem("hour_heavenly") || map.global[i].siteSendHeavenly == localStorage.getItem("hour_heavenly"))
			{
				end = i;
				break;
			}
		}
		
		this.offset = end - start;
		this.offset = this.offset < 0 ? this.offset + 8 : this.offset;
		
		for (var i = 0; i < 8; ++i)
		{
			if (i + this.offset > 7)
			{
				map.global[i + this.offset - 8].skyPanHeavenly = map.global[i].siteHeavenly;
				map.global[i + this.offset - 8].skyPanSendHeavenly = map.global[i].siteSendHeavenly;
			}
			else
			{
				map.global[i + this.offset].skyPanHeavenly = map.global[i].siteHeavenly;
				map.global[i + this.offset].skyPanSendHeavenly = map.global[i].siteSendHeavenly;
			}
		}
	}
};
var Gods = function (_xunShou_)
{
	this.gods = ["1", "8", "3", "4", "9", "2", "7", "6"];
	this.startingPoint = null;
	this.xunShou = "" + _xunShou_;
	this.site_StartingPoint = null;
};
Gods.prototype =
{
	setGodsPosition : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].skyPanHeavenly == this.xunShou || map.global[i].skyPanSendHeavenly == this.xunShou)
			{
				this.startingPoint = i;
			}
		}
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].siteHeavenly == this.xunShou || map.global[i].siteSendHeavenly == this.xunShou)
			{
				this.site_StartingPoint = i;
			}
		}
		
		switch(this.site_StartingPoint)
		{
			case 0 :
				valueStar = "9";
				valueEnableGate = "9";
				break;
			case 1 :
				valueStar = "2";
				valueEnableGate = "2";
				break;
			case 2 :
				valueStar = "7";
				valueEnableGate = "7";
				break;
			case 3 :
				valueStar = "6";
				valueEnableGate = "6";
				break;
			case 4 :
				valueStar = "1";
				valueEnableGate = "1";
				break;
			case 5 :
				valueStar = "8";
				valueEnableGate = "8";
				break;
			case 6 :
				valueStar = "3";
				valueEnableGate = "3";
				break;
			case 7 :
				valueStar = "4";
				valueEnableGate = "4";
				break;
		}
		
		if (localStorage.getItem("yinYangEscape") == "yang")
		{
			for (var i = 0; i < 8; ++i)
			{
				map.global[this.startingPoint].god = this.gods[i];
				
				if (this.startingPoint == 7)
				{
					this.startingPoint = 0;
				}
				else
				{
					++this.startingPoint;
				}
			}
		}
		else
		{
			for (var i = 0; i < 8; ++i)
			{
				map.global[this.startingPoint].god = this.gods[i];
				
				if (this.startingPoint == 0)
				{
					this.startingPoint = 7;
				}
				else
				{
					--this.startingPoint;
				}
			}
		}
	}
};
var Stars = function ()
{
	this.stars = ["9", "2", "7", "6", "1", "8", "3", "4"];
	this.startingPoint = null;
	this.custom = null;
};
Stars.prototype =
{
	setStarsPosition : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].god == "1")
			{
				this.startingPoint = i;
				break;
			}
		}
		for (var i = 0; i < 8; ++i)
		{
			if (this.stars[i] == valueStar)
			{
				this.custom = i;
				break;
			}
		}
		for (var i = 0; i < 8; ++i)
		{
			map.global[this.startingPoint].star = this.stars[this.custom];
			
			if (this.startingPoint == 7)
			{
				this.startingPoint = 0;
			}
			else
			{
				++this.startingPoint;
			}
			if (this.custom == 7)
			{
				this.custom = 0;
			}
			else
			{
				++this.custom;
			}
		}
	}
};
var Doors = function ()
{
	this.startingPoint = null;
	this.doors = ["9", "2", "7", "6", "1", "8", "3", "4"];
	this.custom = null;
	this.timeOffset = 0;
};
Doors.prototype =
{
	getTimeOffset : function (_heavenly_, _earthlyBranch_)
	{
		var _offset = 0;
		
		if (localStorage.getItem("ifKeypan") == "false")
		{
			while(_heavenly_ != 1)
			{
				if (_earthlyBranch_ == 1)
				{
					_earthlyBranch_ = 12;
				}
				else
				{
					--_earthlyBranch_;
				}
				
				--_heavenly_;
				++_offset;
			}
			
			return _offset;
		}
		else
		{
			while(_earthlyBranch_ != xunShou_earthlyBranch)
			{
				if (_earthlyBranch_ == 1)
				{
					_earthlyBranch_ = 12;
				}
				else
				{
					--_earthlyBranch_;
				}
				
				++_offset;
			}
			
			return _offset;
		}
	},
	setDoorsPosition : function ()
	{
		this.startingPoint = parseInt(valueEnableGate);
		this.timeOffset += this.getTimeOffset(parseInt(localStorage.getItem("hour_heavenly")), parseInt(localStorage.getItem("hour_earthlyBranch")));
		
		if (localStorage.getItem("yinYangEscape") == "yang")
		{
			for (var i = 1; i <= this.timeOffset; ++i)
			{
				++this.startingPoint;
				
				if (this.startingPoint > 9)
				{
					this.startingPoint = 1;
				}
			}
		}
		else
		{
			for (var i = 1; i <= this.timeOffset; ++i)
			{
				--this.startingPoint;
				
				if (this.startingPoint < 1)
				{
					this.startingPoint = 9;
				}
			}
		}
		if (this.startingPoint == 5 || ifSkyPanSendHeavenlyInXunShou == true)
		{
			this.startingPoint = 2;
		}
		
		for (var i = 0; i < 8; ++i)
		{
			if (this.doors[i] == valueEnableGate)
			{
				this.custom = i;
				break;
			}
		}
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].numberOfVena == this.startingPoint)
			{
				this.startingPoint = i;
				break;
			}
		}
		for (var i = 0; i < 8; ++i)
		{
			map.global[this.startingPoint].door = this.doors[this.custom];
			
			if (this.startingPoint == 7)
			{
				this.startingPoint = 0;
			}
			else
			{
				++this.startingPoint;
			}
			if (this.custom == 7)
			{
				this.custom = 0;
			}
			else
			{
				++this.custom;
			}
		}
	}
};
var HiddenHeavenlies = function ()
{
	this.offset = null;
};
HiddenHeavenlies.prototype =
{
	setHiddenHeavenliesPosition : function ()
	{
		var start, end;
			
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].door == valueEnableGate)
			{
				end = i;
				break;
			}
		}
		
		for (var i = 0; i < 8; ++i)
		{
			if (map.global[i].skyPanHeavenly == localStorage.getItem("hour_heavenly") || map.global[i].skyPanSendHeavenly == localStorage.getItem("hour_heavenly"))
			{
				start = i;
			}
		}
		
		this.offset = end - start;
		this.offset = this.offset < 0 ? this.offset + 8 : this.offset;
		
		for (var i = 0; i < 8; ++i)
		{
			if (i + this.offset > 7)
			{
				map.global[i + this.offset - 8].hiddenHeavenly = map.global[i].skyPanHeavenly;
				map.global[i + this.offset - 8].hiddenSendHeavenly = map.global[i].skyPanSendHeavenly;
			}
			else
			{
				map.global[i + this.offset].hiddenHeavenly = map.global[i].skyPanHeavenly;
				map.global[i + this.offset].hiddenSendHeavenly = map.global[i].skyPanSendHeavenly;
			}
		}
	}
};
var Palace = function (_numberOfVena_)
{
	this.numberOfVena = _numberOfVena_;
	this.siteHeavenly = "";
	this.skyPanHeavenly = "";
	this.god = "";
	this.star = "";
	this.door = "";
	this.hiddenHeavenly = "";
	this.siteSendHeavenly = "";
	this.skyPanSendHeavenly = "";
	this.hiddenSendHeavenly = "";
	this.void = null;
	this.pattern = [];
};
Palace.prototype =
{
	checkVoid : function ()
	{
		switch(xunShou)
		{
			case 5 :
				if (this.numberOfVena == 6)
				{
					this.void = true;
				}
				break;
			case 6 :
				if (this.numberOfVena == 2 || this.numberOfVena == 7)
				{
					this.void = true;
				}
				break;
			case 7 :
				if (this.numberOfVena == 9 || this.numberOfVena == 2)
				{
					this.void = true;
				}
				break;
			case 8 :
				if (this.numberOfVena == 4)
				{
					this.void = true;
				}
				break;
			case 9 :
				if (this.numberOfVena == 3 || this.numberOfVena == 8)
				{
					this.void = true;
				}
				break;
			case 10 :
				if (this.numberOfVena == 8 || this.numberOfVena == 1)
				{
					this.void = true;
				}
				break;
		}
	},
	drawVoid : function ()
	{
		if (this.void)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.fillStyle = "rgba(0, 0, 0, 1.0)";
			context.textAlign = "center";
			context.textBaseline = "top";
			
			switch(this.numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 42 * 21, styleDisc.height / 7);
					break;
				case 2 :
					context.translate(styleDisc.width / 42 * 31, styleDisc.height / 7);
					break;
				case 7 :
					context.translate(styleDisc.width / 42 * 31, styleDisc.height / 21 * 8);
					break;
				case 6 :
					context.translate(styleDisc.width / 42 * 31, styleDisc.height / 21 * 13);
					break;
				case 1 :
					context.translate(styleDisc.width / 42 * 21, styleDisc.height / 21 * 13);
					break;
				case 8 :
					context.translate(styleDisc.width / 42 * 11, styleDisc.height / 21 * 13);
					break;
				case 3 :
					context.translate(styleDisc.width / 42 * 11, styleDisc.height / 21 * 8);
					break;
				case 4 :
					context.translate(styleDisc.width / 42 * 11, styleDisc.height / 7);
					break;
			}
			
			context.fillText("空亡", 0, 10);
			context.restore();
		}
	},
	checkPattern : function ()
	{
		switch(this.skyPanHeavenly)
		{
			case "2" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("日奇伏呤");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("奇儀順遂");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("奇儀相佐");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("利陰害陽");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("日奇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("日奇被刑");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("青龍逃走");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("日奇入地");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("日奇華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("藤羅繫甲");
				}
				break;
			case "3" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("日月並行");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("月奇伏呤");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("月奇朱雀");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("飛鳥跌穴");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("月奇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("熒入太白");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("謀事能成");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("火入地羅");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("悖師華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("飛鳥跌穴");
				}
				break;
			case "4" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("人遁吉格");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("星隨月轉");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("星奇伏呤");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("青龍轉光");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("星奇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("文書阻隔");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("朱雀入獄");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("五神互和");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("朱雀投江");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("青龍轉光");
				}
				break;
			case "5" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("青龍合靈");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("青龍反首");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("青龍耀明");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("貴人入獄");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("天乙飛宮");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("青龍折足");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("青龍入牢");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("青龍華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("巨石壓木");
				}
				break;
			case "6" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("墓神不明");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("火悖地戶");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("朱雀入墓");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("犬遇青龍");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("利名反格");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("遊魂入墓");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("地網高張");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("地刑玄武");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("犬遇青龍");
				}
				break;
			case "7" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("合格");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("太白入熒");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("破格");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("天乙伏宮");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("刑格");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("戰格");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("白虎干格");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("小格");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("大格");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("天乙伏宮");
				}
				break;
			case "8" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("白虎猖狂");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("干合悖師");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("獄神得奇");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("困龍被傷");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("入墓自刑");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("白虎出力");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("伏呤天庭");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("凶蛇入獄");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("天牢華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("龍爭虎鬥");
				}
				break;
			case "9" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("小蛇日奇");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("小蛇入火");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("幹合蛇刑");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("小蛇化龍");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("凶蛇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("太白擒蛇");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("騰蛇相纏");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("家醜");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("小蛇化龍");
				}
				break;
			case "10" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("華蓋逢星");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("華蓋悖師");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("騰蛇夭嬌");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("天乙會合");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("華蓋地戶");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("太白入網");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("網蓋天獄");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("複見騰蛇");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("天乙會合");
				}
				break;
		}
		switch(this.skyPanHeavenly)
		{
			case ("" + xunShou) :
				if (this.siteHeavenly == ("" + xunShou) || this.siteSendHeavenly == ("" + xunShou))
				{
					this.pattern.push("雙木成林");
				}
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("青龍會合");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("青龍回首");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("木火通明");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("雙龍和會");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("貴人入獄");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("值符飛宮");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("青龍折足");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("青龍入牢");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("青龍華蓋");
				}
				break;
		}
		switch(this.skyPanSendHeavenly)
		{
			case "2" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("日奇伏呤");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("奇儀順遂");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("奇儀相佐");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("利陰害陽");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("日奇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("日奇被刑");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("青龍逃走");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("日奇入地");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("日奇華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("藤羅繫甲");
				}
				break;
			case "3" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("日月並行");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("月奇伏呤");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("月奇朱雀");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("飛鳥跌穴");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("月奇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("熒入太白");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("謀事能成");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("火入地羅");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("悖師華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("飛鳥跌穴");
				}
				break;
			case "4" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("人遁吉格");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("星隨月轉");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("星奇伏呤");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("青龍轉光");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("星奇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("文書阻隔");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("朱雀入獄");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("五神互和");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("朱雀投江");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("青龍轉光");
				}
				break;
			case "5" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("青龍合靈");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("青龍反首");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("青龍耀明");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("貴人入獄");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("天乙飛宮");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("青龍折足");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("青龍入牢");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("青龍華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("巨石壓木");
				}
				break;
			case "6" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("墓神不明");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("火悖地戶");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("朱雀入墓");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("犬遇青龍");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("利名反格");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("遊魂入墓");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("地網高張");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("地刑玄武");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("犬遇青龍");
				}
				break;
			case "7" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("合格");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("太白入熒");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("破格");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("天乙伏宮");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("刑格");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("戰格");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("白虎干格");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("小格");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("大格");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("天乙伏宮");
				}
				break;
			case "8" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("白虎猖狂");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("干合悖師");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("獄神得奇");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("困龍被傷");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("入墓自刑");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("白虎出力");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("伏呤天庭");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("凶蛇入獄");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("天牢華蓋");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("龍爭虎鬥");
				}
				break;
			case "9" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("小蛇日奇");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("小蛇入火");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("幹合蛇刑");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("小蛇化龍");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("凶蛇入墓");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("太白擒蛇");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("騰蛇相纏");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("家醜");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("小蛇化龍");
				}
				break;
			case "10" :
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("華蓋逢星");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("華蓋悖師");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("騰蛇夭嬌");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("天乙會合");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("華蓋地戶");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("太白入網");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("網蓋天獄");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("複見騰蛇");
				}
				if (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou)
				{
					this.pattern.push("天乙會合");
				}
				break;
		}
		switch(this.skyPanSendHeavenly)
		{
			case ("" + xunShou) :
				if (this.siteHeavenly == ("" + xunShou) || this.siteSendHeavenly == ("" + xunShou))
				{
					this.pattern.push("雙木成林");
				}
				if (this.siteHeavenly == "2" || this.siteSendHeavenly == "2")
				{
					this.pattern.push("青龍會合");
				}
				if (this.siteHeavenly == "3" || this.siteSendHeavenly == "3")
				{
					this.pattern.push("青龍回首");
				}
				if (this.siteHeavenly == "4" || this.siteSendHeavenly == "4")
				{
					this.pattern.push("木火通明");
				}
				if (this.siteHeavenly == "5" || this.siteSendHeavenly == "5")
				{
					this.pattern.push("雙龍和會");
				}
				if (this.siteHeavenly == "6" || this.siteSendHeavenly == "6")
				{
					this.pattern.push("貴人入獄");
				}
				if (this.siteHeavenly == "7" || this.siteSendHeavenly == "7")
				{
					this.pattern.push("值符飛宮");
				}
				if (this.siteHeavenly == "8" || this.siteSendHeavenly == "8")
				{
					this.pattern.push("青龍折足");
				}
				if (this.siteHeavenly == "9" || this.siteSendHeavenly == "9")
				{
					this.pattern.push("青龍入牢");
				}
				if (this.siteHeavenly == "10" || this.siteSendHeavenly == "10")
				{
					this.pattern.push("青龍華蓋");
				}
				break;
		}
		
		if ((this.door == "6" || this.door == "1" || this.door == "8") && (this.god == "3") && (parseInt(this.skyPanHeavenly) <= 4 || parseInt(this.skyPanSendHeavenly) <= 4 || parseInt(this.siteHeavenly) <= 4 || parseInt(this.siteSendHeavenly) <= 4))
		{
			this.pattern.push("真詐");
		}
		if ((this.door == "6" || this.door == "1" || this.door == "8") && (this.god == "7") && (parseInt(this.skyPanHeavenly) <= 4 || parseInt(this.skyPanSendHeavenly) <= 4 || parseInt(this.siteHeavenly) <= 4 || parseInt(this.siteSendHeavenly) <= 4))
		{
			this.pattern.push("重詐");
		}
		if ((this.door == "6" || this.door == "1" || this.door == "8") && (this.god == "4") && (parseInt(this.skyPanHeavenly) <= 4 || parseInt(this.skyPanSendHeavenly) <= 4 || parseInt(this.siteHeavenly) <= 4 || parseInt(this.siteSendHeavenly) <= 4))
		{
			this.pattern.push("休詐");
		}
		if ((this.door == "9") && (this.god == "6") && (parseInt(this.skyPanHeavenly) <= 4 || parseInt(this.skyPanSendHeavenly) <= 4 || parseInt(this.siteHeavenly) <= 4 || parseInt(this.siteSendHeavenly) <= 4))
		{
			this.pattern.push("天假");
		}
		if ((this.door == "4") && (this.god == "7" || this.god == "3" || this.god == "4") && (this.skyPanHeavenly == "4" || this.skyPanHeavenly == "6" || this.skyPanHeavenly == "10" || this.skyPanSendHeavenly == "4" || this.skyPanSendHeavenly == "6" || this.skyPanSendHeavenly == "10" || this.siteHeavenly == "4" || this.siteHeavenly == "6" || this.siteHeavenly == "10" || this.siteSendHeavenly == "4" || this.siteSendHeavenly == "6" || this.siteSendHeavenly == "10"))
		{
			this.pattern.push("地假");
		}
		if ((this.door == "7") && (this.god == "6") && (this.skyPanHeavenly == "9" || this.skyPanSendHeavenly == "9" || this.siteHeavenly == "9" || this.siteSendHeavenly == "9"))
		{
			this.pattern.push("人假");
		}
		if ((this.door == "3") && (this.god == "7") && (this.skyPanHeavenly == "4" || this.skyPanHeavenly == "6" || this.skyPanHeavenly == "10" || this.skyPanSendHeavenly == "4" || this.skyPanSendHeavenly == "6" || this.skyPanSendHeavenly == "10" || this.siteHeavenly == "4" || this.siteHeavenly == "6" || this.siteHeavenly == "10" || this.siteSendHeavenly == "4" || this.siteSendHeavenly == "6" || this.siteSendHeavenly == "10"))
		{
			this.pattern.push("神假");
		}
		if ((this.door == "3") && (this.god == "4") && (this.skyPanHeavenly == "4" || this.skyPanHeavenly == "6" || this.skyPanHeavenly == "10" || this.skyPanSendHeavenly == "4" || this.skyPanSendHeavenly == "6" || this.skyPanSendHeavenly == "10" || this.siteHeavenly == "4" || this.siteHeavenly == "6" || this.siteHeavenly == "10" || this.siteSendHeavenly == "4" || this.siteSendHeavenly == "6" || this.siteSendHeavenly == "10"))
		{
			this.pattern.push("物假");
		}
		if ((this.door == "2") && (this.god == "7") && (this.skyPanHeavenly == "4" || this.skyPanHeavenly == "6" || this.skyPanHeavenly == "10" || this.skyPanSendHeavenly == "4" || this.skyPanSendHeavenly == "6" || this.skyPanSendHeavenly == "10" || this.siteHeavenly == "4" || this.siteHeavenly == "6" || this.siteHeavenly == "10" || this.siteSendHeavenly == "4" || this.siteSendHeavenly == "6" || this.siteSendHeavenly == "10"))
		{
			this.pattern.push("鬼假");
		}
		if ((xunShou == 6 || xunShou == 8) && (this.skyPanHeavenly == "2" || this.skyPanSendHeavenly == "2") && (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou))
		{
			this.pattern.push("日奇得使");
		}
		if ((xunShou == 5 || xunShou == 7) && (this.skyPanHeavenly == "3" || this.skyPanSendHeavenly == "3") && (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou))
		{
			this.pattern.push("月奇得使");
		}
		if ((xunShou == 9 || xunShou == 10) && (this.skyPanHeavenly == "4" || this.skyPanSendHeavenly == "4") && (this.siteHeavenly == "" + xunShou || this.siteSendHeavenly == "" + xunShou))
		{
			this.pattern.push("星奇得使");
		}
	},
	drawPattern : function ()
	{
		switch(this.numberOfVena)
		{
			case 9 :
				nine.innerText = "離九宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					nine.innerText += this.pattern[i] + "/";
				}
				
				nine.innerText = nine.innerText.substring(0, nine.innerText.length - 1);
				break;
			case 2 :
				two.innerText = "坤二宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					two.innerText += this.pattern[i] + "/";
				}
				
				two.innerText = two.innerText.substring(0, two.innerText.length - 1);
				break;
			case 7 :
				seven.innerText = "兌七宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					seven.innerText += this.pattern[i] + "/";
				}
				
				seven.innerText = seven.innerText.substring(0, seven.innerText.length - 1);
				break;
			case 6 :
				six.innerText = "乾六宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					six.innerText += this.pattern[i] + "/";
				}
				
				six.innerText = six.innerText.substring(0, six.innerText.length - 1);
				break;
			case 1 :
				one.innerText = "坎一宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					one.innerText += this.pattern[i] + "/";
				}
				
				one.innerText = one.innerText.substring(0, one.innerText.length - 1);
				break;
			case 8 :
				eight.innerText = "艮八宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					eight.innerText += this.pattern[i] + "/";
				}
				
				eight.innerText = eight.innerText.substring(0, eight.innerText.length - 1);
				break;
			case 3 :
				three.innerText = "震三宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					three.innerText += this.pattern[i] + "/";
				}
				
				three.innerText = three.innerText.substring(0, three.innerText.length - 1);
				break;
			case 4 :
				four.innerText = "巽四宮 : ";
				
				for (var i = 0; i < this.pattern.length; ++i)
				{
					four.innerText += this.pattern[i] + "/";
				}
				
				four.innerText = four.innerText.substring(0, four.innerText.length - 1);
				break;
		}
	}
};
var Map = function (_palace1_, _palace2_, _palace3_, _palace4_, _palace6_, _palace7_, _palace8_, _palace9_)
{
	this.global = [_palace9_, _palace2_, _palace7_, _palace6_, _palace1_, _palace8_, _palace3_, _palace4_];
}
Map.prototype =
{
	drawSiteHeavenlies : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.strokeStyle = "rgba(0, 0, 0, 1.0)";
			context.textAlign = "left";
			context.textBaseline = "bottom";
			
			switch(this.global[i].numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 8);
					break;
				case 2 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 21 * 8);
					break;
				case 7 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 21 * 13);
					break;
				case 6 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 7 * 6);
					break;
				case 1 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 7 * 6);
					break;
				case 8 :
					context.translate(styleDisc.width / 7, styleDisc.height / 7 * 6);
					break;
				case 3 :
					context.translate(styleDisc.width / 7, styleDisc.height / 21 * 13);
					break;
				case 4 :
					context.translate(styleDisc.width / 7, styleDisc.height / 21 * 8);
					break;
			}
			switch(this.global[i].siteHeavenly)
			{
				case "5" :
					context.fillStyle = lightYellow;
					
					context.fillText("戊", 10, -10);
					context.strokeText("戊", 10, -10);
					break;
				case "6" :
					context.fillStyle = darkYellow;
					
					context.fillText("己", 10, -10);
					context.strokeText("己", 10, -10);
					break;
				case "7" :
					context.fillStyle = white;
					
					context.fillText("庚", 10, -10);
					context.strokeText("庚", 10, -10);
					break;
				case "8" :
					context.fillStyle = white;
					
					context.fillText("辛", 10, -10);
					context.strokeText("辛", 10, -10);
					break;
				case "9" :
					context.fillStyle = blue;
					
					context.fillText("壬", 10, -10);
					context.strokeText("壬", 10, -10);
					break;
				case "10" :
					context.fillStyle = black;
					
					context.fillText("癸", 10, -10);
					context.strokeText("癸", 10, -10);
					break;
				case "4" :
					context.fillStyle = darkRed;
					
					context.fillText("丁", 10, -10);
					context.strokeText("丁", 10, -10);
					break;
				case "3" :
					context.fillStyle = lightRed;
					
					context.fillText("丙", 10, -10);
					context.strokeText("丙", 10, -10);
					break;
				case "2" :
					context.fillStyle = darkGreen;
					
					context.fillText("乙", 10, -10);
					context.strokeText("乙", 10, -10);
					break;
			}
			switch(this.global[i].siteSendHeavenly)
			{
				case "5" :
					context.fillStyle = lightYellow;
					
					context.fillText("戊", 60, -10);
					context.strokeText("戊", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "6" :
					context.fillStyle = darkYellow;
					
					context.fillText("己", 60, -10);
					context.strokeText("己", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "7" :
					context.fillStyle = white;
					
					context.fillText("庚", 60, -10);
					context.strokeText("庚", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "8" :
					context.fillStyle = white;
					
					context.fillText("辛", 60, -10);
					context.strokeText("辛", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "9" :
					context.fillStyle = blue;
					
					context.fillText("壬", 60, -10);
					context.strokeText("壬", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "10" :
					context.fillStyle = black;
					
					context.fillText("癸", 60, -10);
					context.strokeText("癸", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "4" :
					context.fillStyle = darkRed;
					
					context.fillText("丁", 60, -10);
					context.strokeText("丁", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "3" :
					context.fillStyle = lightRed;
					
					context.fillText("丙", 60, -10);
					context.strokeText("丙", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
				case "2" :
					context.fillStyle = darkGreen;
					
					context.fillText("乙", 60, -10);
					context.strokeText("乙", 60, -10);
					context.beginPath();
					context.moveTo(85, -70);
					context.lineTo(50, -20);
					context.lineTo(120, -20);
					context.closePath();
					context.stroke();
					break;
			}
			
			context.restore();
		}
	},
	drawSkyPanHeavenlies : function ()
	{
		
		for (var i = 0; i < 8; ++i)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.strokeStyle = "rgba(0, 0, 0, 1.0)";
			context.textAlign = "left";
			context.textBaseline = "middle";
			
			switch(this.global[i].numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 42 * 11);
					break;
				case 2 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 42 * 11);
					break;
				case 7 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 42 * 21);
					break;
				case 6 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 42 * 31);
					break;
				case 1 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 42 * 31);
					break;
				case 8 :
					context.translate(styleDisc.width / 7, styleDisc.height / 42 * 31);
					break;
				case 3 :
					context.translate(styleDisc.width / 7, styleDisc.height / 42 * 21);
					break;
				case 4 :
					context.translate(styleDisc.width / 7, styleDisc.height / 42 * 11);
					break;
			}
			switch(this.global[i].skyPanHeavenly)
			{
				case "5" :
					context.fillStyle = lightYellow;
					
					context.fillText("戊", 10, 0);
					context.strokeText("戊", 10, 0);
					break;
				case "6" :
					context.fillStyle = darkYellow;
					
					context.fillText("己", 10, 0);
					context.strokeText("己", 10, 0);
					break;
				case "7" :
					context.fillStyle = white;
					
					context.fillText("庚", 10, 0);
					context.strokeText("庚", 10, 0);
					break;
				case "8" :
					context.fillStyle = white;
					
					context.fillText("辛", 10, 0);
					context.strokeText("辛", 10, 0);
					break;
				case "9" :
					context.fillStyle = blue;
					
					context.fillText("壬", 10, 0);
					context.strokeText("壬", 10, 0);
					break;
				case "10" :
					context.fillStyle = black;
					
					context.fillText("癸", 10, 0);
					context.strokeText("癸", 10, 0);
					break;
				case "4" :
					context.fillStyle = darkRed;
					
					context.fillText("丁", 10, 0);
					context.strokeText("丁", 10, 0);
					break;
				case "3" :
					context.fillStyle = lightRed;
					
					context.fillText("丙", 10, 0);
					context.strokeText("丙", 10, 0);
					break;
				case "2" :
					context.fillStyle = darkGreen;
					
					context.fillText("乙", 10, 0);
					context.strokeText("乙", 10, 0);
					break;
			}
			switch(this.global[i].skyPanSendHeavenly)
			{
				case "5" :
					context.fillStyle = lightYellow;
					
					context.fillText("戊", 60, 0);
					context.strokeText("戊", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "6" :
					context.fillStyle = darkYellow;
					
					context.fillText("己", 60, 0);
					context.strokeText("己", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "7" :
					context.fillStyle = white;
					
					context.fillText("庚", 60, 0);
					context.strokeText("庚", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "8" :
					context.fillStyle = white;
					
					context.fillText("辛", 60, 0);
					context.strokeText("辛", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "9" :
					context.fillStyle = blue;
					
					context.fillText("壬", 60, 0);
					context.strokeText("壬", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "10" :
					context.fillStyle = black;
					
					context.fillText("癸", 60, 0);
					context.strokeText("癸", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "4" :
					context.fillStyle = darkRed;
					
					context.fillText("丁", 60, 0);
					context.strokeText("丁", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "3" :
					context.fillStyle = lightRed;
					
					context.fillText("丙", 60, 0);
					context.strokeText("丙", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
				case "2" :
					context.fillStyle = darkGreen;
					
					context.fillText("乙", 60, 0);
					context.strokeText("乙", 60, 0);
					context.beginPath();
					context.moveTo(85, -35);
					context.lineTo(50, 15);
					context.lineTo(120, 15);
					context.closePath();
					context.stroke();
					break;
			}
			
			context.restore();
		}
	},
	drawGods : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.strokeStyle = "rgba(0, 0, 0, 1.0)";
			context.textAlign = "left";
			context.textBaseline = "top";
			
			switch(this.global[i].numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 7);
					break;
				case 2 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 7);
					break;
				case 7 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 21 * 8);
					break;
				case 6 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 21 * 13);
					break;
				case 1 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 13);
					break;
				case 8 :
					context.translate(styleDisc.width / 7, styleDisc.height / 21 * 13);
					break;
				case 3 :
					context.translate(styleDisc.width / 7, styleDisc.height / 21 * 8);
					break;
				case 4 :
					context.translate(styleDisc.width / 7, styleDisc.height / 7);
					break;
			}
			switch(this.global[i].god)
			{
				case "9" :
					context.fillStyle = white;
					
					context.fillText("白", 10, 10);
					context.strokeText("白", 10, 10);
					break;
				case "2" :
					context.fillStyle = black;
					
					context.fillText("玄", 10, 10);
					context.strokeText("玄", 10, 10);
					break;
				case "7" :
					context.fillStyle = darkYellow;
					
					context.fillText("地", 10, 10);
					context.strokeText("地", 10, 10);
					break;
				case "6" :
					context.fillStyle = white;
					
					context.fillText("天", 10, 10);
					context.strokeText("天", 10, 10);
					break;
				case "1" :
					context.fillStyle = darkYellow;
					
					context.fillText("符", 10, 10);
					context.strokeText("符", 10, 10);
					break;
				case "8" :
					context.fillStyle = darkRed;
					
					context.fillText("蛇", 10, 10);
					context.strokeText("蛇", 10, 10);
					break;
				case "3" :
					context.fillStyle = white;
					
					context.fillText("陰", 10, 10);
					context.strokeText("陰", 10, 10);
					break;
				case "4" :
					context.fillStyle = darkGreen;
					
					context.fillText("六", 10, 10);
					context.strokeText("六", 10, 10);
					break;
			}
			
			context.restore();
		}
	},
	drawStars : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.strokeStyle = "rgba(0, 0, 0, 1.0)";
			context.textAlign = "right";
			context.textBaseline = "middle";
			
			switch(this.global[i].numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 42 * 11);
					break;
				case 2 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 42 * 11);
					break;
				case 7 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 42 * 21);
					break;
				case 6 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 42 * 31);
					break;
				case 1 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 42 * 31);
					break;
				case 8 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 42 * 31);
					break;
				case 3 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 42 * 21);
					break;
				case 4 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 42 * 11);
					break;
			}
			switch(this.global[i].star)
			{
				case "9" :
					context.fillStyle = darkRed;
					
					context.fillText("英", -10, 0);
					context.strokeText("英", -10, 0);
					break;
				case "2" :
					context.fillStyle = darkYellow;
					
					context.fillText("芮", -10, 0);
					context.strokeText("芮", -10, 0);
					
					context.fillStyle = lightYellow;
					
					context.fillText("禽", -60, 0);
					context.strokeText("禽", -60, 0);
					break;
				case "7" :
					context.fillStyle = white;
					
					context.fillText("柱", -10, 0);
					context.strokeText("柱", -10, 0);
					break;
				case "6" :
					context.fillStyle = white;
					
					context.fillText("心", -10, 0);
					context.strokeText("心", -10, 0);
					break;
				case "1" :
					context.fillStyle = blue;
					
					context.fillText("蓬", -10, 0);
					context.strokeText("蓬", -10, 0);
					break;
				case "8" :
					context.fillStyle = lightYellow;
					
					context.fillText("任", -10, 0);
					context.strokeText("任", -10, 0);
					break;
				case "3" :
					context.fillStyle = lightGreen;
					
					context.fillText("沖", -10, 0);
					context.strokeText("沖", -10, 0);
					break;
				case "4" :
					context.fillStyle = darkGreen;
					
					context.fillText("輔", -10, 0);
					context.strokeText("輔", -10, 0);
					break;
			}
			
			context.restore();
		}
	},
	drawDoors : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.strokeStyle = "rgba(0, 0, 0, 1.0)";
			context.textAlign = "right";
			context.textBaseline = "bottom";
			
			switch(this.global[i].numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 21 * 8);
					break;
				case 2 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 21 * 8);
					break;
				case 7 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 21 * 13);
					break;
				case 6 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 7 * 6);
					break;
				case 1 :
					context.translate(styleDisc.width / 21 * 13, styleDisc.height / 7 * 6);
					break;
				case 8 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 7 * 6);
					break;
				case 3 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 13);
					break;
				case 4 :
					context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 8);
					break;
			}
			switch(this.global[i].door)
			{
				case "9" :
					context.fillStyle = darkRed;
					
					context.fillText("景", -10, -10);
					context.strokeText("景", -10, -10);
					break;
				case "2" :
					context.fillStyle = darkYellow;
					
					context.fillText("死", -10, -10);
					context.strokeText("死", -10, -10);
					break;
				case "7" :
					context.fillStyle = white;
					
					context.fillText("驚", -10, -10);
					context.strokeText("驚", -10, -10);
					break;
				case "6" :
					context.fillStyle = white;
					
					context.fillText("開", -10, -10);
					context.strokeText("開", -10, -10);
					break;
				case "1" :
					context.fillStyle = blue;
					
					context.fillText("休", -10, -10);
					context.strokeText("休", -10, -10);
					break;
				case "8" :
					context.fillStyle = lightYellow;
					
					context.fillText("生", -10, -10);
					context.strokeText("生", -10, -10);
					break;
				case "3" :
					context.fillStyle = lightGreen;
					
					context.fillText("傷", -10, -10);
					context.strokeText("傷", -10, -10);
					break;
				case "4" :
					context.fillStyle = darkGreen;
					
					context.fillText("杜", -10, -10);
					context.strokeText("杜", -10, -10);
					break;
			}
			
			context.restore();
		}
	},
	drawHiddenHeavenlies : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			context.save();
			
			context.font = "bold 50px consolas";
			context.lineWidth = 1;
			context.strokeStyle = "rgba(0, 0, 0, 1.0)";
			var tmpString = "";
			
			switch(this.global[i].hiddenHeavenly)
			{
				case "5" :
					context.fillStyle = lightYellow;
					tmpString = "戊";
					break;
				case "6" :
					context.fillStyle = darkYellow;
					tmpString = "己";
					break;
				case "7" :
					context.fillStyle = white;
					tmpString = "庚";
					break;
				case "8" :
					context.fillStyle = white;
					tmpString = "辛";
					break;
				case "9" :
					context.fillStyle = blue;
					tmpString = "壬";
					break;
				case "10" :
					context.fillStyle = black;
					tmpString = "癸";
					break;
				case "4" :
					context.fillStyle = darkRed;
					tmpString = "丁";
					break;
				case "3" :
					context.fillStyle = lightRed;
					tmpString = "丙";
					break;
				case "2" :
					context.fillStyle = darkGreen;
					tmpString = "乙";
					break;
			}
			switch(this.global[i].hiddenSendHeavenly)
			{
				case "5" :
					tmpString += "戊";
					break;
				case "6" :
					tmpString += "己";
					break;
				case "7" :
					tmpString += "庚";
					break;
				case "8" :
					tmpString += "辛";
					break;
				case "9" :
					tmpString += "壬";
					break;
				case "10" :
					tmpString += "癸";
					break;
				case "4" :
					tmpString += "丁";
					break;
				case "3" :
					tmpString += "丙";
					break;
				case "2" :
					tmpString += "乙";
					break;
			}
			switch(this.global[i].numberOfVena)
			{
				case 9 :
					context.translate(styleDisc.width / 42 * 21, styleDisc.height / 7);
					
					context.textAlign = "center";
					context.textBaseline = "bottom";
					
					context.fillText(tmpString, 0, -10);
					context.strokeText(tmpString, 0, -10);
					break;
				case 2 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 42 * 11);
					
					context.textAlign = "left";
					context.textBaseline = "middle";
					
					context.fillText(tmpString, 10, 0);
					context.strokeText(tmpString, 10, 0);
					break;
				case 7 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 42 * 21);
					
					context.textAlign = "left";
					context.textBaseline = "middle";
					
					context.fillText(tmpString, 10, 0);
					context.strokeText(tmpString, 10, 0);
					break;
				case 6 :
					context.translate(styleDisc.width / 7 * 6, styleDisc.height / 42 * 31);
					
					context.textAlign = "left";
					context.textBaseline = "middle";
					
					context.fillText(tmpString, 10, 0);
					context.strokeText(tmpString, 10, 0);
					break;
				case 1 :
					context.translate(styleDisc.width / 42 * 21, styleDisc.height / 7 * 6);
					
					context.textAlign = "center";
					context.textBaseline = "top";
					
					context.fillText(tmpString, 0, 10);
					context.strokeText(tmpString, 0, 10);
					break;
				case 8 :
					context.translate(styleDisc.width / 7, styleDisc.height / 42 * 31);
					
					context.textAlign = "right";
					context.textBaseline = "middle";
					
					context.fillText(tmpString, -10, 0);
					context.strokeText(tmpString, -10, 0);
					break;
				case 3 :
					context.translate(styleDisc.width / 7, styleDisc.height / 42 * 21);
					
					context.textAlign = "right";
					context.textBaseline = "middle";
					
					context.fillText(tmpString, -10, 0);
					context.strokeText(tmpString, -10, 0);
					break;
				case 4 :
					context.translate(styleDisc.width / 7, styleDisc.height / 42 * 11);
					
					context.textAlign = "right";
					context.textBaseline = "middle";
					
					context.fillText(tmpString, -10, 0);
					context.strokeText(tmpString, -10, 0);
					break;
			}
			
			context.restore();
		}
	},
	checkVoid : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			this.global[i].checkVoid();
		}
	},
	drawVoid : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			this.global[i].drawVoid();
		}
	},
	checkPattern : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			this.global[i].checkPattern();
		}
	},
	drawPattern : function ()
	{
		for (var i = 0; i < 8; ++i)
		{
			this.global[i].drawPattern();
		}
	}
};
styleDisc.width = screen.availWidth;
styleDisc.height = screen.availHeight;
one.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
two.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
three.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
four.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
six.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
seven.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
eight.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";
nine.style.borderColor = "rgba(" + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", " + (Math.random() * 255 + 1) + ", 1.0)";

function drawTime()
{
	context.save();
	
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	context.font = "bold " + styleDisc.width / 70 + "px consolas";
	context.lineWidth = 1;
	context.textAlign = "right";
	context.textBaseline = "middle";
	
	context.translate(styleDisc.width, 0);
	
	switch(localStorage.getItem("year_heavenly"))
	{
		case "1" :
			context.fillText("甲", 0, styleDisc.width / 70);
			break;
		case "2" :
			context.fillText("乙", 0, styleDisc.width / 70);
			break;
		case "3" :
			context.fillText("丙", 0, styleDisc.width / 70);
			break;
		case "4" :
			context.fillText("丁", 0, styleDisc.width / 70);
			break;
		case "5" :
			context.fillText("戊", 0, styleDisc.width / 70);
			break;
		case "6" :
			context.fillText("己", 0, styleDisc.width / 70);
			break;
		case "7" :
			context.fillText("庚", 0, styleDisc.width / 70);
			break;
		case "8" :
			context.fillText("辛", 0, styleDisc.width / 70);
			break;
		case "9" :
			context.fillText("壬", 0, styleDisc.width / 70);
			break;
		case "10" :
			context.fillText("癸", 0, styleDisc.width / 70);
			break;
	}
	switch(localStorage.getItem("year_earthlyBranch"))
	{
		case "1" :
			context.fillText("子", 0, styleDisc.width / 35);
			break;
		case "2" :
			context.fillText("丑", 0, styleDisc.width / 35);
			break;
		case "3" :
			context.fillText("寅", 0, styleDisc.width / 35);
			break;
		case "4" :
			context.fillText("卯", 0, styleDisc.width / 35);
			break;
		case "5" :
			context.fillText("辰", 0, styleDisc.width / 35);
			break;
		case "6" :
			context.fillText("巳", 0, styleDisc.width / 35);
			break;
		case "7" :
			context.fillText("午", 0, styleDisc.width / 35);
			break;
		case "8" :
			context.fillText("未", 0, styleDisc.width / 35);
			break;
		case "9" :
			context.fillText("申", 0, styleDisc.width / 35);
			break;
		case "10" :
			context.fillText("酉", 0, styleDisc.width / 35);
			break;
		case "11" :
			context.fillText("戌", 0, styleDisc.width / 35);
			break;
		case "12" :
			context.fillText("亥", 0, styleDisc.width / 35);
			break;
	}
	switch(localStorage.getItem("month_heavenly"))
	{
		case "1" :
			context.fillText("甲", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "2" :
			context.fillText("乙", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "3" :
			context.fillText("丙", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "4" :
			context.fillText("丁", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "5" :
			context.fillText("戊", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "6" :
			context.fillText("己", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "7" :
			context.fillText("庚", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "8" :
			context.fillText("辛", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "9" :
			context.fillText("壬", -styleDisc.width / 70, styleDisc.width / 70);
			break;
		case "10" :
			context.fillText("癸", -styleDisc.width / 70, styleDisc.width / 70);
			break;
	}
	switch(localStorage.getItem("month_earthlyBranch"))
	{
		case "1" :
			context.fillText("子", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "2" :
			context.fillText("丑", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "3" :
			context.fillText("寅", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "4" :
			context.fillText("卯", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "5" :
			context.fillText("辰", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "6" :
			context.fillText("巳", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "7" :
			context.fillText("午", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "8" :
			context.fillText("未", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "9" :
			context.fillText("申", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "10" :
			context.fillText("酉", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "11" :
			context.fillText("戌", -styleDisc.width / 70, styleDisc.width / 35);
			break;
		case "12" :
			context.fillText("亥", -styleDisc.width / 70, styleDisc.width / 35);
			break;
	}
	switch(localStorage.getItem("day_heavenly"))
	{
		case "1" :
			context.fillText("甲", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "2" :
			context.fillText("乙", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "3" :
			context.fillText("丙", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "4" :
			context.fillText("丁", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "5" :
			context.fillText("戊", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "6" :
			context.fillText("己", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "7" :
			context.fillText("庚", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "8" :
			context.fillText("辛", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "9" :
			context.fillText("壬", -styleDisc.width / 35, styleDisc.width / 70);
			break;
		case "10" :
			context.fillText("癸", -styleDisc.width / 35, styleDisc.width / 70);
			break;
	}
	switch(localStorage.getItem("day_earthlyBranch"))
	{
		case "1" :
			context.fillText("子", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "2" :
			context.fillText("丑", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "3" :
			context.fillText("寅", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "4" :
			context.fillText("卯", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "5" :
			context.fillText("辰", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "6" :
			context.fillText("巳", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "7" :
			context.fillText("午", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "8" :
			context.fillText("未", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "9" :
			context.fillText("申", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "10" :
			context.fillText("酉", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "11" :
			context.fillText("戌", -styleDisc.width / 35, styleDisc.width / 35);
			break;
		case "12" :
			context.fillText("亥", -styleDisc.width / 35, styleDisc.width / 35);
			break;
	}
	switch(localStorage.getItem("hour_heavenly"))
	{
		case "1" :
			context.fillText("甲", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "2" :
			context.fillText("乙", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "3" :
			context.fillText("丙", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "4" :
			context.fillText("丁", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "5" :
			context.fillText("戊", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "6" :
			context.fillText("己", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "7" :
			context.fillText("庚", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "8" :
			context.fillText("辛", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "9" :
			context.fillText("壬", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
		case "10" :
			context.fillText("癸", -styleDisc.width / 70 * 3, styleDisc.width / 70);
			break;
	}
	switch(localStorage.getItem("hour_earthlyBranch"))
	{
		case "1" :
			context.fillText("子", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "2" :
			context.fillText("丑", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "3" :
			context.fillText("寅", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "4" :
			context.fillText("卯", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "5" :
			context.fillText("辰", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "6" :
			context.fillText("巳", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "7" :
			context.fillText("午", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "8" :
			context.fillText("未", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "9" :
			context.fillText("申", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "10" :
			context.fillText("酉", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "11" :
			context.fillText("戌", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
		case "12" :
			context.fillText("亥", -styleDisc.width / 70 * 3, styleDisc.width / 35);
			break;
	}
	
	context.restore();
}
function drawRectangle()
{
	context.save();
	
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	context.lineWidth = 10;
	context.lineCap = "square";
	
	context.beginPath();
	
	context.strokeRect(styleDisc.width / 7, styleDisc.height / 7, styleDisc.width / 7 * 5, styleDisc.height / 7 * 5);
	context.restore();
}
function drawJiugong()
{
	context.save();
	
	context.lineWidth = 10;
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	
	context.beginPath();
	context.moveTo(styleDisc.width / 7 + 5, styleDisc.height / 21 * 8);
	context.lineTo(styleDisc.width / 7 * 6 - 5, styleDisc.height / 21 * 8);
	context.stroke();
	context.beginPath();
	context.moveTo(styleDisc.width / 7 + 5, styleDisc.height / 21 * 13);
	context.lineTo(styleDisc.width / 7 * 6 - 5, styleDisc.height / 21 * 13);
	context.stroke();
	context.beginPath();
	context.moveTo(styleDisc.width / 21 * 8, styleDisc.height / 7 + 5);
	context.lineTo(styleDisc.width / 21 * 8, styleDisc.height / 7 * 6 - 5);
	context.stroke();
	context.moveTo(styleDisc.width / 21 * 13, styleDisc.height / 7 + 5);
	context.lineTo(styleDisc.width / 21 * 13, styleDisc.height / 7 * 6 - 5);
	context.stroke();
	context.restore();
}
function setStagecoach()
{
	switch(localStorage.getItem("hour_earthlyBranch"))
	{
		case "1" :
		case "5" :
		case "9" :
			stagecoachPosition = "NE";
			break;
		case "2" :
		case "6" :
		case "10" :
			stagecoachPosition = "NW";
			break;
		case "3" :
		case "7" :
		case "11" :
			stagecoachPosition = "SW";
			break;
		case "4" :
		case "8" :
		case "12" :
			stagecoachPosition = "SE";
			break;
	}
}
function drawStagecoach()
{
	context.save();
	
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.font = "bold 100px consolas";
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	context.lineWidth = 1;
	
	switch(stagecoachPosition)
	{
		case "SW":
			context.fillStyle = darkYellow;
			
			context.translate(styleDisc.width / 7 * 6, styleDisc.height / 7);
			context.fillText("馬", 50, -50);
			context.strokeText("馬", 50, -50);
			break;
		case "NW":
			context.fillStyle = white;
			
			context.translate(styleDisc.width / 7 * 6, styleDisc.height / 7 * 6);
			context.fillText("馬", 50, 50);
			context.strokeText("馬", 50, 50);
			break;
		case "NE":
			context.fillStyle = lightYellow;
			
			context.translate(styleDisc.width / 7, styleDisc.height / 7 * 6);
			context.fillText("馬", -50, 50);
			context.strokeText("馬", -50, 50);
			break;
		case "SE":
			context.fillStyle = darkGreen;
			
			context.translate(styleDisc.width / 7, styleDisc.height / 7);
			context.fillText("馬", -50, -50);
			context.strokeText("馬", -50, -50);
			break;
	}
	
	context.restore();
}
function drawNumberOfVena()
{
	var numberOfVena_order = [5, 6, 7, 8, 9, 1, 2, 3, 4];
	var offset = numberOfBoard - 5;
	offset = offset < 0 ? offset + 9 : offset;
	
	context.save();
	
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	context.lineWidth = 1;
	context.font = "bold 50px consolas";
	context.textAlign = "right";
	context.textBaseline = "top";
	
	context.translate(styleDisc.width / 21 * 13, styleDisc.height / 21 * 8);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(styleDisc.width / 21 * 5, styleDisc.height / 21 * 5);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(0, -styleDisc.height / 21 * 5);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(-styleDisc.width / 21 * 10, styleDisc.height / 21 * 5);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(styleDisc.width / 21 * 5, -styleDisc.height / 21 * 10);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(0, styleDisc.height / 21 * 10);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(styleDisc.width / 21 * 5, -styleDisc.height / 21 * 10);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(-styleDisc.width / 21 * 10, styleDisc.height / 21 * 5);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	offset++;
	offset = offset > 8 ? offset - 9 : offset;
	
	context.translate(0, -styleDisc.height / 21 * 5);
	
	switch(offset)
	{
		case 0:
			context.fillStyle = darkYellow;
	
			context.fillText("5", -10, 10);
			context.strokeText("5", -10, 10);
			break;
		case 1:
			context.fillStyle = white;
	
			context.fillText("6", -10, 10);
			context.strokeText("6", -10, 10);
			break;
		case 2:
			context.fillStyle = white;
	
			context.fillText("7", -10, 10);
			context.strokeText("7", -10, 10);
			break;
		case 3:
			context.fillStyle = lightYellow;
	
			context.fillText("8", -10, 10);
			context.strokeText("8", -10, 10);
			break;
		case 4:
			context.fillStyle = darkRed;
	
			context.fillText("9", -10, 10);
			context.strokeText("9", -10, 10);
			break;
		case 5:
			context.fillStyle = blue;
	
			context.fillText("1", -10, 10);
			context.strokeText("1", -10, 10);
			break;
		case 6:
			context.fillStyle = darkYellow;
	
			context.fillText("2", -10, 10);
			context.strokeText("2", -10, 10);
			break;
		case 7:
			context.fillStyle = lightGreen;
	
			context.fillText("3", -10, 10);
			context.strokeText("3", -10, 10);
			break;
		case 8:
			context.fillStyle = darkGreen;
	
			context.fillText("4", -10, 10);
			context.strokeText("4", -10, 10);
			break;
	}
	
	context.restore();
}
function drawYinYangEscapeAndNumberOfBoard()
{
	context.save();
	
	context.lineWidth = 1;
	context.font = "bold 50px consolas";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	
	context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 8);
	
	var _yinYangEscape, _numberOfBoard;
	
	switch(localStorage.getItem("yinYangEscape"))
	{
		case "yin" :
			_yinYangEscape = "陰";
			break;
		case "yang" :
			_yinYangEscape = "陽";
			break;
	}
	switch(numberOfBoard)
	
	{
		case 1 :
			_numberOfBoard = "一";
			break;
		case 2 :
			_numberOfBoard = "二";
			break;
		case 3 :
			_numberOfBoard = "三";
			break;
		case 4 :
			_numberOfBoard = "四";
			break;
		case 5 :
			_numberOfBoard = "五";
			break;
		case 6 :
			_numberOfBoard = "六";
			break;
		case 7 :
			_numberOfBoard = "七";
			break;
		case 8 :
			_numberOfBoard = "八";
			break;
		case 9 :
			_numberOfBoard = "九";
			break;
	}
	
	context.fillText(_yinYangEscape + _numberOfBoard + "局", 10, 10);
	
	context.restore();
}
function increaseHeavenlyAndEarthlyBranch(_heavenly_, _earthlyBranch_)
{
	while(_heavenly_ != 1)
	{
		if (_earthlyBranch_ == 1)
		{
			_earthlyBranch_ = 12;
		}
		else
		{
			--_earthlyBranch_;
		}
		
		--_heavenly_;
	}
	
	return _earthlyBranch_;
}
function setXunShou()
{
	var _heavenly, _earthlyBranch, _xunShou;
	
	_heavenly = parseInt(localStorage.getItem("hour_heavenly"));
	_earthlyBranch = parseInt(localStorage.getItem("hour_earthlyBranch"));
	_xunShou = increaseHeavenlyAndEarthlyBranch(_heavenly, _earthlyBranch);
	
	switch(_xunShou)
	{
		case 1 :
			xunShou = 5;
			xunShou_earthlyBranch = 1;
			break;
		case 3 :
			xunShou = 10;
			xunShou_earthlyBranch = 3;
			break;
		case 5 :
			xunShou = 9;
			xunShou_earthlyBranch = 5;
			break;
		case 7 :
			xunShou = 8;
			xunShou_earthlyBranch = 7;
			break;
		case 9 :
			xunShou = 7;
			xunShou_earthlyBranch = 9;
			break;
		case 11 :
			xunShou = 6;
			xunShou_earthlyBranch = 11;
			break;
	}
}
function drawXunShou()
{
	context.save();
	
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	context.lineWidth = 1;
	context.textAlign = "left";
	context.textBaseline = "top";
	context.font = "bold 50px consolas";
	
	context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 8);
	
	switch(xunShou)
	{
		case 5 :
			context.fillText("甲子戊旬", 10, 60);
			break;
		case 6 :
			context.fillText("甲戌己旬", 10, 60);
			break;
		case 7 :
			context.fillText("甲申庚旬", 10, 60);
			break;
		case 8 :
			context.fillText("甲午辛旬", 10, 60);
			break;
		case 9 :
			context.fillText("甲辰壬旬", 10, 60);
			break;
		case 10 :
			context.fillText("甲寅癸旬", 10, 60);
			break;
	}
	
	context.restore();
}
function drawValueStarAndValueEnableGate()
{
	context.save();
	
	context.font = "bold 50px consolas";
	context.lineWidth = 1;
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	context.textAlign = "left";
	context.textBaseline = "bottom";
	
	context.translate(styleDisc.width / 21 * 8, styleDisc.height / 21 * 13);
	
	switch(valueStar)
	{
		case "9" :
			context.fillText("英", 10, -10);
			break;
		case "2" :
			context.fillText("芮", 10, -10);
			break;
		case "7" :
			context.fillText("柱", 10, -10);
			break;
		case "6" :
			context.fillText("心", 10, -10);
			break;
		case "1" :
			context.fillText("蓬", 10, -10);
			break;
		case "8" :
			context.fillText("任", 10, -10);
			break;
		case "3" :
			context.fillText("沖", 10, -10);
			break;
		case "4" :
			context.fillText("輔", 10, -10);
			break;
	}
	
	context.translate(styleDisc.width / 21 * 5, 0);
	
	context.textAlign = "right";
	
	switch(valueEnableGate)
	{
		case "9" :
			context.fillText("景", -10, -10);
			break;
		case "2" :
			context.fillText("死", -10, -10);
			break;
		case "7" :
			context.fillText("驚", -10, -10);
			break;
		case "6" :
			context.fillText("開", -10, -10);
			break;
		case "1" :
			context.fillText("休", -10, -10);
			break;
		case "8" :
			context.fillText("生", -10, -10);
			break;
		case "3" :
			context.fillText("傷", -10, -10);
			break;
		case "4" :
			context.fillText("杜", -10, -10);
			break;
	}
	
	context.restore();
}
function editHeavenly()
{
	localStorage.setItem("copy_hour_heavenly", localStorage.getItem("hour_heavenly"));
	localStorage.setItem("copy_second_heavenly", localStorage.getItem("second_heavenly"));
	localStorage.setItem("copy_day_heavenly", localStorage.getItem("day_heavenly"));
	
	if (localStorage.getItem("hour_heavenly") == "1")
	{
		localStorage.setItem("hour_heavenly", xunShou);
	}
	if (localStorage.getItem("second_heavenly") == "1")
	{
		localStorage.setItem("second_heavenly", xunShou);
	}
	if (localStorage.getItem("day_heavenly") == "1")
	{
		localStorage.setItem("day_heavenly", xunShou);
	}
}

drawTime();
drawRectangle();
drawJiugong();
setStagecoach();
drawStagecoach();
drawNumberOfVena();
drawYinYangEscapeAndNumberOfBoard();
setXunShou();
drawXunShou();
editHeavenly();

var siteHeavenlies = new SiteHeavenlies(numberOfBoard);
var palace1 = new Palace(1);
var palace2 = new Palace(2);
var palace3 = new Palace(3);
var palace4 = new Palace(4);
var palace6 = new Palace(6);
var palace7 = new Palace(7);
var palace8 = new Palace(8);
var palace9 = new Palace(9);
var map = new Map(palace1, palace2, palace3, palace4, palace6, palace7, palace8, palace9);
var skyPanHeavenlies = new SkyPanHeavenlies(xunShou);
var gods = new Gods(xunShou);
var stars = new Stars();

if (palace2.siteSendHeavenly==xunShou)
{
	ifSkyPanSendHeavenlyInXunShou = true;
}

var doors = new Doors();
var hiddenHeavenlies = new HiddenHeavenlies();

siteHeavenlies.setSiteHeavenliesPosition();
skyPanHeavenlies.transformXunShou();
skyPanHeavenlies.setSkyPanHeavenliesPosition();
gods.setGodsPosition();
drawValueStarAndValueEnableGate();
stars.setStarsPosition();
doors.setDoorsPosition();
editHeavenly();
hiddenHeavenlies.setHiddenHeavenliesPosition();
map.drawSiteHeavenlies();
map.drawSkyPanHeavenlies();
map.drawGods();
map.drawStars();
map.drawDoors();
map.drawHiddenHeavenlies();
editHeavenly();
map.checkVoid();
map.drawVoid();
map.checkPattern();
map.drawPattern();
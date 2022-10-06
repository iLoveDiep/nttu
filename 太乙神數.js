var orderOfSixteenthHouse = [11.5, 12, 1, 2, 2.5, 3, 4, 5, 5.5, 6, 7, 8, 8.5, 9, 10, 11];
var styleDisc = document.getElementById("styleDisc");
var context = styleDisc.getContext("2d");
var numbers = parseInt(localStorage.getItem("_numbers"));
var numberOfBoard = (numbers % 72 == 0) ? 72 : (numbers % 72);
var darkRed = "rgba(255, 0, 0, 1.0)";
var darkYellow = "rgba(200, 200, 0, 1.0)";
var white = "rgba(255, 255, 255, 1.0)";
var black = "rgba(0, 0, 0, 1.0)";
var lightYellow = "rgba(255, 255, 0, 1.0)";
var lightGreen = "rgba(0, 255, 0, 1.0)";
var darkGreen = "rgba(0, 200, 0, 1.0)";
var blue = "rgba(128, 128, 255, 1.0)";
var lightRed = "rgba(255, 128, 128, 1.0)";
var god, scheming, _taiYi_, wenChang, firstStrike, fixedSight;
var mainCalculation = 0;
var customerCalculation = 0;
var determinded = 0;
var taiYi = document.getElementById("taiYi");
var junJi = document.getElementById("junJi");
var chenJi = document.getElementById("chenJi");
var fiveBlessings = document.getElementById("fiveBlessings");
var greatTour = document.getElementById("greatTour");
var smallTour = document.getElementById("smallTour");
var fourGods = document.getElementById("fourGods");
var tianYi = document.getElementById("tianYi");
var B = document.getElementById("B");
var straightCharacter = document.getElementById("straightCharacter");
var flyingCharacter = document.getElementById("flyingCharacter");
var yangJiu = document.getElementById("yangJiu");
var oneHundredSix = document.getElementById("oneHundredSix");
var date = new Date();

styleDisc.width = screen.availWidth;
styleDisc.height = screen.availHeight;

var House = function (_site_earthlyBranchOrFourDimensional_, _numberOfVena_)
{
	this.site_earthlyBranchOrFourDimensional = _site_earthlyBranchOrFourDimensional_;
	this.starsAndGods = [];
	this.numberOfVena = _numberOfVena_;
	this.contentOfStarsAndGods1 = "";
	this.contentOfStarsAndGods2 = "";
	this.contentOfStarsAndGods3 = "";
};
House.prototype =
{
	checkTaiSui : function ()
	{
		var _year_earthlyBranch = parseInt(localStorage.getItem("_year_earthlyBranch"));
		
		if (this.site_earthlyBranchOrFourDimensional == _year_earthlyBranch)
		{
			this.starsAndGods.push("太歲");
		}
	},
	checkGod : function ()
	{
		var _hour_earthlyBranch = parseInt(localStorage.getItem("_hour_earthlyBranch"));
		var _god;
		
		switch(_hour_earthlyBranch)
		{
			case 1 :
				_god = 2;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 3;
				}
				break;
			case 2 :
				_god = 1;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 2;
				}
				break;
			case 3 :
				_god = 12;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 1;
				}
				break;
			case 4 :
				_god = 11;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 15;
				}
				break;
			case 5 :
				_god = 10;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 14;
				}
				break;
			case 6 :
				_god = 9;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 13;
				}
				break;
			case 7 :
				_god = 8;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 11;
				}
				break;
			case 8 :
				_god = 7;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 10;
				}
				break;
			case 9 :
				_god = 6;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 9;
				}
				break;
			case 10 :
				_god = 5;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 7;
				}
				break;
			case 11 :
				_god = 4;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 6;
				}
				break;
			case 12 :
				_god = 3;
				
				if (this.site_earthlyBranchOrFourDimensional == _god)
				{
					this.starsAndGods.push("合神");
					
					god = 5;
				}
				break;
		}
	},
	checkScheming : function ()
	{
		var _earthlyBranches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var _scheming;
		
		if (localStorage.getItem("_yinYangEscape") == "yang")
		{
			var _orderOfScheming = [3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4];
		}
		else
		{
			var _orderOfScheming = [9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10];
		}
		
		for (var counter1 = 0; counter1 < 12; ++counter1)
		{
			if (_earthlyBranches[counter1] == parseInt(localStorage.getItem("_hour_earthlyBranch")))
			{
				_scheming = _earthlyBranches[counter1];
			}
		}
		
		if (_scheming == this.site_earthlyBranchOrFourDimensional)
		{
			this.starsAndGods.push("計神");
			
			scheming = translate(this.site_earthlyBranchOrFourDimensional);
		}
	},
	checkTaiYi : function ()
	{
		var _quotient, _remainder, _orderOfNumberOfVena, _taiYi;
		
		if (numbers % 24 <= 3)
		{
			_remainder = numbers % 24;
			_quotient = (numbers - _remainder) / 24 % 8;
		}
		else
		{
			_remainder = (numbers % 24) % 3;
			_quotient = ((numbers % 24) - _remainder) / 3;

                        if (_remainder == 0)
		        {
			        _quotient -= 1;
			        _remainder = 3;
		        }
		}
		if (localStorage.getItem("_yinYangEscape") == "yang")
		{
			_orderOfNumberOfVena = [1, 8, 3, 4, 9, 2, 7, 6];
		}
		else
		{
			_orderOfNumberOfVena = [9, 2, 7, 6, 1, 8, 3, 4];
		}
		
		_taiYi = _orderOfNumberOfVena[_quotient];
		
		if (this.numberOfVena == _taiYi)
		{
			this.starsAndGods.push("太乙");
			
			_taiYi_ = _taiYi;
			taiYi.innerText = "太乙 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				taiYi.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				taiYi.innerText += "理地";
			}
			else
			{
				taiYi.innerText += "理人";
			}
		}
	},
	checkWenChang : function ()
	{
		var _remainder, _orderOfSixteenthHouse, _wenChang;
		
		_remainder = numbers % 18;
		
		if (_remainder == 0)
		{
			_remainder = 18;
		}
		if (localStorage.getItem("_yinYangEscape") == "yang")
		{
			_orderOfSixteenthHouse = [9, 10, 11, 11.5, 11.5, 12, 1, 2, 2.5, 3, 4, 5, 5.5, 6, 7, 8, 8.5, 8.5];
		}
		else
		{
			_orderOfSixteenthHouse = [3, 4, 5, 5.5, 6, 7, 8, 8.5, 8.5, 9, 10, 11, 11.5, 11.5, 12, 1, 2, 2.5];
		}
		
		_wenChang = _orderOfSixteenthHouse[_remainder - 1];
		
		if (this.site_earthlyBranchOrFourDimensional == _wenChang)
		{
			this.starsAndGods.push("文昌");
			
			wenChang = translate(this.site_earthlyBranchOrFourDimensional);
		}
	},
	checkMainGeneral : function ()
	{
		var _mainGeneral = (mainCalculation % 10 == 0) ? mainCalculation % 9 : mainCalculation % 10;
		
		if (this.numberOfVena == _mainGeneral)
		{
			this.starsAndGods.push("主大將");
		}
	},
	checkChiefOfficer : function ()
	{
		var _chiefOfficer = ((mainCalculation * 3) % 10 == 0) ? (mainCalculation * 3) % 9 : (mainCalculation * 3) % 10;
		
		if (this.numberOfVena == _chiefOfficer)
		{
			this.starsAndGods.push("主參將");
		}
	},
	checkFirstStrike : function ()
	{
		var _startPoint = scheming;
		var _locationOfWenChang = wenChang;
		var _endPoint = 4;
		var _offset = _endPoint - _startPoint;
		var __index;
		
		if (_locationOfWenChang + _offset > 15)
		{
			__index = _locationOfWenChang + _offset - 16;
		}
		else if (_locationOfWenChang + _offset < 0)
		{
			__index = _locationOfWenChang + _offset + 16;
		}
		else
		{
			__index = _locationOfWenChang + _offset;
		}
		
		if (this.site_earthlyBranchOrFourDimensional == orderOfSixteenthHouse[__index])
		{
			this.starsAndGods.push("始擊");
			
			firstStrike = translate(this.site_earthlyBranchOrFourDimensional);
		}
	},
	checkGeneralKe : function ()
	{
		var _generalKe = (customerCalculation % 10 == 0) ? customerCalculation % 9 : customerCalculation % 10;
		
		if (this.numberOfVena == _generalKe)
		{
			this.starsAndGods.push("客大將");
		}
	},
	checkGuestParticipant : function ()
	{
		var _guestParticipant = ((customerCalculation * 3) % 10 == 0) ? (customerCalculation * 3) % 9 : (customerCalculation * 3) % 10;
		
		if (this.numberOfVena == _guestParticipant)
		{
			this.starsAndGods.push("客參將");
		}
	},
	checkFixedSight : function ()
	{
		var _endPoint = translate(parseInt(localStorage.getItem("_hour_earthlyBranch")));
		var _startPoint = god;
		var _locationOfWenChang = wenChang;
		var _offset = _endPoint - _startPoint;
		var __index;
		
		if (_locationOfWenChang + _offset > 15)
		{
			__index = _locationOfWenChang + _offset - 16;
		}
		else if (_locationOfWenChang + _offset < 0)
		{
			__index = _locationOfWenChang + _offset + 16;
		}
		else
		{
			__index = _locationOfWenChang + _offset;
		}
		if (this.site_earthlyBranchOrFourDimensional == orderOfSixteenthHouse[__index])
		{
			this.starsAndGods.push("定目");
			
			fixedSight = translate(this.site_earthlyBranchOrFourDimensional);
		}
	},
	checkDingGeneral : function ()
	{
		var _dingGeneral = (determinded % 10 == 0) ? determinded % 9 : determinded % 10;
		
		if (this.numberOfVena == _dingGeneral)
		{
			this.starsAndGods.push("定大將");
		}
	},
	checkDifiniteGeneral : function ()
	{
		var _difiniteGeneral = ((determinded * 3) % 10 == 0) ? (determinded * 3) % 9 : (determinded * 3) % 10;
		
		if (this.numberOfVena == _difiniteGeneral)
		{
			this.starsAndGods.push("定參將");
		}
	},
	checkJunJi : function ()
	{
		var _orderOfEarthlyBranch = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
		var _quotient, _remainder, _junJi;
		
		if ((numbers + 250) % 360 > 30)
		{
			_remainder = (numbers + 250) % 360 % 30;
			_quotient = ((numbers + 250) % 360 - _remainder) / 30;
		}
		else
		{
			_remainder = (numbers + 250) % 360;
			_quotient = (numbers + 250 - _remainder) / 360;
		}
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 30;
		}
		
		_junJi = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _junJi)
		{
			this.starsAndGods.push("君基");
			
			junJi.innerText = "君基 " + _remainder + "/30 ";
			
			if (_remainder <= 10)
			{
				junJi.innerText += "理天";
			}
			else if (_remainder <= 20)
			{
				junJi.innerText += "理地";
			}
			else
			{
				junJi.innerText += "理人";
			}
		}
	},
	checkChenJi : function ()
	{
		var _chenJi;
		var _orderOfEarthlyBranch = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
		var _remainder = (numbers + 250) % 360 % 36 % 3;
		var _quotient = ((numbers + 250) % 360 % 36 - _remainder) / 3;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_chenJi = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _chenJi)
		{
			this.starsAndGods.push("臣基");
			
			chenJi.innerText = "臣基 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				chenJi.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				chenJi.innerText += "理地";
			}
			else
			{
				chenJi.innerText += "理人";
			}
		}
	},
	checkMinJi : function ()
	{
		var _remainder = (numbers + 250) % 360 % 12;
		var _orderOfEarthlyBranch = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		var _minJi;
		
		if (_remainder == 0)
		{
			_remainder = 12;
		}
		
		_minJi = _orderOfEarthlyBranch[_remainder - 1];
		
		if (this.site_earthlyBranchOrFourDimensional == _minJi)
		{
			this.starsAndGods.push("民基");
		}
	},
	checkFiveBlessings : function ()
	{
		var _fiveBlessings;
		var _orderOfFiveBlessingsPalace = [11.5, 2.5, 5.5, 8.5, null];
		var _remainder = (numbers + 250) % 225 % 45;
		var _quotient = ((numbers + 250) % 225 - _remainder) / 45;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 45;
		}
		
		_fiveBlessings = _orderOfFiveBlessingsPalace[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _fiveBlessings)
		{
			this.starsAndGods.push("五福");
			
			fiveBlessings.innerText = "五福 " + _remainder + "/45 ";
			
			if (_remainder <= 15)
			{
				fiveBlessings.innerText += "理天";
			}
			else if (_remainder <= 30)
			{
				fiveBlessings.innerText += "理地";
			}
			else
			{
				fiveBlessings.innerText += "理人";
			}
		}
	},
	checkGreatTour : function ()
	{
		var _orderOfNumberOfVena = [7, 8, 9, 1, 2, 3, 4, 6];
		var _remainder = (numbers + 34) % 388 % 36;
		var _quotient = ((numbers + 34) % 388 - _remainder) / 36;
		var _greatTour;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 36;
		}
		
		_greatTour = _orderOfNumberOfVena[_quotient];
		
		if (this.numberOfVena == _greatTour)
		{
			this.starsAndGods.push("大遊");
			
			greatTour.innerText = "大遊 " + _remainder + "/36 ";
			
			if (_remainder <= 12)
			{
				greatTour.innerText += "理天";
			}
			else if (_remainder <= 24)
			{
				greatTour.innerText += "理地";
			}
			else
			{
				greatTour.innerText += "理人";
			}
		}
	},
	checkSmallTour : function ()
	{
		var _quotient, _remainder, _smallTour;
		var _orderOfNumberOfVena = [1, 2, 3, 4, 6, 7, 8, 9];
		
		if (numbers % 360 % 24 > 3)
		{
			_remainder = numbers % 360 % 24 % 3;
			_quotient = (numbers % 360 % 24 - _remainder) / 3;
		}
		else
		{
			_remainder = numbers % 360 % 24;
			_quotient = (numbers % 360 - _remainder) / 24;
		}
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_smallTour = _orderOfNumberOfVena[_quotient];
		
		if (this.numberOfVena == _smallTour)
		{
			this.starsAndGods.push("小遊");
			
			smallTour.innerText = "小遊 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				smallTour.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				smallTour.innerText += "理地";
			}
			else
			{
				smallTour.innerText += "理人";
			}
		}
	},
	checkFourGods : function ()
	{
		var _orderOfEarthlyBranch = [12, 7, 3, 4, 5, 10, 9, 1, 6, 11, 8, 2];
		var _remainder = numbers % 360 % 36 % 3;
		var _quotient = (numbers % 360 % 36 - _remainder) / 3;
		var _fourGods;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_fourGods = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _fourGods)
		{
			this.starsAndGods.push("四神");
			
			fourGods.innerText = "四神 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				fourGods.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				fourGods.innerText += "理地";
			}
			else
			{
				fourGods.innerText += "理人";
			}
		}
	},
	checkTianYi : function ()
	{
		var _orderOfEarthlyBranch = [10, 9, 1, 6, 11, 8, 2, 12, 7, 3, 4, 5];
		var _remainder = numbers % 360 % 36 % 3;
		var _quotient = (numbers % 360 % 36 - _remainder) / 3;
		var _tianYi;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_tianYi = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _tianYi)
		{
			this.starsAndGods.push("天乙");
			
			tianYi.innerText = "天乙 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				tianYi.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				tianYi.innerText += "理地";
			}
			else
			{
				tianYi.innerText += "理人";
			}
		}
	},
	checkB : function ()
	{
		var _orderOfEarthlyBranch = [6, 11, 8, 2, 12, 7, 3, 4, 5, 10, 9, 1];
		var _remainder = numbers % 360 % 36 % 3;
		var _quotient = (numbers % 360 % 36 - _remainder) / 3;
		var _B;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_B = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _B)
		{
			this.starsAndGods.push("地乙");
			
			B.innerText = "地乙 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				B.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				B.innerText += "理地";
			}
			else
			{
				B.innerText += "理人";
			}
		}
	},
	checkStraightCharacter : function ()
	{
		var _orderOfEarthlyBranch = [null, 10, 9, 1, 6, 11, 8, 2, 12, 7, 3, 4, 5];
		var _remainder = numbers % 360 % 36 % 3;
		var _quotient = (numbers % 360 % 36 - _remainder) / 3;
		var _straightCharacter;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_straightCharacter = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _straightCharacter)
		{
			this.starsAndGods.push("直符");
			
			straightCharacter.innerText = "直符 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				straightCharacter.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				straightCharacter.innerText += "理地";
			}
			else
			{
				straightCharacter.innerText += "理人";
			}
		}
	},
	checkFlyingCharacter : function ()
	{
		var _orderOfEarthlyBranch = [5, 10, 9, 1, 6, 11, 8, 2, 12, 7, 3, 4];
		var _remainder = numbers % 360 % 36 % 3;
		var _quotient = (numbers % 360 % 36 - _remainder) / 3;
		var _flyingCharacter;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 3;
		}
		
		_flyingCharacter = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _flyingCharacter)
		{
			this.starsAndGods.push("飛符");
			
			flyingCharacter.innerText = "飛符 " + _remainder + "/3 ";
			
			if (_remainder <= 1)
			{
				flyingCharacter.innerText += "理天";
			}
			else if (_remainder <= 2)
			{
				flyingCharacter.innerText += "理地";
			}
			else
			{
				flyingCharacter.innerText += "理人";
			}
		}
	},
	checkYangJiu : function ()
	{
		var _orderOfEarthlyBranch = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
		var _remainder = (12607 + date.getFullYear()) % 4560 % 456 % 13;
		var _quotient = ((12607 + date.getFullYear()) % 4560 % 456 - _remainder) / 13;
		var _yangJiu;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 13;
		}
		
		_yangJiu = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _yangJiu)
		{
			this.starsAndGods.push("陽九");
			
			yangJiu.innerText = "陽九 " + _remainder + "/13 ";
			
			if (_remainder <= 13 / 3)
			{
				yangJiu.innerText += "理天";
			}
			else if (_remainder <= 13 / 3 * 2)
			{
				yangJiu.innerText += "理地";
			}
			else
			{
				yangJiu.innerText += "理人";
			}
		}
	},
	checkOneHundredSix : function ()
	{
		var _orderOfEarthlyBranch = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
		var _remainder = (12607 + date.getFullYear()) % 4320 % 288 % 24;
		var _quotient = ((12607 + date.getFullYear()) % 4320 % 288 - _remainder) / 24;
		var _oneHundredSix;
		
		if (_remainder == 0)
		{
			_quotient -= 1;
			_remainder = 24;
		}
		
		_oneHundredSix = _orderOfEarthlyBranch[_quotient];
		
		if (this.site_earthlyBranchOrFourDimensional == _oneHundredSix)
		{
			this.starsAndGods.push("百六");
			
			oneHundredSix.innerText = "百六 " + _remainder + "/24 ";
			
			if (_remainder <= 8)
			{
				oneHundredSix.innerText += "理天";
			}
			else if (_remainder <= 16)
			{
				oneHundredSix.innerText += "理地";
			}
			else
			{
				oneHundredSix.innerText += "理人";
			}
		}
	},
	drawStarsAndGods : function (_x, _y)
	{
		for(var counter2 = 0; counter2 < this.starsAndGods.length; ++counter2)
		{
			if (counter2 % 3 == 0)
			{
				this.contentOfStarsAndGods1 += this.starsAndGods[counter2] + " ";
			}
			else if (counter2 % 3 == 1)
			{
				this.contentOfStarsAndGods2 += this.starsAndGods[counter2] + " ";
			}
			else
			{
				this.contentOfStarsAndGods3 += this.starsAndGods[counter2] + " ";
			}
		}
		
		context.save();
		
		context.lineWidth = 1;
		context.font = "bold 40px consolas";
		context.textAlign = "center";
		context.textBaseline = "top";
		context.fillStyle = "rgba(0, 0, 0, 1.0)";
		
		context.fillText(this.contentOfStarsAndGods1, _x, _y);
		context.fillText(this.contentOfStarsAndGods2, _x, _y + 40);
		context.fillText(this.contentOfStarsAndGods3, _x, _y + 80);
		context.restore();
	}
};
var map = [new House(11.5, 1), new House(12, 8), new House(1, 8), new House(2, 3), new House(2.5, 3), new House(3, 4), new House(4, 4), new House(5, 9), new House(5.5, 9), new House(6, 2), new House(7, 2), new House(8, 7), new House(8.5, 7), new House(9, 6), new House(10, 6), new House(11, 1)];
taiYi.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
junJi.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
chenJi.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
fiveBlessings.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
greatTour.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
smallTour.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
fourGods.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
tianYi.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
B.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
straightCharacter.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
flyingCharacter.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
yangJiu.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
oneHundredSix.style.borderColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";

function drawRectangle()
{
	context.save();
	
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	context.lineWidth = 10;
	context.lineCap = "square";
	
	context.beginPath();
	context.strokeRect(5, 5, styleDisc.width - 10, styleDisc.height - 10);
	context.restore();
}
function drawSixteenthHouse()
{
	context.save();
	
	context.lineWidth = 10;
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	
	context.beginPath();
	context.moveTo((styleDisc.width + 5) / 5, 5);
	context.lineTo((styleDisc.width + 5) / 5, styleDisc.height - 10);
	context.stroke();
	context.moveTo((styleDisc.width + 5) / 5 * 2, 5);
	context.lineTo((styleDisc.width + 5) / 5 * 2, styleDisc.height - 10);
	context.stroke();
	context.moveTo((styleDisc.width + 5) / 5 * 3, 5);
	context.lineTo((styleDisc.width + 5) / 5 * 3, styleDisc.height - 10);
	context.stroke();
	context.moveTo((styleDisc.width + 5) / 5 * 4, 5);
	context.lineTo((styleDisc.width + 5) / 5 * 4, styleDisc.height - 10);
	context.stroke();
	context.moveTo(5, (styleDisc.height + 5) / 5);
	context.lineTo(styleDisc.width - 10, (styleDisc.height + 5) / 5);
	context.stroke();
	context.moveTo(5, (styleDisc.height + 5) / 5 * 2);
	context.lineTo(styleDisc.width - 10, (styleDisc.height + 5) / 5 * 2);
	context.stroke();
	context.moveTo(5, (styleDisc.height + 5) / 5 * 3);
	context.lineTo(styleDisc.width - 10, (styleDisc.height + 5) / 5 * 3);
	context.stroke();
	context.moveTo(5, (styleDisc.height + 5) / 5 * 4);
	context.lineTo(styleDisc.width - 10, (styleDisc.height + 5) / 5 * 4);
	context.stroke();
	context.clearRect(styleDisc.width / 5 + 7, styleDisc.height / 5 + 7, (styleDisc.width - 15) / 5 * 3, (styleDisc.height - 15) / 5 * 3);
	context.restore();
}
function drawNumberOfVena()
{
	context.save();
	
	context.strokeStyle = "rgba(0, 0, 0, 1.0)";
	context.lineWidth = 1;
	context.font = "bold 40px consolas";
	context.textAlign = "right";
	context.textBaseline = "bottom";
	
	context.translate(styleDisc.width / 5 * 4 + 7, styleDisc.height / 5 + 7);
	
	context.fillStyle = darkRed;
	
	context.fillText("9", -12, -10);
	context.strokeText("9", -12, -10);
	context.translate(-styleDisc.width / 5, 0);
	
	context.fillText("9", -12, -10);
	context.strokeText("9", -12, -10);
	context.translate(-styleDisc.width / 5, 0);
	
	context.fillStyle = darkGreen;
	
	context.fillText("4", -12, -10);
	context.strokeText("4", -12, -10);
	context.translate(-styleDisc.width / 5, 0);
	
	context.fillStyle = darkGreen;
	
	context.fillText("4", -12, -10);
	context.strokeText("4", -12, -10);
	context.translate(0, styleDisc.height / 5);
	
	context.fillStyle = lightGreen;
	
	context.fillText("3", -12, -10);
	context.strokeText("3", -12, -10);
	context.translate(0, styleDisc.height / 5);
	
	context.fillStyle = lightGreen;
	
	context.fillText("3", -12, -10);
	context.strokeText("3", -12, -10);
	context.translate(0, styleDisc.height / 5);
	
	context.fillStyle = lightYellow;
	
	context.fillText("8", -12, -10);
	context.strokeText("8", -12, -10);
	context.translate(0, styleDisc.height / 5);
	
	context.fillStyle = lightYellow;
	
	context.fillText("8", -12, -10);
	context.strokeText("8", -12, -10);
	context.translate(styleDisc.width / 5, 0);
	
	context.fillStyle = blue;
	
	context.fillText("1", -12, -10);
	context.strokeText("1", -12, -10);
	context.translate(styleDisc.width / 5, 0);
	
	context.fillStyle = blue;
	
	context.fillText("1", -12, -10);
	context.strokeText("1", -12, -10);
	context.translate(styleDisc.width / 5, 0);
	
	context.fillStyle = white;
	
	context.fillText("6", -12, -10);
	context.strokeText("6", -12, -10);
	context.translate(styleDisc.width / 5 - 7, 0);
	
	context.fillStyle = white;
	
	context.fillText("6", -12, -10);
	context.strokeText("6", -12, -10);
	context.translate(0, -styleDisc.height / 5);
	
	context.fillStyle = white;
	
	context.fillText("7", -12, -10);
	context.strokeText("7", -12, -10);
	context.translate(0, -styleDisc.height / 5);
	
	context.fillStyle = white;
	
	context.fillText("7", -12, -10);
	context.strokeText("7", -12, -10);
	context.translate(0, -styleDisc.height / 5);
	
	context.fillStyle = darkYellow;
	
	context.fillText("2", -12, -10);
	context.strokeText("2", -12, -10);
	context.translate(0, -styleDisc.height / 5);
	
	context.fillStyle = darkYellow;
	
	context.fillText("2", -12, -10);
	context.strokeText("2", -12, -10);
	context.restore();
}
function drawYinYangEscapeAndNumberOfBoardAndNumbers()
{
	context.save();
	
	context.lineWidth = 1;
	context.font = "bold 50px consolas";
	context.textAlign = "left";
	context.textBaseline = "bottom";
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	
	context.translate(styleDisc.width / 5 + 7, styleDisc.height / 5 * 4 + 7);
	
	var _yinYangEscape, _numberOfBoard;
	
	switch(localStorage.getItem("_yinYangEscape"))
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
		case 10 :
			_numberOfBoard = "十";
			break;
		case 11 :
			_numberOfBoard = "十一";
			break;
		case 12 :
			_numberOfBoard = "十二";
			break;
		case 13 :
			_numberOfBoard = "十三";
			break;
		case 14 :
			_numberOfBoard = "十四";
			break;
		case 15 :
			_numberOfBoard = "十五";
			break;
		case 16 :
			_numberOfBoard = "十六";
			break;
		case 17 :
			_numberOfBoard = "十七";
			break;
		case 18 :
			_numberOfBoard = "十八";
			break;
		case 19 :
			_numberOfBoard = "十九";
			break;
		case 20 :
			_numberOfBoard = "二十";
			break;
		case 21 :
			_numberOfBoard = "二十一";
			break;
		case 22 :
			_numberOfBoard = "二十二";
			break;
		case 23 :
			_numberOfBoard = "二十三";
			break;
		case 24 :
			_numberOfBoard = "二十四";
			break;
		case 25 :
			_numberOfBoard = "二十五";
			break;
		case 26 :
			_numberOfBoard = "二十六";
			break;
		case 27 :
			_numberOfBoard = "二十七";
			break;
		case 28 :
			_numberOfBoard = "二十八";
			break;
		case 29 :
			_numberOfBoard = "二十九";
			break;
		case 30 :
			_numberOfBoard = "三十";
			break;
		case 31 :
			_numberOfBoard = "三十一";
			break;
		case 32 :
			_numberOfBoard = "三十二";
			break;
		case 33 :
			_numberOfBoard = "三十三";
			break;
		case 34 :
			_numberOfBoard = "三十四";
			break;
		case 35 :
			_numberOfBoard = "三十五";
			break;
		case 36 :
			_numberOfBoard = "三十六";
			break;
		case 37 :
			_numberOfBoard = "三十七";
			break;
		case 38 :
			_numberOfBoard = "三十八";
			break;
		case 39 :
			_numberOfBoard = "三十九";
			break;
		case 40 :
			_numberOfBoard = "四十";
			break;
		case 41 :
			_numberOfBoard = "四十一";
			break;
		case 42 :
			_numberOfBoard = "四十二";
			break;
		case 43 :
			_numberOfBoard = "四十三";
			break;
		case 44 :
			_numberOfBoard = "四十四";
			break;
		case 45 :
			_numberOfBoard = "四十五";
			break;
		case 46 :
			_numberOfBoard = "四十六";
			break;
		case 47 :
			_numberOfBoard = "四十七";
			break;
		case 48 :
			_numberOfBoard = "四十八";
			break;
		case 49 :
			_numberOfBoard = "四十九";
			break;
		case 50 :
			_numberOfBoard = "五十";
			break;
		case 51 :
			_numberOfBoard = "五十一";
			break;
		case 52 :
			_numberOfBoard = "五十二";
			break;
		case 53 :
			_numberOfBoard = "五十三";
			break;
		case 54 :
			_numberOfBoard = "五十四";
			break;
		case 55 :
			_numberOfBoard = "五十五";
			break;
		case 56 :
			_numberOfBoard = "五十六";
			break;
		case 57 :
			_numberOfBoard = "五十七";
			break;
		case 58 :
			_numberOfBoard = "五十八";
			break;
		case 59 :
			_numberOfBoard = "五十九";
			break;
		case 60 :
			_numberOfBoard = "六十";
			break;
		case 61 :
			_numberOfBoard = "六十一";
			break;
		case 62 :
			_numberOfBoard = "六十二";
			break;
		case 63 :
			_numberOfBoard = "六十三";
			break;
		case 64 :
			_numberOfBoard = "六十四";
			break;
		case 65 :
			_numberOfBoard = "六十五";
			break;
		case 66 :
			_numberOfBoard = "六十六";
			break;
		case 67 :
			_numberOfBoard = "六十七";
			break;
		case 68 :
			_numberOfBoard = "六十八";
			break;
		case 69 :
			_numberOfBoard = "六十九";
			break;
		case 70 :
			_numberOfBoard = "七十";
			break;
		case 71 :
			_numberOfBoard = "七十一";
			break;
		case 72 :
			_numberOfBoard = "七十二";
			break;
	}
	
	context.fillText(_yinYangEscape + "遁" + _numberOfBoard + "局", 12, -10);
	context.fillText("太乙積時:" + numbers + "時", 12, -60);
	context.restore()
}
function checkMainCalculationAndCustomCalculationAndDeterminded()
{
	var _orderOfNumberOfVena = [1, 8, 3, 4, 9, 2, 7, 6, 1, 8, 3, 4, 9, 2, 7, 6];
	var __locationOfWenChang = wenChang;
	var __locationOfFirstStrike = firstStrike;
	var __locationOfFixedSight = fixedSight;
	var __locationOfTaiYi = _taiYi_;
	
	switch(__locationOfTaiYi)
	{
		case 1 :
			__locationOfTaiYi = 0;
			break;
		case 8 :
			__locationOfTaiYi = 1;
			break;
		case 3 :
			__locationOfTaiYi = 2;
			break;
		case 4 :
			__locationOfTaiYi = 3;
			break;
		case 9 :
			__locationOfTaiYi = 4;
			break;
		case 2 :
			__locationOfTaiYi = 5;
			break;
		case 7 :
			__locationOfTaiYi = 6;
			break;
		case 6 :
			__locationOfTaiYi = 7;
			break;
	}
	switch(__locationOfWenChang)
	{
		case 15 :
		case 0 :
			__locationOfWenChang = 0;
			break;
		case 1 :
		case 2 :
			__locationOfWenChang = 1;
			break;
		case 3 :
		case 4 :
			__locationOfWenChang = 2;
			break;
		case 5 :
		case 6 :
			__locationOfWenChang = 3;
			break;
		case 7 :
		case 8 :
			__locationOfWenChang = 4;
			break;
		case 9 :
		case 10 :
			__locationOfWenChang = 5;
			break;
		case 11 :
		case 12 :
			__locationOfWenChang = 6;
			break;
		case 13 :
		case 14 :
			__locationOfWenChang = 7;
			break;
	}
	switch(__locationOfFirstStrike)
	{
		case 15 :
		case 0 :
			__locationOfFirstStrike = 0;
			break;
		case 1 :
		case 2 :
			__locationOfFirstStrike = 1;
			break;
		case 3 :
		case 4 :
			__locationOfFirstStrike = 2;
			break;
		case 5 :
		case 6 :
			__locationOfFirstStrike = 3;
			break;
		case 7 :
		case 8 :
			__locationOfFirstStrike = 4;
			break;
		case 9 :
		case 10 :
			__locationOfFirstStrike = 5;
			break;
		case 11 :
		case 12 :
			__locationOfFirstStrike = 6;
			break;
		case 13 :
		case 14 :
			__locationOfFirstStrike = 7;
			break;
	}
	switch(__locationOfFixedSight)
	{
		case 15 :
		case 0 :
			__locationOfFixedSight = 0;
			break;
		case 1 :
		case 2 :
			__locationOfFixedSight = 1;
			break;
		case 3 :
		case 4 :
			__locationOfFixedSight = 2;
			break;
		case 5 :
		case 6 :
			__locationOfFixedSight = 3;
			break;
		case 7 :
		case 8 :
			__locationOfFixedSight = 4;
			break;
		case 9 :
		case 10 :
			__locationOfFixedSight = 5;
			break;
		case 11 :
		case 12 :
			__locationOfFixedSight = 6;
			break;
		case 13 :
		case 14 :
			__locationOfFixedSight = 7;
			break;
	}
	
	if (wenChang % 2 == 1)
	{
		mainCalculation++;
	}
	if (firstStrike % 2 == 1)
	{
		customerCalculation++;
	}
	if (fixedSight % 2 == 1)
	{
		determinded++;
	}
	if (__locationOfWenChang >= __locationOfTaiYi)
	{
		for(var counter3 = __locationOfWenChang; counter3 < __locationOfTaiYi + 8; ++counter3)
		{
			mainCalculation += _orderOfNumberOfVena[counter3];
		}
	}
	else
	{
		for(var counter3 = __locationOfWenChang; counter3 < __locationOfTaiYi; ++counter3)
		{
			mainCalculation += _orderOfNumberOfVena[counter3];
		}
	}
	if (__locationOfFirstStrike >= __locationOfTaiYi)
	{
		for(var counter4 = __locationOfFirstStrike; counter4 < __locationOfTaiYi + 8; ++counter4)
		{
			customerCalculation += _orderOfNumberOfVena[counter4];
		}
	}
	else
	{
		for(var counter4 = __locationOfFirstStrike; counter4 < __locationOfTaiYi; ++counter4)
		{
			customerCalculation += _orderOfNumberOfVena[counter4];
		}
	}
	if (__locationOfFixedSight >= __locationOfTaiYi)
	{
		for(var counter5 = __locationOfFixedSight; counter5 < __locationOfTaiYi + 8; ++counter5)
		{
			determinded += _orderOfNumberOfVena[counter5];
		}
	}
	else
	{
		for(var counter5 = __locationOfFixedSight; counter5 < __locationOfTaiYi; ++counter5)
		{
			determinded += _orderOfNumberOfVena[counter5];
		}
	}
}
function drawMainCalculationAndCustomCalculationAndDeterminded()
{
	context.save();
	
	context.lineWidth = 1;
	context.font = "bold 50px consolas";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	
	context.fillText("主算:" + mainCalculation, styleDisc.width / 5 + 7, styleDisc.height / 5 + 14);
	context.fillText("客算:" + customerCalculation, styleDisc.width / 5 + 7, styleDisc.height / 5 + 64);
	context.fillText("定算:" + determinded, styleDisc.width / 5 + 7, styleDisc.height / 5 + 114);
	context.restore();
}
function translate(_starsAndGod_)
{
	var _index;
	
	for (var counter6 = 0; counter6 < 16; ++counter6)
	{
		if (_starsAndGod_ == orderOfSixteenthHouse[counter6])
		{
			_index = counter6;
		}
	}
	
	return _index;
}

drawRectangle();
drawSixteenthHouse();
drawNumberOfVena();
drawYinYangEscapeAndNumberOfBoardAndNumbers();

for(var counter7 = 0; counter7 < 16; ++counter7)
{
	map[counter7].checkTaiSui();
	map[counter7].checkGod();
	map[counter7].checkScheming();
	map[counter7].checkTaiYi();
	map[counter7].checkWenChang();
	map[counter7].checkJunJi();
	map[counter7].checkChenJi();
	map[counter7].checkMinJi();
	map[counter7].checkFiveBlessings();
	map[counter7].checkGreatTour();
	map[counter7].checkSmallTour();
	map[counter7].checkFourGods();
	map[counter7].checkTianYi();
	map[counter7].checkB();
	map[counter7].checkStraightCharacter();
	map[counter7].checkFlyingCharacter();
	map[counter7].checkYangJiu();
	map[counter7].checkOneHundredSix();
}
for(var counter8 = 0; counter8 < 16; ++counter8)
{
	map[counter8].checkFirstStrike();
	map[counter8].checkFixedSight();
}

checkMainCalculationAndCustomCalculationAndDeterminded();
drawMainCalculationAndCustomCalculationAndDeterminded();

for(var counter9 = 0; counter9 < 16; ++counter9)
{
	map[counter9].checkMainGeneral();
	map[counter9].checkChiefOfficer();
	map[counter9].checkGeneralKe();
	map[counter9].checkGuestParticipant();
	map[counter9].checkDingGeneral();
	map[counter9].checkDifiniteGeneral();
}

map[0].drawStarsAndGods(styleDisc.width / 10 * 3 + 7, styleDisc.height / 5 * 4 + 15);
map[1].drawStarsAndGods(styleDisc.width / 10 + 7, styleDisc.height / 5 * 4 + 15);
map[2].drawStarsAndGods(styleDisc.width / 10 + 7, styleDisc.height / 5 * 3 + 15);
map[3].drawStarsAndGods(styleDisc.width / 10 + 7, styleDisc.height / 5 * 2 + 15);
map[4].drawStarsAndGods(styleDisc.width / 10 + 7, styleDisc.height / 5 + 15);
map[5].drawStarsAndGods(styleDisc.width / 10 + 7, 15);
map[6].drawStarsAndGods(styleDisc.width / 10 * 3 + 7, 15);
map[7].drawStarsAndGods(styleDisc.width / 10 * 5 + 7, 15);
map[8].drawStarsAndGods(styleDisc.width / 10 * 7 + 7, 15);
map[9].drawStarsAndGods(styleDisc.width / 10 * 9 + 7, 15);
map[10].drawStarsAndGods(styleDisc.width / 10 * 9 + 7, styleDisc.height / 5 + 15);
map[11].drawStarsAndGods(styleDisc.width / 10 * 9 + 7, styleDisc.height / 5 * 2 + 15);
map[12].drawStarsAndGods(styleDisc.width / 10 * 9 + 7, styleDisc.height / 5 * 3 + 15);
map[13].drawStarsAndGods(styleDisc.width / 10 * 9 + 7, styleDisc.height / 5 * 4 + 15);
map[14].drawStarsAndGods(styleDisc.width / 10 * 7 + 7, styleDisc.height / 5 * 4 + 15);
map[15].drawStarsAndGods(styleDisc.width / 10 * 5 + 7, styleDisc.height / 5 * 4 + 15);

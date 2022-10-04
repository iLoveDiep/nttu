var year_heavenly = document.getElementById("year_heavenly");
var year_earthlyBranch = document.getElementById("year_earthlyBranch");
var year_text = document.getElementById("year_text");
var month_heavenly = document.getElementById("month_heavenly");
var month_earthlyBranch = document.getElementById("month_earthlyBranch");
var month_text = document.getElementById("month_text");
var day_heavenly = document.getElementById("day_heavenly");
var day_earthlyBranch = document.getElementById("day_earthlyBranch");
var day_text = document.getElementById("day_text");
var hour_heavenly = document.getElementById("hour_heavenly");
var hour_earthlyBranch = document.getElementById("hour_earthlyBranch");
var hour_text = document.getElementById("hour_text");
var title = document.getElementById("title");
var numbers = document.getElementById("numbers");
var yinYangEscape = document.getElementById("yinYangEscape");
var check = document.getElementById("check");
var yinYangEscape_text = document.getElementById("yinYangEscape_text");
year_heavenly.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
year_earthlyBranch.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
year_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
month_heavenly.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
month_earthlyBranch.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
month_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
day_heavenly.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
day_earthlyBranch.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
day_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
hour_heavenly.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
hour_earthlyBranch.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
hour_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
title.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
numbers.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
yinYangEscape.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
yinYangEscape_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";

check.addEventListener("click", function ()
{
	if (numbers.value == "請輸入太乙積時")
	{
		alert("設定有誤!");
		location.reload();
	}
	else
	{
		localStorage.setItem("_year_heavenly", parseInt(year_heavenly.value));
		localStorage.setItem("_year_earthlyBranch", parseInt(year_earthlyBranch.value));
		localStorage.setItem("_month_heavenly", parseInt(month_heavenly.value));
		localStorage.setItem("_month_earthlyBranch", parseInt(month_earthlyBranch.value));
		localStorage.setItem("_day_heavenly", parseInt(day_heavenly.value));
		localStorage.setItem("_day_earthlyBranch", parseInt(day_earthlyBranch.value));
		localStorage.setItem("_hour_heavenly", parseInt(hour_heavenly.value));
		localStorage.setItem("_hour_earthlyBranch", parseInt(hour_earthlyBranch.value));
		localStorage.setItem("_numbers", parseInt(numbers.value));
		localStorage.setItem("_yinYangEscape", yinYangEscape.value);
		window.open("太乙神數 起式盤.html");
	}
}, false);
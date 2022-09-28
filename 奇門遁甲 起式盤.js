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
var yinYangEscape = document.getElementById("yinYangEscape");
var check = document.getElementById("check");
var yinYangEscape_text = document.getElementById("yinYangEscape_text");
var NumberOfBoard = document.getElementById("NumberOfBoard");
var NumberOfBoard_text = document.getElementById("NumberOfBoard_text");
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
yinYangEscape.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
yinYangEscape_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
NumberOfBoard.style.backgroundColor = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";
NumberOfBoard_text.style.color = "rgba(" + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", " + (parseInt(Math.random() * 255) + 1) + ", 1.0)";

check.addEventListener("click", function ()
{
	if (((parseInt(year_heavenly.value) + parseInt(year_earthlyBranch.value)) % 2 != 0) || ((parseInt(month_heavenly.value) + parseInt(month_earthlyBranch.value)) % 2 != 0) || ((parseInt(day_heavenly.value) + parseInt(day_earthlyBranch.value)) % 2 != 0) || ((parseInt(hour_heavenly.value) + parseInt(hour_earthlyBranch.value)) % 2 != 0))
	{
		alert("設定有誤");
		
		location.reload();
	}
	else
	{
		localStorage.setItem("year_heavenly", parseInt(year_heavenly.value));
		localStorage.setItem("year_earthlyBranch", parseInt(year_earthlyBranch.value));
		localStorage.setItem("month_heavenly", parseInt(month_heavenly.value));
		localStorage.setItem("month_earthlyBranch", parseInt(month_earthlyBranch.value));
		localStorage.setItem("day_heavenly", parseInt(day_heavenly.value));
		localStorage.setItem("day_earthlyBranch", parseInt(day_earthlyBranch.value));
		localStorage.setItem("hour_heavenly", parseInt(hour_heavenly.value));
		localStorage.setItem("hour_earthlyBranch", parseInt(hour_earthlyBranch.value));
		localStorage.setItem("yinYangEscape", yinYangEscape.value);
		localStorage.setItem("NumberOfBoard", NumberOfBoard.value);
		window.open("奇門遁甲 起式盤.html");
	}
}, false);
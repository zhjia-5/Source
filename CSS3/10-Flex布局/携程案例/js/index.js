$(function(){
	var index = 0,
		lastIndex = 0,
		timer,
		img = $(".focus img"),
		len = img.length;
		
	timer = setInterval(function autoplay(){
		img[lastIndex].className = "";
		index ++;
		index %= len;
		img[index].className = "on";
		lastIndex = index;
	},4000);
});
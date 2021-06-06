var Ball = document.querySelector(".ball");
var w = 5;
var h = 5;
document.addEventListener('keydown', function(e)
	{
		if (e.keyCode == 40 && h < 531.5)
		{
			h += 60;
			h = String(h);
			h += "px";
			Ball.style.top = h;
			h = h.substring(0, h.length - 2);
			h = Number(h);
		}
		if (e.keyCode == 39 && w < 531.5)
		{
			w += 60;
			w = String(w);
			w += "px";
			Ball.style.left = w;
			w = w.substring(0, w.length - 2);
			w = Number(w);
		}
		if (e.keyCode == 37 && w > 5)
		{
			w -= 60;
			w = String(w);
			w += "px";
			Ball.style.left = w;
			w = w.substring(0, w.length - 2);
			w = Number(w);
		}
		if (e.keyCode == 38 && h > 5)
		{
			h -= 60;
			h = String(h);
			h += "px";
			Ball.style.top = h;
			h = h.substring(0, h.length - 2);
			h = Number(h);
		}
	});
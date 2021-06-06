let a = Number(prompt("Введите A:"));
let b = Number(prompt("Введите B:"));
let c = Number(prompt("Введите C:"));
if ((isFinite(a) && isFinite(b) && isFinite(c)))
{
	if (a === 0 && b === 0) 
	{
		if (c === 0)
		{
			alert("0 = 0");
		} 
		else 
		{
			alert("Неверное равенство " + c + " = 0");
		}
	}
	else if (a === 0)
	{
		let x;
		x = -c/b;
		x = Number(x.toFixed(2));
		alert(x);
	} 
	else 
	{
		let x1;
		let x2;
		let D;
		D = b**2 - 4 * a * c;
		if (D >= 0)
		{
			x1 = (-b + Math.sqrt(D))/2;
			x2 = (-b - Math.sqrt(D))/2;
			x1 = Number(x1.toFixed(2));
			x2 = Number(x2.toFixed(2));
		}
		else
		{
			x1 = -b/2;
			x2 = -b/2;
			x1 = String(x1.toFixed(2));
			x2 = String(x2.toFixed(2));
			x1 += ' ' + '+';
			x2 += ' ' + '-';
			D = Math.sqrt(-D)/2;
			D = String(D.toFixed(2));
			D += 'i';
			x1 += ' ' + D;
			x2 += ' ' + D;
		}
		alert(x1 + " / " + x2);
	}
}
else
{
	alert("Неверно введены числа");
}

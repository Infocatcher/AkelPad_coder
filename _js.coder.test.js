// Template literals
var s = `${foo}${bar}${baz}`;
var s = `string${foo}${bar}${baz}`;
var s = `string${foo}string${bar}string${baz}string`;
var s = myTag`That ${foo} is a ${bar} template.`;
var s = `
	Something
	here
	${x + y&z}
	\${not expression here}
	\${${x}
`;
var s = `
	.foo, .bar {
		color: red;
	}
`;

// Regular expressions
var r = /\//i;
var r = /[\/*]/img;
var r = /[a-z]{5}/;
var r = /[a-z]{1,5}/;
var r = /([a-z])+/;
var r = /([a-z]{1,5})+/;
var r = /f([a-z])/;
var r = /a(b)c(d)/;
if(/\*/.test(s));
/./.test(s) && f();
/[a-z]/.test(s) && f();
var a = [/a/, /b/];
var o = { r: /./, x: 2 };
var x = a && /b/.test(c);
var x = a ? /b/ : /c/;
var x = !/a/.test(b);
var x = f(/./i);

// Not a regular expressions
var n = 1/2;
var n = 1/2/3;
var n = 1/2/i;
var n = 1 / 2 / i;
var n = 1/(2/i);
var n = 1/this.n/3;
var n = 1/this.n()/3;
var n = 1/this.n(2/3);
var n = 1/2 + (function() { return 3/4; })();
var n = 1/2*(this.x/3 + 2);
var n = 1/2*(this.x + 2/3);
var n = f(1/2) + 3/2;
var n = f(1/2) + g(3/2);
// Not a regular expressions (hard to parse)
var n = 1 // Some comments here
    /i/m;
var n = 1 /* Some comments here */
    /i/m;
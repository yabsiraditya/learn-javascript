var s = '';

for(var i = 10; i > 0; i--) {
    for(var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

var n = '';

for(var i = 0; i < 10; i++) {
    for(var j = 0; j <= i; j++) {
        n += '*';
    }
    n += '\n';
}
console.log(n);
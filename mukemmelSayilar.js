var dizi = [];
var maks = Math.pow(2, 53) - 1;

//mükemmel detecter
for (var i = 5; i < maks; i++) {
    if (i % 2 == 0) {
        var geciciDizi = [];
        for (var j = 1; j < i/2+1; j++) {
            if(i%j==0) {
                geciciDizi.push(j);
            }
        }
    } else {
        continue;
    }
    if (topla(geciciDizi) == i) {
        dizi.push(i);
    }
}

//çarpanları kendi arasında toplar
function topla(x) {
    var gecici = 0;
    for (var i in x) {
        gecici += x[i];
    }
    return gecici;
}

for(var k in dizi) {
    console.log(dizi[k]);
}

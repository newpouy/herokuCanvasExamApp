var worldCanvas = document.getElementById('world');
console.log(worldCanvas);
var ctx = worldCanvas.getContext('2d');
ctx.fillStyle = "green";
var income = 1000/2;
console.log(income)
ctx.fillRect(10, 10, 1000, income);

var mcmj = new Person(ctx, 200, 200, "앰씨민지");
mcmj.drawSelf();
mcmj.sayName();


var jaesuck = new Person(ctx, 10, 10, "앰씨유");
jaesuck.drawSelf();
jaesuck.sayName();

canvas = document.getELementbyID("can")
ctx = canvas.getContext("2d")
class rectangle
constructor(x, y, width, height, color)
x = this.x
y = this.y
width = this.width
height = this.height
color = this.color
ctx.fillStyle = this.color
ctx.fillRect(this.x, this.y, this.width, this.height)

new rectangle(400, 400, 40, 40);

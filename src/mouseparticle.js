class Mouseparticle {
    constructor(canvas, ctx, mouse) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.mouse = mouse;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.w = (Math.random() * 2 ) + 5;
        this.velocity = 0.05;
        this.radians = Math.random() * Math.PI * 2;
        this.range = Mouseparticle.randomNumber(80, 140);
        const colorArray = ['#3498db', '#2980b9', '#0E4A6B', '#4FB2BA'];
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    }

    draw(lastpoint) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.w;
        this.ctx.moveTo(lastpoint.x, lastpoint.y);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    update() {
        const lastpoint = {
            x: this.x,
            y: this.y,
        };

        this.radians += this.velocity;
        this.x = this.mouse.x + (Math.cos(this.radians) * this.range);
        this.y = this.mouse.y + (Math.sin(this.radians) * this.range);

        this.draw(lastpoint);
    }

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

export default Mouseparticle;
class Square {
    constructor(canvas, ctx, x, y, w, h, dx, dy, speed) {
        this.canvas = canvas;
        this.ctx = ctx
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.speed = speed
    }

    draw(s) {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        if (this.x < 0 || this.x > this.canvas.width) {
            this.dx = -this.dx;
        }
        if (this.y < 0 || this.y > this.canvas.height) {
            this.dy = -this.dy;
        }
        this.draw();
    }
}

export default Square;
class Square {
    constructor(canvas, ctx, x, y, w, h, dx, dy, speed, mouse) {
        this.canvas = canvas;
        this.ctx = ctx
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.speed = speed;
        this.mouse = mouse;
        this.minW = 10;
        this.maxW = 40;
    }

    draw() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        // Gestion des rebonds
        if (this.x < 0 || this.x > this.canvas.width) {
            this.dx = -this.dx;
        }
        if (this.y < 0 || this.y > this.canvas.height) {
            this.dy = -this.dy;
        }

        // Mouse Interactivity
        if (this.mouse.x - this.x < 120 && this.mouse.x - this.x > -120 && this.mouse.y - this.y > -120 && this.mouse.y - this.y < 120) {
            if (this.w < this.maxW) {
                this.w += 2;
                this.h += 2;
            }
        } else if (this.w > this.minW) {
            this.w -= 1;
            this.h -= 1;
        }

        this.draw();
    }

}

export default Square;
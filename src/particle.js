class Square {
    constructor(canvas, ctx, x, y, w, h, dx, dy, speed, mouse, colorArray) {
        this.canvas = canvas;
        this.ctx = ctx

        // let x = Math.random() * canvas.width;
        // let y = Math.random() * canvas.height;
        //
        // let w = 20;
        // let h = 20;
        //
        // let dx = Math.random() - 0.5 * 2;
        // let dy = Math.random() - 0.5 * 2;
        // let speed = 4;
        //
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.speed = speed;
        this.mouse = mouse;
        this.minW = 20;
        this.maxW = 60;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    draw() {
        this.ctx.fillStyle = this.color;
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
class Particle {
    constructor(canvas, ctx, x, y, w, dx, dy, speed, mouse, color) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.dx = dx;
        this.dy = dy;
        this.speed = speed;
        this.mouse = mouse;
        this.color = color;
        this.minW = 5;
        this.maxW = 10;
	}

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.w, 0, 2*Math.PI, false);
        if (this.color) {
            this.ctx.fillStyle = this.color;
        } else {
            this.ctx.fillStyle = 'white';
        }
        this.ctx.fill();
        this.ctx.closePath();

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
                this.w += .1;
            }
        } else if (this.w > this.minW) {
            this.w -= .2;
        }
        this.draw();
    }

}

export default Particle;
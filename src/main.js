import Square from './particle';
import './main.css';
(() => {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    let arrayPos = [];
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arraySquare.forEach((e) => {
            e.update();
            arrayPos.push(e);
        });

        //Creation des liens en blanc entre chaque élement à moins de 250 de distance
        arrayPos.forEach((e) => {
            for (let k = 0; k < arrayPos.length; k++) {
                if (e.x - arrayPos[k].x < 250 && e.x - arrayPos[k].x > -250 && e.x !== arrayPos[k].x && e.y - arrayPos[k].y < 250 && e.y - arrayPos[k].y > -250 && e.y !== arrayPos[k].y) {
                    ctx.beginPath();
                    ctx.moveTo(e.x + (e.w / 2), e.y + (e.h / 2));
                    ctx.lineTo(arrayPos[k].x + (arrayPos[k].w / 2), arrayPos[k].y + (arrayPos[k].h / 2));
                    ctx.strokeStyle = 'white';
                    ctx.stroke();

                    //gestion des collisions
                    if (e.x < arrayPos[k].x + arrayPos[k].w &&
                        e.x + e.w > arrayPos[k].x &&
                        e.y < arrayPos[k].y + arrayPos[k].h &&
                        e.h + e.y > arrayPos[k].y) {
                        e.dx = -e.dx;
                        e.dy = -e.dy;
                        arrayPos[k].dx = -arrayPos[k].dx;
                        arrayPos[k].dy = -arrayPos[k].dy;
                        e.update();
                    }
                }
            }
        });
        arrayPos = [];
        requestAnimationFrame(animate);
    };

    let arraySquare = [];
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

        let w = 20;
        let h = 20;

        let dx = Math.random() - 0.5 * 2;
        let dy = Math.random() - 0.5 * 2;
        let speed = 5;
        arraySquare.push(new Square(canvas, ctx, x, y, w, h, dx, dy, speed));
    }

    animate();

})();

javascript:(function () {
    var script = document.createElement('script');
    script.onload = function () {
        var stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
    document.head.appendChild(script);
})()





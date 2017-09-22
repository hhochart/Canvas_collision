import Square from './particle';
import './main.css';

(() => {
    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    // create web audio api context
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // create Oscillator node
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = 500; // value in hertz
    oscillator.start();


    let mouse = {
        x: undefined,
        y: undefined
    };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Mouse click directive

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

                    window.addEventListener('click', () => {
                        e.speed +=1;
                    });

                    //gestion des collisions
                    if (e.x < arrayPos[k].x + arrayPos[k].w &&
                        e.x + e.w > arrayPos[k].x &&
                        e.y < arrayPos[k].y + arrayPos[k].h &&
                        e.h + e.y > arrayPos[k].y) {
                        e.dx = -e.dx;
                        e.dy = -e.dy;
                        arrayPos[k].dx = -arrayPos[k].dx;
                        arrayPos[k].dy = -arrayPos[k].dy;
                        oscillator.connect(audioCtx.destination);
                        setTimeout(() => {
                            oscillator.disconnect();
                        }, 10)
                        e.update();
                    }
                }
            }
        });
        arrayPos = [];
        requestAnimationFrame(animate);
    };

    let arraySquare = [];
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

        let w = 10  ;
        let h = 10;

        let dx = Math.random() - 0.5 * 2;
        let dy = Math.random() - 0.5 * 2;
        let speed = 4;
        arraySquare.push(new Square(canvas, ctx, x, y, w, h, dx, dy, speed, mouse));
    }

    animate();

})();

javascript:(function () {
    let script = document.createElement('script');
    script.onload = function () {
        let stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
    document.head.appendChild(script);
})();
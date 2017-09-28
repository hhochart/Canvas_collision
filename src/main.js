import Particle from './particle';

import './main.css';
import Mouseparticle from "./mouseparticle";

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

    let fired = false;
    let mouse = {
        x: undefined,
        y: undefined
    };

    let angleRadians = undefined;
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
        angleRadians = Math.atan2(canvas.height - e.y, e.x);
    });

    // Mouse click Canon
    window.addEventListener('mousedown', (e) => {
        if (!fired) {
            fired = true;
            let axisX = e.x / canvas.width;
            let axisY = (canvas.height - e.y) / canvas.width;
            arrayParticles.push(new Particle(canvas, ctx, 0, canvas.height - 0, 10, axisX, -axisY, 2, mouse, 'yellow'));
        }
    });
    window.addEventListener('mouseup', (e) => {
        if (fired) {
            fired = false;
        }
    });

    let arrayPos = [];
    const animate = () => {
        requestAnimationFrame(animate);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.20)';
        ctx.fillRect(0,0,canvas.width, canvas.height);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(0, canvas.height);
        ctx.rotate(Math.abs(angleRadians - 1.5));
        ctx.fillStyle = 'white';
        ctx.fillRect(-5, -(30), 10, 30);
        ctx.restore();


        arrayParticles.forEach((e) => {
            e.update();
            arrayPos.push(e);
        });

        arrayMouseparticles.forEach((e) => {
            e.update();
        });

        //Creation des liens entre chaque élement à moins de 250 de distance et de même couleurs
        arrayPos.forEach((e) => {
            for (let k = 0; k < arrayPos.length; k++) {
                if (e.x - arrayPos[k].x < 125 && e.x - arrayPos[k].x > -125 && e.x !== arrayPos[k].x && e.y - arrayPos[k].y < 125 && e.y - arrayPos[k].y > -125 && e.y !== arrayPos[k].y) {
                    if (e.color && arrayPos[k].color) {
                        ctx.beginPath();
                        ctx.moveTo(e.x, e.y);
                        ctx.lineWidth = 1;
                        ctx.lineTo(arrayPos[k].x, arrayPos[k].y);
                        ctx.strokeStyle = arrayPos[k].color;
                        ctx.stroke();
                    } else if (!e.color && !arrayPos[k].color) {
                        ctx.beginPath();
                        ctx.moveTo(e.x, e.y);
                        ctx.lineWidth = 1;
                        ctx.lineTo(arrayPos[k].x, arrayPos[k].y);
                        ctx.strokeStyle = 'white';
                        ctx.stroke();
                    }

                    //gestion des collisions
                    if (e.x < arrayPos[k].x + arrayPos[k].w &&
                        e.x + e.w > arrayPos[k].x &&
                        e.y < arrayPos[k].y + arrayPos[k].w &&
                        e.w + e.y > arrayPos[k].y) {
                        e.dx = -e.dx;
                        e.dy = -e.dy;
                        arrayPos[k].dx = -arrayPos[k].dx;
                        arrayPos[k].dy = -arrayPos[k].dy;
                        e.update();
                        oscillator.connect(audioCtx.destination);
                        setTimeout(() => {
                            oscillator.disconnect();
                        }, 10)
                    }
                }
            }
        });
        arrayPos = [];
    };

    let arrayParticles = [];
    for (let i = 0; i < 25; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let w = 5;
        let dx = Math.random() - 0.5 * 2;
        let dy = Math.random() - 0.5 * 2;
        let speed = 1;
        arrayParticles.push(new Particle(canvas, ctx, x, y, w, dx, dy, speed, mouse));
    }

    let arrayMouseparticles = [];
    for(let i=0; i < 70; i++) {
        arrayMouseparticles.push(new Mouseparticle(canvas, ctx, mouse));
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

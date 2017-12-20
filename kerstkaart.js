
function letterB1() {
    var B1 = document.getElementById("letterB1");

    var pos = 0;
    var id =  setInterval(frame, 2);

    function frame() {
        if (pos === 900){
            pos = 0;
        } else {

            pos++;
            B1.style.top = pos + 'px';
            // x fall position
            B1.style.left = '400px';



        }

    }
}

function letterB2() {
    var B2 = document.getElementById("letterB2");

    var pos = 0;
    //speed amount of image falling down
    var id =  setInterval(frame, 5);

    function frame() {
        if (pos === 900){
            pos = 0;
        } else {

            pos++;
            B2.style.top = pos + 'px';
            // x fall position
            B2.style.left = '600px';



        }

    }

}

function letterB3() {
    var B3 = document.getElementById("letterB3");

    var pos = 0;
    var id =  setInterval(frame, 2);

    function frame() {
        if (pos === 200){
            pos = 0;
        } else {

            pos++;
            B3.style.top = pos + 'px';
            // x fall position
            B3.style.left = '1000px';



        }

    }
}

function letterB4() {
    var B4 = document.getElementById("letterB4");

    var pos = 0;
    //speed amount of image falling down
    var id =  setInterval(frame, 5);

    function frame() {
        if (pos === 400){
            pos = 0;
        } else {

            pos++;
            B4.style.top = pos + 'px';
            // x fall position
            B4.style.left = '1200px';



        }

    }

}

function letterB5() {
    var B5 = document.getElementById("letterB5");

    var pos = 0;
    var id =  setInterval(frame, 2);

    function frame() {
        if (pos === 900){
            pos = 0;
        } else {

            pos++;
            B5.style.top = pos + 'px';
            // x fall position
            B5.style.left = '1700px';



        }

    }
}

function letterB6() {
    var B6 = document.getElementById("letterB6");

    var pos = 0;
    //speed amount of image falling down
    var id =  setInterval(frame, 5);

    function frame() {
        if (pos === 900){
            pos = 0;
        } else {

            pos++;
            B6.style.top = pos + 'px';
            // x fall position
            B6.style.left = '1900px';



        }

    }

}

function snow(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;


    var mp = 25; //max particles
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
        particles.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*4+1,
            d: Math.random()*mp
        })
    }


    function draw()
    {
        ctx.clearRect(0, 0, W, H);

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        update();
    }


    var angle = 0;
    function update()
    {
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];

            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;


            if(p.x > W+5 || p.x < -5 || p.y > H)
            {
                if(i%3 > 0)
                {
                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                }
                else
                {

                    if(Math.sin(angle) > 0)
                    {

                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                    else
                    {

                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }

    //animation loop
    setInterval(draw, 33);
}
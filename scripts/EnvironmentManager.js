document.addEventListener('DOMContentLoaded', function () {
    let balls = [
        new Ball(50, 'red', new Vector(100.0, 200.0), new Vector(-200.0, -220.0)),
        new Ball(40, 'lime', new Vector(200.0, 300.0), new Vector(-150.0, 300.0)),
        new Ball(45, 'orange', new Vector(333.0, 100.0), new Vector(-120.0, 500.0)),
        new Ball(35, 'purple', new Vector(500.0, 120.0), new Vector(400.0, 100.0)),
        new Ball(30, 'blue', new Vector(30.0, 120.0), new Vector(50.0, 100.0))
    ];
    
    // function updateCursorPosition(event) {
    //     pad.style.left = event.pageX - 35 + 'px';
    //     pad.style.top = event.pageY - 35 + 'px';
    // }

    function update()
    {
        for (let ball of balls)
        {
            ball.update();
            Collision.handleBall2BorderCollision(ball);
        }
        for (let i = 0; i < balls.length - 1; i++)
        {
            for (let j = i + 1; j < balls.length; j++)
            {
                Collision.handleBall2BallCollision(balls[i], balls[j]);
            }
        }
    }

    // document.addEventListener('mousemove', updateCursorPosition);

    setInterval(update, 30);
});

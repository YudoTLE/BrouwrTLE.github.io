class Collision
{
    static handleBall2BorderCollision(ball)
    {
        if (ball.position.x - ball.size / 2 <= 0)
        {
            ball.position.x = ball.size / 2 + (ball.size / 2 - ball.position.x);
            ball.velocity.x *= -1;
            
            return true;
        }
        if (ball.position.y - ball.size / 2 <= 0)
        {
            ball.position.y = ball.size / 2 + (ball.size / 2 - ball.position.y);
            ball.velocity.y *= -1;

            return true;
        }
        if (ball.position.x + ball.size / 2 >= window.innerWidth)
        {
            ball.position.x = window.innerWidth - ball.size / 2 - (ball.position.x + ball.size / 2 - window.innerWidth);
            ball.velocity.x *= -1;

            return true;
        }
        if (ball.position.y + ball.size / 2 >= window.innerHeight)
        {
            ball.position.y = window.innerHeight - ball.size / 2 - (ball.position.y + ball.size / 2 - window.innerHeight);
            ball.velocity.y *= -1;

            return true;
        }

        return false;
    }

    static handleBall2BallCollision(ball1, ball2)
    {
        if (Vector.distance(ball1.position, ball2.position) > (ball1.size + ball2.size) / 2)
            return false;

        const unitNormal = Vector.relative(ball1.position, ball2.position).normalize();
        const unitTangent = new Vector(-unitNormal.y, unitNormal.x);
        
        const projNormalVelocity1 = Vector.dotProduct(unitNormal, ball1.velocity);
        const projTangentVelocity1 = Vector.dotProduct(unitTangent, ball1.velocity);
        const projNormalVelocity2 = Vector.dotProduct(unitNormal, ball2.velocity);
        const projTangentVelocity2 = Vector.dotProduct(unitTangent, ball2.velocity);

        const nextProjNormalVelocity1 = (2.0 * projNormalVelocity2 * ball2.mass + projNormalVelocity1 * (ball1.mass - ball2.mass)) / (ball1.mass + ball2.mass);
        const nextProjNormalVelocity2 = (2.0 * projNormalVelocity1 * ball1.mass + projNormalVelocity2 * (ball2.mass - ball1.mass)) / (ball1.mass + ball2.mass);
        
        ball1.velocity = Vector.sum(unitNormal.scale(nextProjNormalVelocity1), unitTangent.scale(projTangentVelocity1));
        ball2.velocity = Vector.sum(unitNormal.scale(nextProjNormalVelocity2), unitTangent.scale(projTangentVelocity2));
        
        ball1.position = Vector.sum(ball1.position, ball1.velocity.scale(0.03));
        ball2.position = Vector.sum(ball2.position, ball2.velocity.scale(0.03));

        return true;
    }
}
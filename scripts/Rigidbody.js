class Rigidbody
{
    constructor(position, velocity)
    {
        this.position = position;
        this.velocity = velocity;
    }

    update(periode)
    {
        this.position = Vector.sum(this.position, this.velocity.scale(periode));
    }
}
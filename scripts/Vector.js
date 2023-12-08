class Vector
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    scale(value)
    {
        return new Vector(this.x * value, this.y * value);
    }

    magnitude()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize()
    {
        return new Vector(this.x / this.magnitude(), this.y / this.magnitude());
    }


    static relative(vector1, vector2)
    {
        return new Vector(vector2.x - vector1.x, vector2.y - vector1.y);
    }

    static distance(vector1, vector2)
    {
        return new Vector(vector2.x - vector1.x, vector2.y - vector1.y).magnitude();
    }

    static sum(vector1, vector2)
    {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    static dotProduct(vector1, vector2)
    {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }
}
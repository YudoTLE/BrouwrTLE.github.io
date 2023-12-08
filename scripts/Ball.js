class Ball extends Rigidbody
{
    constructor(size, color, position, velocity)
    {
        super(position, velocity);
        this.size = size;
        this.mass = Math.PI * size * size / 4;

        console.log(this.mass);
        console.log(this.size);

        this.element = document.createElement('div');
        this.element.style.width = size + 'px';
        this.element.style.height = size + 'px';
        this.element.style.borderRadius = size / 2 + 'px';
        this.element.style.background = color;
        this.element.style.position = 'absolute';
        this.element.style.left = this.position.x;
        this.element.style.bottom = this.position.y;

        document.body.appendChild(this.element);
    }


    update()
    {
        this.element.style.left = this.position.x - this.size / 2 + 'px';
        this.element.style.bottom = this.position.y - this.size / 2 + 'px';
        
        super.update(30.0 / 1000);
    }
}
class Canvas{

    constructor(){
        this.canvas = $("#canvas");
        this.context = canvas.getContext('2d');
        this.rect = canvas.getBoundingClientRect();
        this.previousX = 0;
        this.previousY = 0;
        this.state = 0;
        this.resizeCanvas();
        this.addHandlers();
    }


    enableDrawing(){
        this.state = 1;
    }
    disableDrawing(){
        this.state = 0;
    }

    saveRelativePosition(x, y){
        this.previousX = this.getRelativeX(x);
        this.previousY = this.getRelativeY(y);
    }

    getRelativeX(x){
        return x - this.canvas[0].getBoundingClientRect().left;
    }

    getRelativeY(y){
        return y - this.canvas[0].getBoundingClientRect().top;
    }

    resizeCanvas(){
        this.context.canvas.width =  this.canvas.parent().width();
        this.context.canvas.height = this.canvas.parent().height();
    }


    draw(destinationX, destinationY){
        if(this.state === 1){
            let currentX = this.getRelativeX(destinationX);
            let currentY = this.getRelativeY(destinationY);
            this.drawLine(this.previousX, this.previousY, currentX, currentY);
            this.previousX = currentX;
            this.previousY = currentY;
        }

    }

    
    reset(){
        this.state = 0;
    }
    drawLine(sourceX, sourceY, destinationX, destinationY) {
        this.context.beginPath();
        this.context.moveTo(sourceX+0.5, sourceY);
        this.context.lineTo(destinationX+0.5, destinationY);
        this.context.stroke();
    }
    addHandlers() {

        this.canvas.mousedown(startDrawing);
        this.canvas.mousemove(onDraw);
        this.canvas.mouseup(onUp);
        this.canvas.mouseleave(onLeave);
    }
}
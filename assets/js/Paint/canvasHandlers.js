
function startDrawing(event){
    event.preventDefault();
    if(isLeftMouseButton(event.button)){
        canvas.saveRelativePosition(event.clientX, event.clientY);
        canvas.enableDrawing();
    }
}

function onDraw(event){
    event.preventDefault();
    canvas.draw(event.clientX, event.clientY);
    
}

function onUp(event){
    event.preventDefault();
    canvas.disableDrawing();
}

function onLeave(event){
    event.preventDefault();
    canvas.disableDrawing();

}

function onResize(event){
    event.preventDefault();
    canvas.reset();
    canvas.resizeCanvas();
    
}


function isLeftMouseButton(button){
    return button === 0;
}
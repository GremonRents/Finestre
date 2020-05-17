let leftMouseButtonPressed = false;
let activeWindow = null;
let windows = new Object();



function startDragging(event){
    disableDefaultBehaviour(event);
    if(event.target == event.currentTarget && isLeftMouseButton(event.button)){
        leftMouseButtonPressed = true;
        activeWindow.saveOffsets(event.offsetX, event.offsetY);
    }
    setAllWindowsInBackground();
    activeWindow.inForeground();
}

function onDrag(event){
    disableDefaultBehaviour(event);
    if(leftMouseButtonPressed){
        activeWindow.move(event.pageX, event.pageY);
    }
}

function onDrop(event){
    disableDefaultBehaviour(event);
    if(isLeftMouseButton(event.button))
        leftMouseButtonPressed = false;
}



function setActiveWindow(event){
    if(!leftMouseButtonPressed){
        activeWindow = windows[event.currentTarget.id];
    }
    
}

function isLeftMouseButton(mouseButton){
    return mouseButton === 0;
}

function disableDefaultBehaviour(event){
    event.stopPropagation();
    event.preventDefault();  
}

function setAllWindowsInBackground(){
    for(i in windows){
        windows[i].inBackground();
    }
}



function minimizeWindow(event){

    
}


function maximizeWindow(){
    if(activeWindow.isWindowed())
        activeWindow.setFullScreen();
    else
        activeWindow.setWindowed();
}

function closeWindow(){
    activeWindow.close();
}
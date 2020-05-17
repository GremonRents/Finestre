let leftMouseButtonPressed = false;
let activeWindow = null;
let windows = [];

function startDragging(event){
    disableDefaultBehaviour(event);
    if(event.target == event.currentTarget && isLeftMouseButton(event.button)){
        leftMouseButtonPressed = true;
        activeWindow.saveOffsets(event.offsetX, event.offsetY);
    }
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
    windows[activeWindow.getId()] = null;
    compactWindowsArray();
}


function compactWindowsArray(){
    for(var i = windows.length-1; windows[i] == null && i >= 0; i--){}
    windows.length = i+1;
}
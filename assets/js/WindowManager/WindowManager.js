let leftMouseButtonPressed = false;
let activeWindow = null;
changed = false;
let windows = [];



function startDragging(event){
    disableDefaultBehaviour(event);
    setActiveWindow(event.currentTarget.parentElement.id);
    if(event.target == event.currentTarget && isLeftMouseButton(event.button)){
        leftMouseButtonPressed = true;
        activeWindow.saveOffsets(event.offsetX, event.offsetY);
    }
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


function changeActiveWindow(event){
    disableDefaultBehaviour(event);
    setActiveWindow(event.currentTarget.id);
    
}
function setActiveWindow(window_id){
    if(!activeWindow || activeWindow.getId() != window_id){
        if(activeWindow) activeWindow.inBackground();
        activeWindow = windows[window_id];
        activeWindow.inForeground();
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
    windows.splice(activeWindow.getId(), 1);
}
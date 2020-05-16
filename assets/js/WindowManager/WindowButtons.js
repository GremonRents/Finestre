
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


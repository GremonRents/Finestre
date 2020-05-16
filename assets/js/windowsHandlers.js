function addWindowHandler(){
    $(".draggable_bar").mousedown(startDragging);
    $(".draggable_window").mouseenter(setActiveWindow);

    $(".minimize").mousedown(minimizeWindow);
    $(".maximize").mousedown(maximizeWindow);
    $(".close").mousedown(closeWindow);
}

function removeWindowHandler(){
    $(".draggable_bar").unbind();
    $(".draggable_window").unbind();

    $(".minimize").unbind();
    $(".maximize").unbind();
    $(".close").unbind();
}

function addBackgroundHandler(){
    $("#background_container").mousemove(onDrag);
    $("#background_container").mouseup(onDrop);
}


















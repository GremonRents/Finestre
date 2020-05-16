$(function () {
    $(".draggable_bar").mousedown(startDragging);
    $("#background_container").mousemove(onDrag);
    $("#background_container").mouseup(onDrop);
    $(".draggable_window").mouseover(setActiveWindow);

    $(".minimize").mousedown(minimizeWindow);
    $(".maximize").mousedown(maximizeWindow);
    $(".close").mousedown(closeWindow);

    // Disable context menu (taso destro-> salva con nome...)
    //$("*").contextmenu(disableDefaultBehaviour);  
});


















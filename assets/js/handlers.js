$(document).ready(function () {
    $("#background_container").contextmenu(disableDefaultBehaviour);
    $("#background_container").mousemove(onDrag);
    $("#background_container").mouseup(onDrop);
    addTaskbarHandlers();
});
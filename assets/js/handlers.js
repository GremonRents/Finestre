$(document).ready(function () {
    $("#background_container").contextmenu(disableDefaultBehaviour);
    addBackgroundHandler();
    addTaskbarHandlers();
});
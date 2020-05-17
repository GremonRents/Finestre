let id = 0;


function newShell(event){
    $("#background_container").append(
        `<div id="${id}" class="opaque draggable_window shell_color window_container">
            <div class="title_bar draggable_bar">
                <div class="title_section">
                    <div class="icon_container"><img src="./assets/images/title_bar/terminal.svg" class="icon"></div>
                </div>
                <div class="icons_section">
                    <div class="icon_container minimize"><img src="./assets/images/title_bar/minimize.svg" class ="icon" alt="minimize"></div>
                    <div class="icon_container maximize"><img src="./assets/images/title_bar/maximize.svg" class ="icon" alt = "maximize"></div>
                    <div class="icon_container close"><img src="./assets/images/title_bar/close.svg" class = "icon" alt="close"></div>
                </div>
            </div>
            <div class="shell_content shell_color">
                <div id="previous_input"></div>
                <input type="text" name="input" class="shell_input shell_color shell_font">
            </div>
        </div>`);
    windows[id] = new Window(id);
    id++;
}

function newUpload(event){

}





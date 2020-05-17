let fullScreen = {
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    width: "100%",
    height: "100%"
}
class Window{
    constructor(id) {
        this.lastLeft = 0;
        this.lastTop = 0;
        this.lastWidth = 800;
        this.lastHeight = 500;
        this.offsetX = 0;
        this.offsetY = 0;
        this.windowed = true;
        this.closed = false;
        this.id = id;
        this.addHandlers(id);
        this.realWindow = $("#"+id);
    }


    saveDimensions(){
        let width = this.realWindow.css("width");
        let height = this.realWindow.css("height");
        this.lastWidth = width;
        this.lastHeight = height;
    }

    saveCoordinates(){
        let left = this.realWindow.css("left");
        let top = this.realWindow.css("top");
        this.lastLeft = left;
        this.lastTop = top;
    }
    
    saveOffsets(offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    setWindowed(){
        this.realWindow.css({width: this.lastWidth, height: this.lastHeight});
        this.realWindow.css({top: this.lastTop, left: this.lastLeft});
        this.windowed = true;
    }

    setFullScreen(){
        this.saveCoordinates();
        this.saveDimensions();
        this.realWindow.css(fullScreen);
        this.windowed = false;
    }

    isWindowed(){
        return this.windowed;
    }

    setClosed(closed){
        this.closed = closed;
    }

    minimize(){
        this.realWindow.css({display: "none"});
    }

    close(){
        this.realWindow.remove();
    }

    move(x, y){
        this.realWindow.css({left: x - this.offsetX, top: y - this.offsetY});
    }

    inBackground(){
        this.realWindow.css({"z-index": 0});
    }

    inForeground(){
        this.realWindow.css({"z-index": 1});
    }

    getId(){
        return this.id;
    }

    addHandlers(id){
        $(`#${id} .draggable_bar`).mousedown(startDragging);
        $(`#${id}.draggable_window`).mouseenter(setActiveWindow);
    
        $(`#${id} .mimize`).mousedown(minimizeWindow);
        $(`#${id} .maximize`).mousedown(maximizeWindow);
        $(`#${id} .close`).mousedown(closeWindow);
    }

    
}
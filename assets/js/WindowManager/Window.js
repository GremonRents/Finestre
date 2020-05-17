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
        this.id = id;
        this.addHandlers(id);
        this.realWindow = $("#"+id);
        this.inForeground();
    }

    static foreground = 0;


    saveDimensions(){
        this.lastWidth = this.realWindow.css("width");
        this.lastHeight = this.realWindow.css("height");
    }

    saveCoordinates(){
        this.lastLeft = this.realWindow.css("left");
        this.lastTop = this.realWindow.css("top");
    }
    
    saveOffsets(offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    setWindowed(){
        this.realWindow.css({width: this.lastWidth, height: this.lastHeight});
        this.realWindow.css({left: this.lastLeft, top: this.lastTop});
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

    minimize(){
        this.realWindow.css({display: "none"});
    }

    close(){
        this.realWindow.remove();
    }

    move(x, y){
        //this.realWindow.css({transform: `translate(${(x-this.offsetX)+"px"}, ${(y-this.offsetY)+"px"})`});
        this.realWindow.css({left: x - this.offsetX, top: y - this.offsetY});
    }

    inForeground(){
        this.realWindow.css({"z-index": Window.foreground++});
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
$("#shell_input").keyup(function(e) {
    if(e.key == "Enter"){
        parse();
    }
});


function parse(){
    let a = $("#shell_input");
    console.log("asdf");
    a.clone().appendTo( "#shell_content");

}



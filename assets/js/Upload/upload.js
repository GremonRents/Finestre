function addUploadHandler(id){
    $(`#${id} .upload_form`).submit(function(e) {
        e.preventDefault();        
        var formData = new FormData(this);
        console.log(formData);                 
        $.ajax({
            type:   $(this).attr('method'),
            url:    $(this).attr('action'),
            processData: false,
            contentType: false,
            data:   formData,
            success: function(response){
                console.log(response); 
            }
         });
    });

}
$(document).on('click','#btnId',function (event) {
    event.preventDefault();
    var form = $('#formId')[0];
    var formData = new FormData(form);

  
    $.ajax({
        url: "phpProcessor.php",
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
          success: function(response){  
        
$('#formId')[0].reset();  

var convertObject = JSON.parse(response); // ken this convert JSON object to json array which javascript can use to get array keys and values like code and messages
var rawMessage =  JSON.stringify(convertObject.message);   //ken this convert message in the array to string
var responseMessage = rawMessage.toString().replace(/"/g, "");  // ken this removes "" quotes

//FOR WEAK ERROR MESSAGES
         if(convertObject.code === 400 ){
         	$("#resultId").html(`<div class="alert alert-warning" role="alert">
         		<h4 class="alert-heading">Oops !</h4>
         		<p>`+responseMessage+`</p></div>`).fadeIn(); //error message display


         	$("#btnId").prop('disabled', false); // enable button
         }



//FOR STRONG ERROR MESSAGES
         if(convertObject.code === 401 ){
         	$("#resultId").html(`<div class="alert alert-danger" role="alert">
         		<h4 class="alert-heading">Error !</h4>
         		<p>`+responseMessage+`</p></div>`).fadeIn(); //error message display


         	$("#btnId").prop('disabled', false); // enable button
         }



//FOR SUCCESS MESSAGES notice the class in the HTML changes !!
         if(convertObject.code === 200 )

         {

	$("#resultId").html(`<div class="alert alert-success" role="alert">
         		<h4 class="alert-heading">Success !</h4>
         		<p>`+responseMessage+`</p></div>`).fadeIn();

	///Here we can redirect or do anythims
window.location = "Done.php" ;

         }


          

        },
        beforeSend:function()
        {
          $("#resultId").html(`<div class="on-load" style="text-align:center; align-items: center; width: 100%; margin-left: 43%;">
              <div class="spinner">
              </div>
          </div>`)
         $("#btnId").prop('disabled', true); // disable the button while processing !!
        }
    });

})

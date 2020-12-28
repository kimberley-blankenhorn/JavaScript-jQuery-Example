// this is where all the data for the movies will go. Everything should be just like it would be in the html so it lays out properly.

var jsonData = JSON.parse(movies);

for (i = 0; i < jsonData.length; i++) {
    $("#movies").append(`
    	
    	<div class="col-12 col-xl-5 m-auto" id="movieContent">
    		<div class="row m-1 border border-dark bg-dark text-white">
    			<img src="${jsonData[i].image}" class="col-4 mt-3 mb-3">
    			<div class="col 8">
    				<h4 class="row mt-3">${jsonData[i].name}</h4>
    				<p class="row h-50">${jsonData[i].description}</p>
    				<div class ="row p-4">
    					<button type="button" class="btn btn-success btn-sm active col-2 offset-5">Like</button>
    					<img class="ml-2" id="thumbsup" src="images/thumbsup.png">
    					<div class="circle bg-green ml-2" id="circle${i}">
    					<p id="${i}">${jsonData[i].likes}</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	

  	`);
}


// this is where we will put stuff for the like button

for (let i = 0; i < jsonData.length; i++) {
    $('.btn-info:eq(' + i + ')').after(`<p id=${i}>${jsonData[i].likes}</p>`);
}

$('.btn-success').on('click', function() {
    let x = $(this).parent().find(".circle p").attr('id');
    console.log(x);
    jsonData[x].likes++;
    console.log("input is " + jsonData[x].likes);
    $(`#${x}`).text(jsonData[x].likes);
    console.log("final is " + jsonData[x].quantity);
})
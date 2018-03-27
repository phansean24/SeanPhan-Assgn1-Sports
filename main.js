 $( document ).ready(function() {

 	$(".col-one").mouseenter(function(){
 		$("#bg-one").addClass("darken");
 		$("#h-one").removeClass("hidden");
 		$("#d-one").removeClass("hidden");

 		$("#bg-two").removeClass("darken");
 		$("#h-two").addClass("hidden");
 		$("#d-two").addClass("hidden");

 		$("#bg-three").removeClass("darken");
 		$("#h-three").addClass("hidden");
 		$("#d-three").addClass("hidden");

 		$("#bg-four").removeClass("darken");
 		$("#h-four").addClass("hidden");
 		$("#d-four").addClass("hidden");

 	});

 	$(".col-two").mouseenter(function(){
 		$("#bg-two").addClass("darken");
 		$("#h-two").removeClass("hidden");
 		$("#d-two").removeClass("hidden");

 		$("#bg-one").removeClass("darken");
 		$("#h-one").addClass("hidden");
 		$("#d-one").addClass("hidden");

 		$("#bg-three").removeClass("darken");
 		$("#h-three").addClass("hidden");
 		$("#d-three").addClass("hidden");

 		$("#bg-four").removeClass("darken");
 		$("#h-four").addClass("hidden");
 		$("#d-four").addClass("hidden");

 	});

 	$(".col-three").mouseenter(function(){
 		$("#bg-three").addClass("darken");
 		$("#h-three").removeClass("hidden");
 		$("#d-three").removeClass("hidden");

 		$("#bg-one").removeClass("darken");
 		$("#h-one").addClass("hidden");
 		$("#d-one").addClass("hidden");

 		$("#bg-two").removeClass("darken");
 		$("#h-two").addClass("hidden");
 		$("#d-two").addClass("hidden");

 		$("#bg-four").removeClass("darken");
 		$("#h-four").addClass("hidden");
 		$("#d-four").addClass("hidden");

 	});

 	$(".col-four").mouseenter(function(){
 		$("#bg-four").addClass("darken");
 		$("#h-four").removeClass("hidden");
 		$("#d-four").removeClass("hidden");

 		$("#bg-one").removeClass("darken");
 		$("#h-one").addClass("hidden");
 		$("#d-one").addClass("hidden");

 		$("#bg-two").removeClass("darken");
 		$("#h-two").addClass("hidden");
 		$("#d-two").addClass("hidden");

 		$("#bg-three").removeClass("darken");
 		$("#h-three").addClass("hidden");
 		$("#d-three").addClass("hidden");

 	});

 	// end of first page/row of images

 	$(".two-col-one").mouseenter(function(){
 		$("#two-bg-one").addClass("darken");
 		$("#two-h-one").removeClass("hidden");
 		$("#two-d-one").removeClass("hidden");

 		$("#two-bg-two").removeClass("darken");
 		$("#two-h-two").addClass("hidden");
 		$("#two-d-two").addClass("hidden");

 		$("#two-bg-three").removeClass("darken");
 		$("#two-h-three").addClass("hidden");
 		$("#two-d-three").addClass("hidden");

 		$("#two-bg-four").removeClass("darken");
 		$("#two-h-four").addClass("hidden");
 		$("#two-d-four").addClass("hidden");

 	});

 	$(".two-col-two").mouseenter(function(){
 		$("#two-bg-two").addClass("darken");
 		$("#two-h-two").removeClass("hidden");
 		$("#two-d-two").removeClass("hidden");

 		$("#two-bg-one").removeClass("darken");
 		$("#two-h-one").addClass("hidden");
 		$("#two-d-one").addClass("hidden");

 		$("#two-bg-three").removeClass("darken");
 		$("#two-h-three").addClass("hidden");
 		$("#two-d-three").addClass("hidden");

 		$("#two-bg-four").removeClass("darken");
 		$("#two-h-four").addClass("hidden");
 		$("#two-d-four").addClass("hidden");

 	});

 	$(".two-col-three").mouseenter(function(){
 		$("#two-bg-three").addClass("darken");
 		$("#two-h-three").removeClass("hidden");
 		$("#two-d-three").removeClass("hidden");

 		$("#two-bg-one").removeClass("darken");
 		$("#two-h-one").addClass("hidden");
 		$("#two-d-one").addClass("hidden");

 		$("#two-bg-two").removeClass("darken");
 		$("#two-h-two").addClass("hidden");
 		$("#two-d-two").addClass("hidden");

 		$("#two-bg-four").removeClass("darken");
 		$("#two-h-four").addClass("hidden");
 		$("#two-d-four").addClass("hidden");

 	});

 	$(".two-col-four").mouseenter(function(){
 		$("#two-bg-four").addClass("darken");
 		$("#two-h-four").removeClass("hidden");
 		$("#two-d-four").removeClass("hidden");

 		$("#two-bg-one").removeClass("darken");
 		$("#two-h-one").addClass("hidden");
 		$("#two-d-one").addClass("hidden");

 		$("#two-bg-two").removeClass("darken");
 		$("#two-h-two").addClass("hidden");
 		$("#two-d-two").addClass("hidden");

 		$("#two-bg-three").removeClass("darken");
 		$("#two-h-three").addClass("hidden");
 		$("#two-d-three").addClass("hidden");

 	});




});
$("#menu a").show();

$("#menu a").on("click",function(){
  
	if(!$(this).is(".active")){
		$("#menu a").removeClass("active");
    $(this).addClass("active");
    attivaSection($(this).index());
  }
  
});



function attivaSection(indice){
	$(".contents .section").hide();
  $(".contents .section").eq(indice).show();
}





$(window).scroll(function() {
    let quanto = $(window).scrollTop();
    if(quanto > 150){
        $("#menu").addClass("active")
    }
    else{
        $("#menu").removeClass("active")
    }
});

$.ajax({
  dataType: "json",
  url: "./js/dati.json",
  
  success: function(data){
    var sections = data.sections;

    for(var i=0; i<sections.length;i++){
      alert(sections[i].id)
    }
  }
});


$(document).ready(function(){
    
    $.ajax({
        dataType: "json",
        url: "./js/dati.json",
        success: function(data){
          avviaApp(data);
        }
    });

});


function avviaApp(data){
    let json = data;
    //stampaMenu(data);
    //bindaClickMenu();
    stampaMenuConBind(data);
    stampaSezioni(data);
}



function stampaMenu(data){
    let target = $("#menu");
    
    for(var i=0; i<data.sections.length; i++){
        let is_active = (i==0)? "active" : "";
        let button = $("<a href='#' class='sponsor "+ is_active +"'>"+ data.sections[i].button_label +"</a>");
        target.append(button)
    }


}


function stampaMenuConBind(data){
    let target = $("#menu");
    
    for(var i=0; i<data.sections.length; i++){
        let is_active = (i==0)? "active" : "";
        let button = $("<a href='#' class='sponsor "+ is_active +"'>"+ data.sections[i].button_label +"</a>");

        button.on("click", function(){

            if(!$(this).is(".active")){
                $("#menu a").removeClass("active");
                $(this).addClass("active");
                attivaSection($(this).index());
            }

            
        })

        target.append(button)
    }
}




function stampaSezioni(data){
    let target = $(".sections");

    for(var i=0; i<data.sections.length; i++){
        
        //let button = $("<a href='#' class='sponsor "+ is_active +"'>"+ data.sections[i].button_label +"</a>");
        let html_section =  '<div class="section">'+
                                '<h1>'+ data.sections[i].title+'</h1>'+
                                '<div class="section_container">'+ data.sections[i].text+'</div>'+
                            '</div>';

        target.append( $(html_section) );
    }

}

function bindaClickMenu(){
    $("#menu a").on("click",function(){
  
        if(!$(this).is(".active")){
            $("#menu a").removeClass("active");
        $(this).addClass("active");
        attivaSection($(this).index());
      }
      
    });
}


function attivaSection(indice){
    $(".contents .section").hide();
    $(".contents .section").eq(indice).show();
}
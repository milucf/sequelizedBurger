$(document).ready(function(){
    var orderedBurgers=[];
    $("#burger-submit").on("click",function(){
        if( $("#cus-name").val().trim().length==0 || orderedBurgers.length==0){
            $("#alertMsg").html("<span class='alert alert-danger'>please enter a customer name and at least add one order of burger</span>");
            return;
        }

        var newBurger={
            customer:$("#cus-name").val().trim(),
            burger_names:[]
        };
        for(i=0;i<orderedBurgers.length;i++){
            newBurger.burger_names.push(orderedBurgers[i]);
        }
    $("#burger-name").val("");
    $("#cus-name").val("");
    $("#burgerList").empty();
    $("#alertMsg").empty();
    while(orderedBurgers.length){orderedBurgers.pop();} 
    $.post("/", newBurger, function() {
        getBurgers();
      });
    });

    $("#burger-add").on("click",function(){
        if( $("#burger-name").val().trim().length==0){
            $("#alertMsg").html("<span class='alert alert-danger'>please enter a customer name and at least add one order of burger</span>");
            return;
        }

        $("#burgerList").append("<li>"+ $("#burger-name").val().trim()+"</li>");
        orderedBurgers.push($("#burger-name").val().trim());
        $("#burger-name").val("");
        $("#burger-name").focus();
    });

    $(document).on("click",".btn-devour",function(){
        var dataObj={
            id:$(this).attr("data-burgerid")
        }
            $.ajax({
            method: "PUT",
            url: "/",
            data:dataObj
          }).done(function(){
              getBurgers();
          });
    });


    function getBurgers(){
         var nodevourHtml;
         var devourHtml;
         $("#uldevoured").empty();
         $("#ulNotdevoured").empty();
         $.get("/api/burgers",function(data){
              for(i=0;i<data.length;i++){
                  if(data[i].devoured)
                    $("#uldevoured").append("<li class=\"list-group-item list-group-item-success\">"+data[i].Customer.customer_name+" devoured "+data[i].burger_name+"</li>");
                  else
                    $("#ulNotdevoured").append("<li class=\"list-group-item list-group-item-warning\">"+data[i].Customer.customer_name+" ordered "+data[i].burger_name+"<button data-burgerid=\""+
                                                data[i].id+"\" type=\"button\" class=\"btn-default btn-devour\">devour it!</button></li>");
              }
         });
    }

});
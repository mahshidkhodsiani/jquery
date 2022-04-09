
 $(document).ready(function(){

    $("form").on("submit" , function(event){
        event.preventDefault();
    });
      
    
    
    var j=1;
    $(".submit").click(function(){
        var firstN = $("#firsName").val();
        var lastN = $("#lastName").val();
        var emailN = $("#email").val();
        var ageN = $("#age").val();

        if (firstN == "" || lastN == "" || emailN == "" ) {
            M.toast({html: 'Enter all'});
            return;
        }

       
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if( !emailReg.test( emailN ) ) {
            M.toast({html: 'plaese enter correct email'});
            return;
        }
        
       

        var row = "<tr id='row" + j + "'>";
        row += "<td>" + firstN +"</td>";
        row += "<td>" + lastN +"</td>";
        row += "<td>" + emailN +"</td>";
        row += "<td>" + ageN +"</td>";
        row += "<td> <button class='delete waves-effect waves-light btn'> delete </button> </td>";
        row += "<td> <button class='edit waves-effect waves-light btn'> edit </button> </td>";
        row += "</tr>";

        $("#myTable").append(row);
        j++;

        reset();
    });

   

    $(document).on("click", ".delete", function() {
         $(this).closest("tr").remove();
    });


    //marhale aval edit : gereftan az jadval va gozashtan dakhel input ha
    $(document).on("click", ".edit", function() {
        var name1 = $(this).parents("tr").children("td:nth-child(1)").text();
        var name2 = $(this).parents("tr").children("td:nth-child(2)").text();
        var name3 = $(this).parents("tr").children("td:nth-child(3)").text();
        var name4 = $(this).parents("tr").children("td:nth-child(4)").text();

        $("#firsName").val(name1);
        $("#lastName").val(name2);
        $("#email").val(name3);
        $("#age").val(name4);


       
        $(".submit").prop("disabled", true);


        var m = $(this).parents("tr").attr("id");

        var i = '<i class="material-icons">edit</i>' ;
        var btn = $('<input/>').attr({
                 class:"waves-effect waves-light btn",
                 type: "submit",
                 id: "edite",
                 value: "edite",
                 onclick: 'myFunction(\''+ m +'\')'
            });
        
        
        $("form").append(i,btn);
        

        $(".delete").prop("disabled", true);
        $(".edit").prop("disabled", true);
        $("#"+ m).css("background-color", "coral");

        $('label').css('display', 'none'); 
    });

});


//marhale dovom edit : gereftan az input va gozashtan dar jadval ba esyefade az onclick da edite form
function myFunction(id){
    var first = $("#firsName").val();
    var last = $("#lastName").val();
    var email = $("#email").val();
    var age = $("#age").val();

    if (first == "" || last == "" || email == "" ) {
        M.toast({html: 'Enter all'});
        return ;
    }

   
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( email ) ) {
        M.toast({html: 'plaese enter correct email'});
        return;
    }

    
    $("#"+id).children("td:nth-child(1)").html(first);
    $("#"+id).children("td:nth-child(2)").html(last);
    $("#"+id).children("td:nth-child(3)").html(email);
    $("#"+id).children("td:nth-child(4)").html(email);

    

    $(".submit").prop("disabled", false);
   
    $("#edite").remove();
    $("i").remove();

    reset();

    $(".delete").prop("disabled", false);
    $(".edit").prop("disabled", false);

    $("#"+ id).css("background-color", "white");

    $('label').show();


   
}

function reset(){
    $( '.new' ).each(function(){
        this.reset();
    });
}


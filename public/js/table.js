
 $(document).ready(function(){

    $("#form1").on("submit" , function(event){
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

        var ageReg = /[1-9]{2}/ ;
        if (!ageReg.test (ageN)) {
            M.toast({html: 'plaese enter correct age'});
            return;
        }
        
       

        var row = "<tr id='row" + j + "'>";
        row += "<td>" + firstN +"</td>";
        row += "<td>" + lastN +"</td>";
        row += "<td>" + emailN +"</td>";
        row += "<td>" + ageN +"</td>";
        row += "<td> <button class='delete waves-effect waves-light btn-small'> delete </button> </td>";
        row += "<td> <button class='edit waves-effect waves-light btn-small'> edit </button> </td>";
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

        M.updateTextFields();


       
        $(".submit").prop("disabled", true);


        var m = $(this).parents("tr").attr("id");


        var btn = $('<a><i class="material-icons left">edit</i>edite</a>').attr({
                 class:"waves-effect waves-light btn",
                 id: "edite",
                 onclick: 'myFunction(\''+ m +'\')'
            });
        
        
        $(".submit").after(btn);
        

        $(".delete").prop("disabled", true);
        $(".edit").prop("disabled", true);
        $("#"+ m).css("background-color", "coral");


    });

});


//marhale dovom edit : gereftan az input va gozashtan dar jadval ba esyefade az onclick da edite form
function myFunction(id){
    var first = $("#firsName").val();
    var last = $("#lastName").val();
    var email = $("#email").val();
    var age = $("#age").val();

    if (first == "" || last == "" || email == "" || age == "") {
        M.toast({html: 'Enter all'});
        return ;
    }

   
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if( !emailReg.test( email ) ) {
            M.toast({html: 'plaese enter correct email'});
            return;
    }

    var ageReg = /[1-9]{2}/ ;
        if (!ageReg.test (age)) {
            M.toast({html: 'plaese enter correct age'});
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

   

   
}

function reset(){
    $( '.new' ).each(function(){
        this.reset();
    });
}



 $(document).ready(function(){

    $("form").on("submit" , function(event){
        event.preventDefault();
    });
            
    var j=1;
    $(".submit").click(function(){
        var firstN = $("#firsName").val();
        var lastN = $("#lastName").val();
        var emailN = $("#email").val();

        var row = "<tr id='row" + j + "'>";
        row += "<td>" + firstN +"</td>";
        row += "<td>" + lastN +"</td>";
        row += "<td>" + emailN +"</td>";
        row += "<td> <button class='delete'> delete </button> </td>";
        row += "<td> <button class='edit'> edit </button> </td>";
        row += "</tr>";

        $("#myTable").append(row);
        j++;

        reset();
    });

    $(document).on("click", ".delete", function() {
         $(this).closest("tr").remove();
    });


    $(document).on("click", ".edit", function() {
        var name1 = $(this).parents("tr").children("td:nth-child(1)").text();
        var name2 = $(this).parents("tr").children("td:nth-child(2)").text();
        var name3 = $(this).parents("tr").children("td:nth-child(3)").text();

        $("#firsName").val(name1);
        $("#lastName").val(name2);
        $("#email").val(name3);

       
        $(".submit").prop("disabled", true);


        var m = $(this).parents("tr").attr("id");

        var btn = $('<input/>').attr({
                 type: "submit",
                 id: "edite",
                 value: "edite",
                 onclick: 'myFunction(\''+ m +'\')'
            });

        $("form").append(btn);
    });

});


function myFunction(id){
    var first = $("#firsName").val();
    var last = $("#lastName").val();
    var email = $("#email").val();

    
    $("#"+id).children("td:nth-child(1)").html(first);
    $("#"+id).children("td:nth-child(2)").html(last);
    $("#"+id).children("td:nth-child(3)").html(email);

    

    $(".submit").prop("disabled", false);
    $("#edite").remove();

    reset();


}

function reset(){
    $( '.new' ).each(function(){
        this.reset();
    });
}


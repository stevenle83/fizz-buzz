$(document).ready(function() {

    $(".submit").on("click", function() {

        var number = $(".input").val();

        $(".input").val("");

        $("#output").text("");

        for ( var i = 1; i <= number; i ++ ) {

            if ( i % 3 === 0 && i % 5 === 0 ) {

                $("#output").append('Fizz Buzz <br>');

            } 

            else if ( i % 3 === 0 ) {

                $("#output").append('Fizz <br>');

            }

            else if ( i % 5 === 0 ) {

                $("#output").append('Buzz <br>');

            }

            else {

                $("#output").append(i + '<br>');

            }

        }   
    
    });

});
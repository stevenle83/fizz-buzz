$(document).ready(function() {

    var fizzBuzz = function (number) {
        
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

    }

    var userInput = function () {

        $(".submit").on("click", function() {

            var num = +$(".input").val();

            +$(".input").val("");

            if ( num < 1 || num > 100 ) {

                alert('Please enter a number from 1 to 100!');

            }

            else if ( isNaN(num) ) {

                alert('Please enter a numerical value!');

            }

            else if ( num % 1 != 0 ) {

                alert('Please enter whole numbers only, no decimals!');

            }

            else {

                fizzBuzz(num);

            }

        });    

    }    

    userInput();
    
});
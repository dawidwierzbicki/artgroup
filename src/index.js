// Remove the following lines, if you do not need any of Bootstrap's JavaScript features
import Popper from "popper.js";
window.jQuery = $;
window.$ = $;

require("bootstrap");

$(document).ready(function() {
    //Choose amount of donation
    $('.main__amount').click(function() {
        $('.main__amount').removeClass('main__amount--active');
        $(this).addClass('main__amount--active');
    })

    //Submit form
    $('.main__form').submit(function(e) {
        e.preventDefault();

        //Check if inputs are filled
        $('.form__input').each(function() {
            if(!$(this).val()) {
                $(this).prev('.form__error').text('Wypełnij poniższe pole');
            }
        });

        //Check if checkbox is checked
        $('.form__checkbox').prev('.form__error').text($('.form__checkbox').is(':checked') ? '' : 'Zaznacz wymaganą zgodę'); 

        //Remove error while input is filled
        $('.form__input').keyup(function() {
            $(this).prev('.form__error').text('');
        });


        //Remove error whn checkbox is checked
        $('.form__checkbox').change(function() {
            $('.form__checkbox').prev('.form__error').text('');
        });
    });
})

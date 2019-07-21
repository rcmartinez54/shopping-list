// defining my function inside of jQuery's callback syntax
// where the code wont run until page has loaded.
// this takes place of document.ready()

$(function() {

    // waits for user to enter their text and hit the submit
    // button.  Once user submits, it evokes and anonymous
    // function with the event as its argument.
    $('#js-shopping-list-form').submit(event => {

        // this stops the browsers default submit behavior
        event.preventDefault();

        // gets the value of the user's text and assigns it to 
        // a variable named textElement
        const textElement = $(event.currentTarget).find('#shopping-list-entry').val();
        
        // I used console log at this point to see if I was able
        // to get the users correct text
        console.log(textElement);


        // once the user hits submit, this resets the input field
        // to an empty value.  It clears the field and returns to 
        // the placeholder
        $('#shopping-list-entry').val("");

        // once the user hits submit, their text along with all the
        // necessary markup is appended into a new shopping item
        // list item.
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${textElement}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    });

    // this is an event listener that waits for the click event
    // to happen on the delete button with a class of 
    // .shopping-item-delete and evokes an anonymous function
    // with the click event as its argument
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        // once again, this stops the browsers default submit
        event.preventDefault();
        // uses $(this) to target the exact button being clicked and 
        // removes the closest list item
        $(this).closest('li').remove();
    });
        
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        // does the same as the above method however it toggles the 
        // .shopping-item__checked class on the closest list item
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});
// defining my function inside of jQuery's callback syntax
// where the code wont run until page has loaded.
// this takes place of document.ready()

$(function() {
    
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const textElement = $(event.currentTarget).find('#shopping-list-entry').val();
        console.log(textElement);

        $('#shopping-list-entry').val("");
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

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    });
        
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});
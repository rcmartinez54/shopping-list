$(function() {
    // $('.shopping-item-toggle').submit(event => {
    //     event.preventDefault();
    //     const textElement = $(event.currentTarget).find('#shopping-list-entry');
    //     $('.')
    // });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    });
        
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});
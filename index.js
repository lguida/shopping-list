$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userNewItem = $(this).find('#shopping-list-entry').val(); //replaced event.currentTarget with this here
        $('ul').append('<li><span class="shopping-item">'+ userNewItem +'</span> <div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        const itemToToggle = $(event.currentTarget).closest("li").find(".shopping-item");
        itemToToggle.toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', event => {
        const itemToDelete = $(event.currentTarget).closest("li");
        itemToDelete.remove();
    });
});


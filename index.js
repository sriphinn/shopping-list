$(function() {
    
    $('#js-shopping-list-form').submit( event => {
    event.preventDefault();
    const newItems = $(this).find('input[name="shopping-list-entry"]').val();
    $('.shopping-list').append(`<li>
        <span class="shopping-item">${newItems}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

      console.log("added item");

    });
    
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        console.log("clicked check button")
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');     
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        console.log("clicked delete button");
        $(this).closest('li').remove();
    });

});
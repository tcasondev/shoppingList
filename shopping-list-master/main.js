$(function (){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const listItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        $('#js-shopping-list-entry').val('');
        console.log(`${listItem}`);

        $('.shopping-list').append(
            `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        )
    })

    $(function(){
        $('.shopping-item-toggle').click(function(event){

            $(this).closest('li').find(`.shopping-item`).toggleClass(`shopping-item__checked`);
            console.log(` has been checked`)
        })
    })

    $(function(){
        $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
            $(this).closest('li').remove();
                console.log('Deleted');
            
        })
    })

    /*$(function(){
        $('.shopping-list').on('click', '.shopping-item-delete', event => {
            $(this).closest('li').remove();
            console.log('Deleted');
        })
    })*/

    /*$(function(){
        $('.shopping-item-delete').click(function(event){
            $(this).closest('li').remove();
                console.log('Deleted');
            
        })
    })*/
})

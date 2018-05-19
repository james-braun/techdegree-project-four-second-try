
// select and remove H1 element.
const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'search');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('value', '');
searchElement.setAttribute('name', 'user_search');

// add input element to the webpage.
document.getElementById('search-bar').appendChild(searchElement);

// show arrows on all mobile devices.
lightbox.option({
     'alwaysShowNavOnTouchDevices': true
});

$(document).ready(function() {    
    $('input').keyup( function ( event ) {

        let search_text = document.getElementById('search').value.toUpperCase();
        
        $('a').each(function() {
            let caption_string = $(this).attr('data-title');
            if (caption_string) {
                caption_string = caption_string.toUpperCase();
                if (caption_string.includes(search_text) === true) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            }
        });
    });
});


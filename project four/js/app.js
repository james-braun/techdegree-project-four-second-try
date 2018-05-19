
// select and remove H1 element.
const element = document.getElementById('gallery-heading');
element.remove();

// create a inpput element.
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
    
    // input event keyup()
    $('input').keyup( function ( event ) {

        // cycle though all anchor elements
        $('a').each(function() {

            // if the for loop anchor element is not null.  compare the anchor elements data-title to the search elements value and show or hide pictures as necessary.
            if (($(this).attr('data-title')) && ($(this).attr('data-title').toUpperCase().includes(document.getElementById('search').value.toUpperCase()) === true)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});


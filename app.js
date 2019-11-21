document.querySelector('.rating-group').addEventListener('click', function(event) {
    // Variable to store the class of element
    var clickedSelector = ''
    // add class of parent div
    clickedSelector += '.' + event.path[1].className
    // get the class of actual star element which was clicked
    var innerClass = event.path[0].className.split(' ')[2]
    clickedSelector += ' i.' + innerClass
    // get the index of actual star which was clicked
    var indexOfStar = parseInt(innerClass.split('-')[1])
    // Change color of all stars before the selected star
    for(var i=1; i<=indexOfStar; i++) {
        var newSelector = clickedSelector.slice(0, clickedSelector.length - 1) + i.toString()
        document.querySelector(newSelector).classList.add('star-selected')
    }

    // Remove golden color of all stars after the selected star 
    for(var i=indexOfStar + 1; i<=5; i++) {
        var newSelector = clickedSelector.slice(0, clickedSelector.length - 1) + i
        document.querySelector(newSelector).classList.remove('star-selected')
    }
});
var firstItem = document.getElementById('one');
if (firstItem.hasChildNodes('class')) {
    var attr = firstItem.getAttribute('class');
    var el = document.getElementById('scriptResult');
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}
const categories = document.querySelectorAll('li.item');

console.log('Number of categories:', categories.length)

categories.forEach((category) => {
    const h2 = category.querySelector('h2');
    console.log('Category:', h2.textContent);
    const li = category.querySelectorAll('ul li');
    console.log('Elements:', li.length);

});







const categoriesList = document.querySelector('#categories');

const listCount = categoriesList.querySelectorAll('.item').length;
console.log(`Numbers of categories: ${listCount}`);

categoriesList.querySelectorAll('.item').forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});

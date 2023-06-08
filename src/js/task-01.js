const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);

const listEl = document.querySelectorAll('li.item');
listEl.forEach(el => console.dir(`Category: ${el.firstElementChild.textContent} Elements: ${el.lastElementChild.childElementCount
}`));
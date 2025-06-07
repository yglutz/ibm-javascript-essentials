const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const drinksMenu = ['Coffee', 'Tea', 'Juice', 'Soda'];

const breakfastMenuItemsHtml = breakfastMenu.map((item, index) =>
    `<p>Item ${index + 1}: ${item}</p>`).join('\n');

let mainCourseItem = '';


mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item: ${index + 1}: ${item}</p>`;
});
let dessertItem = '';


for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item: ${i + 1}: ${dessertMenu[i]}</p>`;
}



document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHtml;
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
document.getElementById('dessertMenuItems').innerHTML = dessertItem;


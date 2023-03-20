const createMenuPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

  const menuList = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  const menuItem2 = document.createElement('li');
  const menuItem3 = document.createElement('li');
  const menuItem4 = document.createElement('li');

  menuItem1.textContent = 'Juicy Burger';
  menuItem2.textContent = 'Fish and Chips';
  menuItem3.textContent = 'Chicken Pot Pie';
  menuItem4.textContent = 'BEER!';

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);
  menuList.appendChild(menuItem4);
  pageContent.appendChild(heading);
  pageContent.appendChild(menuList);
  content.appendChild(pageContent);
};

export default createMenuPage;

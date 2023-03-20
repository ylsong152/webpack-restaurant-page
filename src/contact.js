const createContactPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const contactDiv = document.createElement('div');
  const contactDetails = document.createElement('div');
  const restaurantName = document.createElement('h3');
  const detail1 = document.createElement('p');
  const detail2 = document.createElement('p');
  const detail3 = document.createElement('p');
  const image = document.createElement('img');

  image.src = '../images/Contact-pic.jpg';
  image.height = '200';
  restaurantName.textContent = 'The Drunken Ogre';
  detail1.textContent = '1111-111-1111';
  detail2.textContent = 'thedrunkenogre@fakemail.com';
  detail3.textContent = '420 Main Street, Ogre Avenue';

  contactDiv.classList.add('contact-div');
  contactDetails.classList.add('contact-details');

  contactDetails.appendChild(restaurantName);
  contactDetails.appendChild(detail1);
  contactDetails.appendChild(detail2);
  contactDetails.appendChild(detail3);
  contactDiv.appendChild(contactDetails);
  contactDiv.appendChild(image);
  pageContent.appendChild(heading);
  pageContent.appendChild(contactDiv);
  content.appendChild(pageContent);
};

export default createContactPage;

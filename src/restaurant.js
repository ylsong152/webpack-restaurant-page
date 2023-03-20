const createHomePage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  // Create and append headline
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to our tavern!';
  pageContent.appendChild(headline);

  // Create and append image
  const image = document.createElement('img');
  image.src = '../images/Tavern-background.jpeg';
  image.classList.add('homepage-img');
  pageContent.appendChild(image);

  const reviews = document.createElement('h2');
  reviews.textContent = 'Top Review';
  pageContent.appendChild(reviews);

  const image2 = document.createElement('img');
  image2.src = '../images/homepage-thumbsup.jpeg';
  image2.classList.add('homepage-img2');
  pageContent.appendChild(image2);

  // Create and append copy
  const copy = document.createElement('p');
  copy.textContent = 'Best tavern in town!';
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createHomePage;

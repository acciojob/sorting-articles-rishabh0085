const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled'];

// Function to sort articles without considering specified words
function sortArticles(articles) {
  return articles.sort((a, b) => {
    // Function to remove specified words from article title
    const removeWords = str => str.replace(/^(a|an|the)\s+/i, '');
    // Compare articles without specified words
    return removeWords(a) > removeWords(b) ? 1 : -1;
  });
}

// Function to display sorted articles in the unordered list
function displayArticles(articles) {
  const ul = document.getElementById('band');
  ul.innerHTML = ''; // Clear existing list
  articles.forEach(article => {
    const li = document.createElement('li');
    li.textContent = article;
    ul.appendChild(li);
  });
}

// Sort articles and display them
const sortedArticles = sortArticles(bands);
displayArticles(sortedArticles);
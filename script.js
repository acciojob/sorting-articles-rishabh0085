// Given bands array
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to strip common prefixes
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sort the bands array with a custom compare function
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Select the unordered list (ul) element
const list = document.getElementById('band');

// Create and append the list items (li) to the ul
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  list.appendChild(li);
});

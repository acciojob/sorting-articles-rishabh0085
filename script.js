//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    
    function sortBands(bands) {
        const excludedWords = ["a", "an", "the"];
        return bands.sort((a, b) => {
            const cleanA = a.replace(/(^|\s)(a|an|the)($|\s)/g, ' ').trim();
            const cleanB = b.replace(/(^|\s)(a|an|the)($|\s)/g, ' ').trim();
            return cleanA.localeCompare(cleanB, 'en', { sensitivity: 'base' });
        });
    }

    const sortedBands = sortBands(bands);
    const bandsList = document.getElementById('bandsList');

   
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandsList.appendChild(listItem);
    });
});
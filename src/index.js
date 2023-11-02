// Load your JSON data
fetch('./src/assets/hercule-fr-es.json')
  .then((response) => response.json())
  .then((data) => {
    console.log('loaded');
    const translationList = document.querySelector('translation-list');
    translationList.translations = data;
  })
  .catch((error) => {
    console.error('Error loading translations:', error);
  });

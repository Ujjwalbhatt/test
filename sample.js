document.addEventListener('DOMContentLoaded', function() {
    const collectionItems = document.querySelectorAll('.supersparks-item-select-npgbp');
    const downloadLink = document.querySelector('.download-link-block');
  
    collectionItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const downloadLinkElement = item.querySelector('.download-link');
        const downloadUrl = downloadLinkElement.textContent.trim();
        downloadLink.href = downloadUrl;
      });
    });
  });
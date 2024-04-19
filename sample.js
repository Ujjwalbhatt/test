document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
  
    const collectionItems = document.querySelectorAll('.supersparks-item-select-npgbp');
    const downloadLink = document.querySelector('.download-link-block');
  
    console.log('Collection items:', collectionItems);
    console.log('Download link:', downloadLink);
  
    collectionItems.forEach(function(item) {
      item.addEventListener('click', function() {
        console.log('Collection item clicked:', item);
  
        const downloadLinkElement = item.querySelector('.download-link');
        const downloadUrl = downloadLinkElement.textContent.trim();
  
        console.log('Download link element:', downloadLinkElement);
        console.log('Download URL:', downloadUrl);
  
        downloadLink.href = downloadUrl;
  
        console.log('Updated download link href:', downloadLink.href);
      });
    });
  });
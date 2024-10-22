document.addEventListener('DOMContentLoaded', function() {
  // Query the download link
  var downloadLink = document.querySelector('.download');

  // Add event listener
  downloadLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    window.location.href = downloadLink.getAttribute('href');
  });
});


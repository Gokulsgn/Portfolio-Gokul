// JavaScript (optional for adding interactivity)
document.querySelectorAll('.skills ul li').forEach(item => {
  item.addEventListener('mouseover', function() {
    item.style.color = 'red'; // On hover, change color to red
  });
  item.addEventListener('mouseout', function() {
    item.style.color = 'yellow'; // Restore original color
  });
});

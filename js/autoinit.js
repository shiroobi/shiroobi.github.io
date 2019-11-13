document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(navbar);
});

document.addEventListener('DOMContentLoaded', function() {
  var slider = document.querySelectorAll('.slider');
  var instances = M.Slider.init(slider,{
    duration: 1000,
    interval: 10000
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tabs');
  var instances = M.Tabs.init(tabs);
});
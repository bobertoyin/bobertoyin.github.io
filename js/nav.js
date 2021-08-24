function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function showSection(sectionClass, sectionID) {
  let sections = document.getElementsByClassName(sectionClass);
  let selected = document.getElementById(sectionID);
  Array.from(sections).forEach(element => {
    element.style.opacity = 0;
    element.style.filter = 'blur(3px)';
  });
  sleep(350).then(() => {
    Array.from(sections).forEach(element => {
      element.style.display = 'none';
    });
    selected.style.display = 'block';
    sleep(50).then(() => {
      selected.style.opacity = 1;
      selected.style.filter = 'blur(0)';
    }); 
  });
}

function getPropertyName(property, mod) {
  return '--' + property + '-' + mod;
}

function changeTheme() {
  let root = document.documentElement;
  let rootComputedStyle = getComputedStyle(root);
  let mode = rootComputedStyle.getPropertyValue('--current-mode');
  let properties = [
    'primary-text-color',
    'secondary-text-color',
    'tertiary-text-color',
    'background-color',
    'hover-brightness'
  ];
  
  if (mode == 0) {
    for (const property of properties) {
      let propertyDark = rootComputedStyle.getPropertyValue(getPropertyName(property, 'dark'));
      root.style.setProperty(getPropertyName(property, 'current'), propertyDark);
    }
    root.style.setProperty('--current-mode', 1);
  } else {
    for (const property of properties) {
      let propertyDark = rootComputedStyle.getPropertyValue(getPropertyName(property, 'light'));
      root.style.setProperty(getPropertyName(property, 'current'), propertyDark);
    }
    root.style.setProperty('--current-mode', 0);
  }
}
const d = document,
    $toggleSwitch = d.querySelector('.toggle__label__input[type="checkbox"]'),
    currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if(currentTheme) {
    d.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        $toggleSwitch.checked = true;
    }
}

const switchTheme = (e) => {
    if (e.target.checked) {
        d.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        d.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        $toggleSwitch.checked = false;
    }
}

$toggleSwitch.addEventListener('change', switchTheme, false);
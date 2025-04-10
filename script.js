document.querySelector('.btn').addEventListener('click', function() {
    const wifiStatus = document.getElementById('wifi').checked ? 'Enabled' : 'Disabled';
    const dataStatus = document.getElementById('data').checked ? 'Enabled' : 'Disabled';
    const brightnessValue = document.getElementById('brightness').value;

    alert(`Wi-Fi: ${wifiStatus}\nMobile Data: ${dataStatus}\nBrightness: ${brightnessValue}%`);
});

// Init Materialize tabs
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems);
});

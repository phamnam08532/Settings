document.addEventListener("DOMContentLoaded", function() {
    // Khởi tạo các tabs của Materialize
    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems);

    // Khởi tạo switch button của Materialize
    var switches = document.querySelectorAll('.switch');
    M.FormSelect.init(switches);

    // Sự kiện thay đổi độ sáng
    var brightness = document.getElementById('brightness');
    brightness.addEventListener('input', function() {
        console.log('Độ sáng: ' + brightness.value);
    });

    // Sự kiện thay đổi âm lượng
    var volume = document.getElementById('volume');
    volume.addEventListener('input', function() {
        console.log('Âm lượng: ' + volume.value);
    });
});

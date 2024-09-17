var toggleButton = document.getElementById('toggle-button');
var workExperince = document.getElementById('work-expeience');
toggleButton.addEventListener('click', function () {
    if (workExperince.style.display === 'none') {
        workExperince.style.display = 'block';
    }
    else {
        workExperince.style.display = 'none';
    }
});

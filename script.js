
const subjectLinks = document.querySelectorAll('.subject-link');


subjectLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

    
        const subjectName = this.getAttribute('data-subject');

    
        localStorage.setItem('selectedSubject', subjectName);

     
        window.location.href = 'teacher.html';
    });
});

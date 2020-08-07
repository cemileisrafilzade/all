const filterTitlesContainer =  document.getElementById('filter-titles');
const projects = document.querySelectorAll('.project-item');

filterTitlesContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('filter-title')) {
        const title = e.target;
        const type = title.dataset.filterby || 'project-item';
        const isActive = title.classList.contains('active');

        if(!isActive) {
            document.querySelector('.filter-title.active').classList.remove('active');
            title.classList.add('active');

            filterByClassName(projects, type);
        }
        // console.log(isActive);
    }
});

function filterByClassName(elements, className) {
    for(let element of elements) {
        element.hidden = !element.classList.contains(className);
    }
}
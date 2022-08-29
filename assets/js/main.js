const filterBtns = document.querySelectorAll('.gallery-filter button');
const galleryItems = document.querySelectorAll('.gallery-contint .gallery-card');


filterBtns.forEach(btn => {
  btn.addEventListener('click', () =>{
    filterBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');

    const filterTarget = btn.dataset.filter;
    console.log(filterTarget);

    galleryItems.forEach(item => {
      item.classList.remove('hide');
      if(!item.classList.contains(filterTarget) && filterTarget !== 'all'){
        item.classList.add('hide');
      }
    }
    );
  })
})
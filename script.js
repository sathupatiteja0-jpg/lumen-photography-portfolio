const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
const filters=document.querySelectorAll('.filter');
const photos=document.querySelectorAll('.photo-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const category=button.dataset.filter;
  photos.forEach(photo=>photo.classList.toggle('hide',category!=='all'&&photo.dataset.category!==category));
}));
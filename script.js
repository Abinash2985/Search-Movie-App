const form = document.querySelector('form')
const gallery = document.querySelector('.image-container');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let id=form.querySelector('input').value;
    form.querySelector('input').value='';
    
    if(id==''){
        id="nothing";
    }
    movieApi(id);
})

async function movieApi(id){
    const res=await fetch(`https://api.tvmaze.com/search/shows?q=${id}`);
    const shows=await res.json();
    
    makeImages(shows);
}

function makeImages(shows) {
    for(let show of shows)
    {
        if(show.show.image)
        {   
            console.log(show.show.image.medium);
            const img = document.createElement('img');
            img.src=show.show.image.medium;
            gallery.append(img);
        }
    }
}
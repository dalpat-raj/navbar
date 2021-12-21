const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();

const navtoggle = document.querySelector('.nav-toggle')
const linkcontainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navtoggle.addEventListener('click',()=>{

    // linkcontainer.classList.toggle('show-links')
    const containerHeight = linkcontainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linkcontainer.style.height =  `${linksHeight}px`;
    }
    else{
        linkcontainer.style.height = 0;
    }

})

                        //  navbar  fixed

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')


window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navHeight)  
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }
})



        //   scroll behaviour

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function (link){
    // console.log(link);
    link.addEventListener('click', (e)=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linkcontainer.getBoundingClientRect().height;
        
        const fixednav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop-navHeight;
        // console.log(position);
        if(!fixednav){
            position = position - navHeight;
        }
        if(navHeight > 82){

            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linkcontainer.style.height = 0;
    });
})
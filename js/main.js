window.onload = () => { //When the window loads
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');


    setTimeout(() => {
        transition_el.classList.remove('is-active'); //Does so the transition isn't constantly active, so you can actually view the page
    }, 500);
    for (let i=0; i < anchors.length; i++) { //Loop through every anchor tag(a)
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault(); // When you preventDefault it's not gonna link you to another page
            let target = e.target.href; // If we add an animation when we click the link, nothing i sgonna happen so we need this


            transition_el.classList.add('is-active'); // adds the overlay so the transition stays there but doesn't dissapear yet

            setInterval(() => {
                window.location.href = target; // target that's being stored is being used her ;D
                
            }, 500);
        });
    }
}
const parallax = document.querySelector(".parallax");
const layers = parallax.children;

function moveLayersDependsOnScroll (wScroll) {

    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 50;

        layer.style.transform = `translate3d(0, -${strafe}%, 0)`;
    })
};

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    const heightWindow = 1500;
    const widthTablet = 768;
    const userScreenWidth = window.innerWidth;
    
    if (wScroll < heightWindow && widthTablet < userScreenWidth){
    moveLayersDependsOnScroll (wScroll);
    }
});

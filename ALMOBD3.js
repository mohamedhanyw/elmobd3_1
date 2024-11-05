//*   ( 1 )  Home 
// Fade animation 
window.onload = function(){
    let home =document.getElementById('Home');
    home.style.opacity = 1 ;
    let LinE1 = document.getElementById('line_1');
    LinE1.style.width = '140px'
};
    function scrollToAi(){
    document.getElementById('container_2').scrollIntoView({ behavior: 'smooth' });
}; 

 //* ( 2 ) Ai

window.addEventListener('scroll', function() {
    const aiSec = document.querySelector('.Ai_sec');
    const aiSecPosition = aiSec.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (aiSecPosition < screenHeight) {
        aiSec.style.transform = 'translateX(0)'; // Slide into view
    } else {
        aiSec.style.transform = 'translateX(100%)'; // Reset when out of view
    }
});


// window.onscroll =function(){
//     let LinE2 = document.getElementById('line_2');
//     LinE2.style.width = '90px'
// };


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.getElementById("line_2").classList.add("active");
            }
        });
    });

    const target = document.querySelector("#bottomWord2");
    observer.observe(target);
});
















//* ( 3 )  Cyber Security
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.getElementById("line_3").classList.add("active");
            }
        });
    });

    const target = document.querySelector("#bottomWord3");
    observer.observe(target);
});


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add burst class to each child div
                const childDivs = entry.target.children;
                for (let div of childDivs) {
                    div.classList.add("burst");
                }
            }
        });
    });

    const target = document.querySelector(".CyberSecurity_divs");
    observer.observe(target);
});

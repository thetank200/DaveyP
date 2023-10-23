let section = document.querySelectorAll('section');
const nav = document.getElementById('nav');
//const tcol = document.getElementById('n')
const navLinks = document.querySelectorAll('.nav_a');



window.onscroll = () => {

    section.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop + 100;
        let height = i.offsetHeight;

        if (top >= offset && top < offset + height) {
            nav.classList.remove('navigation');
            nav.classList.add('navigation_col');
            navLinks.forEach(link => {
                link.style.color = "#000";
            });

        }
        else {
            nav.classList.remove('navigation_col')
            nav.classList.add('navigation');
            navLinks.forEach(link => {
                link.style.color = "#fff";
            });

        }
    });
};

current_img = 0
cashe = 0
const image_control = document.querySelector('.fig');
const button = document.getElementById('slider')
button_cashe = button.onclick
function nextimg(n) {
    clearInterval(auto_time)
    current_img -= n
    cashe += 1
    if (cashe >= 4) {
        current_img = 0
        cashe = 0
    }
    image_control.style.left = current_img + "%";
    console.log(current_img)
    console.log(cashe)
    button.onclick = null
    console.log("wate")

    function wate() {
        console.log("continue")
        button.onclick = button_cashe

    }
    setTimeout(wate, 500);

}

auto_time = setInterval(auto_slide, 4000)
function auto_slide() {

    console.log("auto")
    current_img -= 100
    cashe += 1
    if (cashe >= 4) {
        current_img = 0
        console.log(current_img)
        cashe = 0
    }
    image_control.style.left = current_img + "%";

}































// const img_c = document.getElementById('img_chage');
// var count = 0;

// function change_active() {
//     count = count + 1;
//     if (count >= 4) {
//         count = 1
//     }
//     img_c.src = "";
//     var tot = count.toString();
//     var change = "colour" + tot
//     console.log(change)
//     img_c.classList.add(change)


// }



// const slides = document.querySelectorAll('.allslide');
// var count_id = 1
// var count_id_next = 2


// function change_active(n) {
//     var fade = document.getElementById("s" + count_id)

//     if (count_id_next >= 5) {
//         count_id_next = 2

//     }
//     var fade_next = document.getElementById("s" + count_id_next)
//     fade_next.style.opacity = .7;
//     fade.style.opacity = 0;
//     function next() {
//         const get_id_remove = document.getElementById("s" + count_id)
//         get_id_remove.classList.remove("slide_block")
//         fade.style.opacity = 1;
//         if (count_id >= 4) {
//             count_id = 0
//         }

//         count_id = count_id + n
//         count_id_next = count_id + n


//         const get_id_add = document.getElementById("s" + count_id)
//         get_id_add.classList.add("slide_block")
//         function fade_in() {
//             fade_next.style.opacity = 1;
//         }
//         setTimeout(fade_in, 50);




//     }
//     setTimeout(next, 400);






// }
// console.log()




// //const slider = document.querySelector('.slide_cont');
// const slides = document.querySelectorAll('.allslide');
// console.log(slides)
// // Store the total number of images
// const slideCount = slides.length;
// let activeSlide = 0;
// console.log(slideCount)


// function change_active() {
//     slides[activeSlide].classList.remove('active');
//     activeSlide++;
//     if (activeSlide === slideCount) {
//         activeSlide = 0;
//     }
//     slides[activeSlide].classList.add('active');
// }
// console.log()
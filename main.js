'use srtict'


// make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


//Handle  scrolling when tapping on the navbar menu (클릭하면 움직이는 거)
const navbarMenu = document.querySelector('.navbar__menu');
document.addEventListener('click',(event) => {
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    console.log(event.target.dataset.link);     // 이런작업이 왜 필요한진 모르겠는데, 여튼 엘리먼트 요소에 데이터 셋 없어서 언디파인드 나오는 애들 언디파인드 안나오게 하는 작업임
    //여기부터는 메뉴 누르면 해당 페이지로 스크롤 되는 기능

    const scrollTo = document.querySelector(link); // 여기서 고생함, 여기 링크값은 html의 데이터 값을 받아오는데, 데이터 값의 이름이랑 테그의 아이디값이 달라서 한동안 목가지고왔음 (대소문자 구별 잘해야함.)
    scrollTo.scrollIntoView({behavior:'smooth'});
});

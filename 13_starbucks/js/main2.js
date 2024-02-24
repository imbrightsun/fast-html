// 클릭, 블러 시 인풋박스 포커스 처리 ------------------------------------
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 스크롤에 따라 배지 숨김/보임 처리 ------------------------------------
const badgeEl = document.querySelector('header .badges');
// 부하 방지 (스크롤 작업 시 많이 사용됨)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지숨김
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지보임
  //   badgeEl.style.display = 'block';
  gsap.to(badgeEl, .6, {
    opacity: 1,
    display: 'block'
  });
  }
}, 300));
// _.throttle(함수,시간)


//비쥬얼에 있는 요소들 순차적으로 나타내기 --------------------------------
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7초 후, 1.4초 후, 2.1초 후, 2.8초 후 나타남
    opacity: 1
  });
});

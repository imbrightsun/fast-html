// 클릭, 블러 시 인풋박스 포커스 처리

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



// 스크롤에 따라 배지 숨김/보임 처리

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

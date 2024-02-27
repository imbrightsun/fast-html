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


//슬라이드 라이브러리 -----------------------------------------------
new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical', 
  loop: true,
  autoplay: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000 // 5초
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


//토글 ----------------------------------------------------------
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

// 플로팅 애니메이션 만들기 (둥둥 떠있는 애들) ----------------------------
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// https://gsap.com/docs/v3/Eases/
function floatingObject(selector, delay, size) {
 // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5),//애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
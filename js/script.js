// GNB 스크롤 투명도 & 블러 효과
(function () {
    const $nav = $('#nav');
    const SCROLL_THRESHOLD = 60; // 이 px 이상 내려가면 scrolled 적용

    function updateNav() {
        if ($(window).scrollTop() > SCROLL_THRESHOLD) {
            $nav.addClass('scrolled');
        } else {
            $nav.removeClass('scrolled');
        }
    }

    // 스크롤 이벤트 (requestAnimationFrame으로 성능 최적화)
    let ticking = false;
    $(window).on('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                updateNav();
                ticking = false;
            });
            ticking = true;
        }
    });

    // 페이지 로드 시 초기 상태 적용
    updateNav();
}());

//gnb hover 효과
$('.gnb_web li a').hover(
    function () {
        $(this).addClass('hovered');
    },
    function () {
        $(this).removeClass('hovered');
    }
);

//gnb 클릭시 부드러운 스크롤
$('.gnb_web li a').on('click', function (e) {
    const href = $(this).attr('href');

    // href가 #으로 시작하는 경우에만 스크롤 처리
    if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();

        const target = $(href);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80  // nav 높이만큼 빼기
            }, 800, 'swing');  // 800ms 동안 부드럽게 스크롤
        }
    }
});


// 통합 Banner 슬라이드 (하나의 구조로 반응형)
$(document).ready(function () {
    const $slider = $('.slider-container');

    // 슬라이더가 존재하지 않으면 종료
    if ($slider.length === 0) return;

    let currentIndex = 0;
    const $slides = $slider.find('.slide');
    const $dots = $slider.find('.dot');
    const $prevBtn = $slider.find('.arrow-prev');
    const $nextBtn = $slider.find('.arrow-next');
    const totalSlides = $slides.length;
    let isAnimating = false;
    let autoSlideInterval;

    // 슬라이드 전환 함수
    function goToSlide(index) {
        if (isAnimating) return;

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        if (index === currentIndex) return;

        isAnimating = true;

        // 현재 슬라이드에 fade-out 클래스 추가
        $slides.eq(currentIndex).removeClass('active').addClass('fade-out');

        // 다음 슬라이드에 active 클래스 추가
        $slides.eq(index).addClass('active').removeClass('fade-out');

        // 점 표시 업데이트
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');

        currentIndex = index;

        // 애니메이션 완료 후 잠금 해제
        setTimeout(function () {
            isAnimating = false;
        }, 800);
    }

    // 이전 버튼
    $prevBtn.on('click', function () {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    // 다음 버튼
    $nextBtn.on('click', function () {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    });

    // 점 클릭
    $dots.on('click', function () {
        const index = $(this).data('index');
        if (index !== currentIndex) {
            goToSlide(index);
            resetAutoSlide();
        }
    });

    // 터치 스와이프 (touchstart / touchend)
    let touchStartX = 0;
    let touchStartY = 0;
    const SWIPE_THRESHOLD = 50;   // 최소 수평 이동 거리 (px)
    const ANGLE_THRESHOLD = 30;   // 수직 이탈 허용 각도 (deg)

    $slider[0].addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    $slider[0].addEventListener('touchend', function (e) {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;

        // 수직 스크롤과 구분: 수평 이동이 충분하고 각도가 완만할 때만 스와이프 처리
        const angle = Math.abs(Math.atan2(deltaY, deltaX) * (180 / Math.PI));
        const isHorizontal = angle < ANGLE_THRESHOLD || angle > (180 - ANGLE_THRESHOLD);

        if (Math.abs(deltaX) >= SWIPE_THRESHOLD && isHorizontal) {
            if (deltaX < 0) {
                // 왼쪽으로 스와이프 → 다음 슬라이드
                goToSlide(currentIndex + 1);
            } else {
                // 오른쪽으로 스와이프 → 이전 슬라이드
                goToSlide(currentIndex - 1);
            }
            resetAutoSlide();
        }
    }, { passive: true });

    // 자동 슬라이드 시작
    function startAutoSlide() {
        autoSlideInterval = setInterval(function () {
            goToSlide(currentIndex + 1);
        }, 4000);
    }

    // 자동 슬라이드 리셋 (사용자 조작 시)
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // 탭 전환 시 자동 슬라이드 제어
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            clearInterval(autoSlideInterval);
        } else {
            startAutoSlide();
        }
    });

    // 초기 자동 슬라이드 시작
    startAutoSlide();
});


//자주 묻는 질문 아코디언 기능
document.querySelectorAll('.faq-accordion-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const wasActive = faqItem.classList.contains('faq-active');

        // 모든 아이템 닫기
        document.querySelectorAll('.faq-accordion-item').forEach(item => {
            item.classList.remove('faq-active');
        });

        // 클릭한 아이템이 닫혀있었다면 열기
        if (!wasActive) {
            faqItem.classList.add('faq-active');
        }
    });
});

// View more 버튼
document.querySelector('.faq-viewmore-btn').addEventListener('click', () => {
    alert('더 많은 FAQ를 준비 중입니다!');
});


// 미디어룸 스와이퍼
var swiper = new Swiper(".postSwiper", {
    slidesPerView: 4,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    breakpoints: {
        320: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
    }
});

// 햄버거 메뉴
$(document).ready(function () {
    // 햄버거 클릭 이벤트
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        $('.mobile-menu-overlay').toggleClass('open');

        // 메뉴 열렸을 때 본문 스크롤 막기
        if ($('.mobile-menu-overlay').hasClass('open')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    $('.gnb_mobile li a').click(function () {
        $('.hamburger').removeClass('active');
        $('.mobile-menu-overlay').removeClass('open');
        $('body').css('overflow', 'auto');
    });
});

$(document).ready(function() {
    AOS.init();
});
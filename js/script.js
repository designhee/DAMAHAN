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


//web-banner slide 효과
$(document).ready(function () {
    let currentIndex = 0;
    const $slider = $('.web-slider'); // 현재 보이는 슬라이더
    const $slides = $slider.find('.slide');
    const $dots = $slider.find('.dot');
    const totalSlides = $slides.length;
    let isAnimating = false;

    // 슬라이드 전환 함수
    function goToSlide(index) {
        if (isAnimating) return; // 애니메이션 중에는 클릭 방지

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        if (index === currentIndex) return;

        isAnimating = true;

        // 현재 슬라이드에 fade-out 클래스 추가
        $slides.eq(currentIndex).removeClass('active').addClass('fade-out');

        // 다음 슬라이드에 active 클래스 추가 (이미지가 겹치며 전환)
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

    // 이전 버튼 클릭
    $('.arrow-prev').on('click', function () {
        goToSlide(currentIndex - 1);
    });

    // 다음 버튼 클릭
    $('.arrow-next').on('click', function () {
        goToSlide(currentIndex + 1);
    });

    // 점 클릭
    $dots.on('click', function () {
        const index = $(this).data('index');
        if (index !== currentIndex) {
            goToSlide(index);
        }
    });

    // 자동 슬라이드 (선택사항)
    setInterval(function () {
        goToSlide(currentIndex + 1);
    }, 4000);
});


//tablet-banner slide 효과
$(document).ready(function () {
    let currentIndex = 0;
    const $slider = $('.tablet-slider'); // 현재 보이는 슬라이더
    const $slides = $slider.find('.slide');
    const $dots = $slider.find('.dot');
    const totalSlides = $slides.length;
    let isAnimating = false;

    // 슬라이드 전환 함수
    function goToSlide(index) {
        if (isAnimating) return; // 애니메이션 중에는 클릭 방지

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        if (index === currentIndex) return;

        isAnimating = true;

        // 현재 슬라이드에 fade-out 클래스 추가
        $slides.eq(currentIndex).removeClass('active').addClass('fade-out');

        // 다음 슬라이드에 active 클래스 추가 (이미지가 겹치며 전환)
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

    // 이전 버튼 클릭
    $('.arrow-prev').on('click', function () {
        goToSlide(currentIndex - 1);
    });

    // 다음 버튼 클릭
    $('.arrow-next').on('click', function () {
        goToSlide(currentIndex + 1);
    });

    // 점 클릭
    $dots.on('click', function () {
        const index = $(this).data('index');
        if (index !== currentIndex) {
            goToSlide(index);
        }
    });

    // 자동 슬라이드 (선택사항)
    setInterval(function () {
        goToSlide(currentIndex + 1);
    }, 4000);
});

//mobile-banner slide 효과
$(document).ready(function () {
    let currentIndex = 0;
    const $slider = $('.mobile-slider'); // 현재 보이는 슬라이더
    const $slides = $slider.find('.slide');
    const $dots = $slider.find('.dot');
    const totalSlides = $slides.length;
    let isAnimating = false;

    // 슬라이드 전환 함수
    function goToSlide(index) {
        if (isAnimating) return; // 애니메이션 중에는 클릭 방지

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        if (index === currentIndex) return;

        isAnimating = true;

        // 현재 슬라이드에 fade-out 클래스 추가
        $slides.eq(currentIndex).removeClass('active').addClass('fade-out');

        // 다음 슬라이드에 active 클래스 추가 (이미지가 겹치며 전환)
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

    // 이전 버튼 클릭
    $('.arrow-prev').on('click', function () {
        goToSlide(currentIndex - 1);
    });

    // 다음 버튼 클릭
    $('.arrow-next').on('click', function () {
        goToSlide(currentIndex + 1);
    });

    // 점 클릭
    $dots.on('click', function () {
        const index = $(this).data('index');
        if (index !== currentIndex) {
            goToSlide(index);
        }
    });

    // 자동 슬라이드 (선택사항)
    setInterval(function () {
        goToSlide(currentIndex + 1);
    }, 4000);
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
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
    }
});

$(document).ready(function() {
    // 햄버거 클릭 이벤트
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-menu-overlay').toggleClass('open');
        
        // 메뉴 열렸을 때 본문 스크롤 막기 (선택사항)
        if($('.mobile-menu-overlay').hasClass('open')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    $('.gnb_mobile li a').click(function() {
        $('.hamburger').removeClass('active');
        $('.mobile-menu-overlay').removeClass('open');
        $('body').css('overflow', 'auto');
    });
});
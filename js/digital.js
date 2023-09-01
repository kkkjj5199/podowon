
/* Google map*/
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.367729, 126.965929),
            level: 2
        };
        var map = new kakao.maps.Map(container, options);
        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(37.367729, 126.965929);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setDraggable(true);


        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);


        var content = '<div class="customoverlay">' +
            '  <a href="http://kko.to/pNYElrMIGU" target="_blank">' +
            '    <span class="title">포도원 교회</span>' +
            '  </a>' +
            '</div>';

        var position = markerPosition
        var customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });


        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커 위에 인포윈도우를 표시합니다
            window.open('http://kko.to/pNYElrMIGU');
        });










     
      
        const btnPrev = document.querySelector('.carousel-control-prev');
        const btnNext = document.querySelector('.carousel-control-next');
        let slides = document.querySelectorAll('.carousel-item');
        let slideCount = slides.length;
        
        slides.direction = "left";
        
        let currentIdx = 0;

       
        
        function c1(){
            goToSlide(currentIdx -1 );
        }

         function c2(){
            goToSlide(currentIdx + 1);
        }

        function goToSlide(currentIdx) {
            updateNav(currentIdx);
        }

        goToSlide(0);

        function updateNav(currentIdx) {
            btnPrev.classList.add('disabled');
            // if(slides[0] || currentIdx == 0){
            //     btnPrev.classList.add('disabled');
            // }else{
            //     btnPrev.classList.remove('disabled');
            // }
            // if(currentIdx ==0 ){
            //     btnPrev.classList.add('disabled');
            //     console.log(currentIdx);
            // }else {
            //     btnPrev.classList.remove('disabled');
            // }

            // if(currentIdx == slideCount-1 ){
            //     btnNext.classList.add('disabled');
            // }else {
            //     btnNext.classList.remove('disabled');
            //     console.log(currentIdx);
            // }
        }
        


    

        

        /*슬라이드*/ 
//  $(function (e) {


//             var targetEle = $("#autoplay");
//             targetEle.find("img").css("cssText", "width:" + targetEle.width() + "px !important;");
//             targetEle.slick({
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 dots: false,
//                 infinite: true,
//                 variableWidth: true
//             });
//             targetEle.css({ "display": "block" });
//             var tmpHeight = 0;
//             targetEle.find("img").first().load(function (e) {
//                 targetEle.find("img").each(function (k, v) {
//                     var _this = $(this);
//                     if (tmpHeight == 0 || tmpHeight > _this.height()) {
//                         tmpHeight = _this.height();
//                     }
//                 });
//                 $(".slide_wrap").height(tmpHeight);
//             });
//         });




// $(document).ready(function () {
//     /* 1 */
//     $(window).scroll(function () {
//         /* 2 */
//         $('.imgtext').each(function (i) {
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* 3 */
//             if (bottom_of_window > bottom_of_object / 2) {
//                 $(this).animate({ 'opacity': '1' }, 500);
//             }
//         });
//     })
// });

let sound = document.querySelector('audio');
sound.currentTime=6;



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
    //노래 시작 시간
    let sound = document.querySelector('audio');
    sound.currentTime=5;

    //youtube API 불러오는 부분
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //플레이어 변수 설정
    var player;
    var myaudio = document.getElementById('myaudio');
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            videoId: 'Jy_5b8v7MA8',
            events: {
                'onReady': onPlayerReady,//로딩중에 이벤트 실행한다
                'onStateChange': onPlayerStateChange//플레이어 상태 변화 시 이벤트를 실행한다.

            }
        });
    }

    function onPlayerReady(event) {
        //event.target.playVideo();//자동재생
    }

    var done = false;
    function onPlayerStateChange(event) {
       // const myaudio = document.getElementById('myaudio');
        myaudio.pause();
        console.log('잠시멈춤 성공');
        if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
        } else if( event.data ===0 ){
            myaudio.play();
        }
    }

   

    function instaOn(event) {
        myaudio.pause();
        console.log('instaON');
         
    }

    


    


    

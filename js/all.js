    // let sound = document.querySelector('audio');
    // sound.currentTime= 18;


        const btnPrev = document.querySelector('.carousel-control-prev');
        const btnNext = document.querySelector('.carousel-control-next');

    /* Google map*/
        // var container = document.getElementById('map');
        // var options = {
        //     center: new kakao.maps.LatLng(37.160456, 127.610730),
        //     level: 2
        // };
        // var map = new kakao.maps.Map(container, options);
        // // 마커가 표시될 위치입니다 
        // var markerPosition = new kakao.maps.LatLng(37.160456, 127.610730)

        // // 마커를 생성합니다
        // var marker = new kakao.maps.Marker({
        //     position: markerPosition,
        // });

        // marker.setDraggable(true);


        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);


        // var content = '<div class="customoverlay">' +
        //     '  <a href="https://kko.to/YejsjdNxgw" target="_blank">' +
        //     '    <span class="title">포도원 마을 미션하우스</span>' +
        //     '  </a>' +
        //     '</div>';

        // var position = markerPosition
        // var customOverlay = new kakao.maps.CustomOverlay({
        //     map: map,
        //     position: position,
        //     content: content,
        //     yAnchor: 1
        // });


        // kakao.maps.event.addListener(marker, 'click', function () {
        //     // 마커 위에 인포윈도우를 표시합니다
    
        //     window.open('https://kko.to/YejsjdNxgw');
        // });
 


        // let slides = document.querySelectorAll('.carousel-item');
        // let currentIdx = 0;
   


    //youtube API 불러오는 부분
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var idAry = [] , objAry=[]; urlAry = [];

    $(".youtube").each(function (i) {
        $(this).attr("id", "player" + i); // 아이디 값 추가
        idAry.push("player" + i); // 아이디 값 배열에 넣기
        urlAry.push($(this).data("url")); // 동영상 url 배열에 넣기
    });

    function onYouTubeIframeAPIReady() { // 이 함수가 동영상 iframe을 만들어주는 함수이다.
            for (var i = 0; i < $(".youtube").length; i++) { // 동영상을 원하는만큼 만들어주기 위해.
                var player;
                var playerId = idAry[i];
                player = new YT.Player(playerId, {
                    videoId: urlAry[i],
                    playerVars: {
                        rel: 0
                    },
                    events: {
                    'onReady': onPlayerReady,//로딩중에 이벤트 실행한다
                    'onStateChange': onPlayerStateChange,//플레이어 상태 변화 시 이벤트를 실행한다.
                   

                }
                });
                objAry.push(player);
           
                // 가장 중요한 대목! 변수 player에 각 동영상 마다 만들어진 객체를 objAry 배열에 넣어준다.
                // 그래야 후에 원하는 동영상 제어를 할 수 있다.
            }
        }

    

    function onPlayerReady(event) {
        //event.target.playVideo();//자동재생
    }

    

    var done = false;
    function onPlayerStateChange(event) {
       // const myaudio = document.getElementById('myaudio');
        myaudio.pause();
        console.log('오디오 잠시멈춤 성공');
        
       
        if (event.data == YT.PlayerState.PLAYING && !done) {
            
            done = true;
        } 
        else if( event.data ===0 ){
        myaudio.play();
        }
     
    }

   
    //인스타로 들어갔을때 배경음악 잠시 멈춤.
    function instaOn(event) {
        myaudio.pause();
        console.log('instaON');
         
    }

    // <div>태그 반복문
        // var dd = document.createElement("div");
        // for (var i = 1; i <=28; i++) {
        //     var img_src = 'asset/image/all/감사-' + i + '.webp';
        //       $("#tt").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        // }

        //       var dd = document.createElement("div");
        // for (var i = 1; i <=16; i++) {
        //     var img_src = 'asset/image/all/again/again-' + i + '.webp';
        //       $("#again").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        // }

             for (var i = 2; i <=3; i++) {
            var img_src = 'asset/image/camp/adnog1/' + i + '.webp';
              $("#adnog1Camp").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

                    
        for (var i = 2; i <=14; i++) {
            var img_src = 'asset/image/all/tsj/' + i + '.webp';
              $("#MM").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }
        
        
        for (var i = 1; i <=41; i++) {
            var img_src = 'asset/image/묵상집/' + i + '.webp';
              $("#MSJ").append('<div class="swiper-slide" > <img   src=' + img_src + '></div>');
        }

        function getISOWeekNumber(date) {
            // Copy the date so we don't modify the original
            date = new Date(date);

            // Set to the first day of the year
            date.setHours(0, 0, 0, 0);
            date.setDate(1);

            // ISO weeks start on Monday, so find the first Monday of the year
            while (date.getDay() !== 1) {
                date.setDate(date.getDate() + 1);
            }

            // Calculate the week number
            var weekNumber = Math.ceil((((date - new Date(date.getFullYear(), 0, 1)) / 86400000) + 1) / 7);

            return weekNumber;
            }

        function test() {
            const day = new Date().getDate();
            // const week = 2;
            // getISOWeekNumber(day);
            // console.log(day-14);
            
           
            swiper.slideTo(day+15, 1000, false)
            
           
        }

             function frame1(youtube_video_id,i){
            iframe_id = 'youtube_iframe_' + i;
            youtube_link= 'https://www.youtube.com/embed/' + youtube_video_id + '?autoplay=0';
            itemContent = '<iframe id="' + iframe_id + '" class="d-block w-100" src="' + youtube_link + '" frameborder="0" allowfullscreen style="width:100%; height:315px;" ></iframe>';  
        }


     






  


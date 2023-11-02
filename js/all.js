    let sound = document.querySelector('audio');
    sound.currentTime= 18;
/* Google map*/
        // var container = document.getElementById('map');
        // var options = {
        //     center: new kakao.maps.LatLng(37.367729, 126.965929),
        //     level: 2
        // };
        // var map = new kakao.maps.Map(container, options);
        // // 마커가 표시될 위치입니다 
        // var markerPosition = new kakao.maps.LatLng(37.367729, 126.965929);

        // // 마커를 생성합니다
        // var marker = new kakao.maps.Marker({
        //     position: markerPosition,
        // });

        // marker.setDraggable(true);


        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);


        // var content = '<div class="customoverlay">' +
        //     '  <a href="http://kko.to/pNYElrMIGU" target="_blank">' +
        //     '    <span class="title">포도원 교회</span>' +
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
        //     window.open('http://kko.to/pNYElrMIGU');
        // });


        const btnPrev = document.querySelector('.carousel-control-prev');
        const btnNext = document.querySelector('.carousel-control-next');

       
        // let slides = document.querySelectorAll('.carousel-item');
        // let currentIdx = 0;


        // function goToSlide() {
        //     updateNav();
        // }

        // goToSlide(0);

        // function updateNav() {
        //     btnPrev.classList.add('disabled');
          
        // }
   


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
        var dd = document.createElement("div");
        for (var i = 0; i <=18; i++) {
            var img_src = 'asset/image/all/매일드리는감사-' + i + '.webp';
              $("#thanks").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }


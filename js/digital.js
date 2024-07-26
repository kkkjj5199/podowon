    // let sound = document.querySelector('audio');
    // sound.currentTime= 1;



/* Google map 지도 */ 
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
        console.log(urlAry);
    });
   
    function onYouTubeIframeAPIReady() { // 이 함수가 동영상 iframe을 만들어주는 함수이다.
            for (var i = 0; i < $(".youtube").length; i++) { // 동영상을 원하는만큼 만들어주기 위해.

                var playerId = idAry[i];
                player = new YT.Player(playerId, {
                    videoId: urlAry[i],
                    playerVars: {
                        rel: 0
                    },
                    events: {
                    'onReady': onPlayerReady,//로딩중에 이벤트 실행한다
                    'onStateChange': onPlayerStateChange,

                    //플레이어 상태 변화 시 이벤트를 실행한다.
                }
                });


                objAry.push(player);

                // 가장 중요한 대목! 변수 player에 각 동영상 마다 만들어진 객체를 objAry 배열에 넣어준다.
                // 그래야 후에 원하는 동영상 제어를 할 수 있다.
            }

        }


     var player;

     function onPlayerReady() {
        console.log('dddddddsssss');
        player = new YT.Player('youtube_iframe_9',{
            events:{
                'onStageChange': onPlayerStateChange
                
            }
        });

     }
      const myaudio = document.getElementById('myaudio');
      function onPlayerStateChange(event) {
        
    
        myaudio.pause();
        console.log('오디오 잠시멈춤 성공');

        if (event.data == YT.PlayerState.PLAYING && !done) {

            done = true;
        }
        else if( event.data ===0 ){
        myaudio.play();
        }
    }

   
    // 유튜브 자동 멈춤 기능
    function stopYoutube() {
        var iframe = document.querySelectorAll('[id^="youtube_iframe_"]');
        var src = iframe.src;
       
        src = src.replace("autoplay=1","autoplay=0");
        iframe.src= src;
    }


    //인스타로 들어갔을때 배경음악 잠시 멈춤.
    function instaOn(_event) {
        myaudio.pause();
        console.log('instaON');
         
    }

    // <div>태그 반복문

        //말씀
        for (var i = 1; i <=4; i++) {
            var img_src = 'asset/image/common/pre_' + i + '.webp';
              $("#pres").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

            /**
         * 특정 이미지에 Youtube 링크 넣는 방법 ! 
         * 사용하고 있는 frame2 에 주석으로 막기. 주석은    ( // ) <- 표시 입니다.
         * youtubeFrame(총이미지 수 , 링크넣을 이미지 번호, '유튜브 링크' , 'adong1' , '#1part');
         * 
         * 예시: youtubeFrame(28,3,'https://youtu.be/-ndskXoVepE?si=MW6-Ou4B2OUMkbQL','adong1','#1part');
         */ 

        // 아동1
        frame2(28,'adong1','#1part');
    

        // 아동2
        //frame2(16,'adong2','#2part');
                 for (var i = 2; i <= 24; i++) {
                     var img_src = 'asset/image/digital/adong2/' + i + '.webp';
                     var itemContent;
                     var carouselInner = $("#2part"); 

                     if(i ==2){

                     var itemContent = '<a href="https://youtu.be/-ndskXoVepE?si=MW6-Ou4B2OUMkbQL">' +
                         '<img class="d-block w-100" src="' + img_src + '">' + '</a>'
                        }

                     else{
                        itemContent = '<img class="d-block w-100" src="' + img_src + '">';
                    }

    
                     var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
                     carouselInner.append(carouselItem); }



        // 아동3
        frame2(15,'adong3','#3part');
        // frame4(5,'adong3','#3part');

        frame3(214,'adong3','#3part');

        //중등부
         frame2(18,'middlepart','#mpart');

      //  고등부
        frame2(11,'highpart','#hpart');

        //  청년회
        frame2(14,'caryouth','#youthpart');

        // 여선교회
        frame2(8,'woman','#womanpart');

        // 남선교회
        frame2(6,'man','#manpart');

        //포도원마을소식
        frame2(4,'notice','#notice');

        //포도원스토리
        frame2(28,'pdwstory','#pwdstory');


        // youtube in 슬라이드
        function gotoYoutube(youtube_video_id,i){
            iframe_id = 'youtube_iframe_' + i;
            youtube_link= 'https://www.youtube.com/embed/' + youtube_video_id + '?autoplay=0';
            itemContent = '<iframe id="' + iframe_id + '" class="d-block w-100" src="' + youtube_link + '" frameborder="0" allowfullscreen style="width:100%; height:315px;" ></iframe>';  
        }

        // 이미지 슬라이드 생성 프레임
        function frame2(length,partName,idName){
            for(var i =2; i<= length; i++){
              var img_src = 'asset/image/digital/' + partName+ '/' + i + '.webp';
               $(idName).append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
            }
            
        }

        // 특정 이미지에 유튜브 링크 삽입 한 후 슬라이드 생성 프레임
        function youtubeFrame(length,youtubeImageNumber,link, partName,idName){
             for (var i = 2; i <= length; i++) {
                     var img_src = 'asset/image/digital/'+partName+ '/'  + i + '.webp';
                     var itemContent;
                     var carouselInner = $(idName); // id명 위에 선언한거랑 똑같은지 확인하기

                     if(i ==youtubeImageNumber){
                     
                     var itemContent = '<a href="'+ link +'">' +
                         '<img class="d-block w-100" src="' + img_src + '">' + '</a>'
                        }

                     else{
                        itemContent = '<img class="d-block w-100" src="' + img_src + '">';
                    }
                     var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
                     carouselInner.append(carouselItem);
                     }
                 }   


        // Call the function to populate the carousel
        populateCarousel();
        
        // 헌금 계좌번호 복사하는 함수
        function copyText(IdValue) {
            // "-"를 제외한 텍스트를 가져오기
            var currentContent = IdValue;
            var updateContent = currentContent.replace(/-/g,"");

            // 텍스트를 클립보드에 복사
            var textArea = document.createElement("textarea");
            textArea.value = updateContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            // 복사 완료 메시지 (원하는 경우 알림창이나 다른 피드백을 사용할 수 있습니다.)
            alert("복사 완료");
        }

        /** ------------------------------------ 아동3교구 함수 --------------------------------- */

                 // 아동3 슬라이드-preVer.
        function frame3(length,partName,idName){
            for(var i =201; i<= length; i++){
              var img_src = 'asset/image/digital/' + partName+ '/' + i + '.webp';
               $(idName).append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
            }
            
        }

        // 아동3 유튜브
        function frame4(length, partName, idName) {
            for (var i = 2; i <= length; i++) {
                var carouselInner = $("#3part");
                var img_src = 'asset/image/digital/' + partName + '/' + i + '.webp';
                var itemContent;
                
                if (i === 4) {
                    var itemContent = '<a href="https://youtu.be/C0sGEoGgwXQ?si=ynzYzJvHuzTUZBOv">' +
                   '<img class="d-block w-100" src="' + img_src + '">' +
                   '</a>'
                // } else if (i === 4) {
                //     var itemContent = '<a href="https://www.youtube.com/watch?v=uI4NGwVusyg">' +
                //    '<img class="d-block w-100" src="' + img_src + '">' +
                //    '</a>'
                } else {
                    itemContent = '<img class="d-block w-100" src="' + img_src + '">';
                }

                var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
                carouselInner.append(carouselItem);
            }
        }

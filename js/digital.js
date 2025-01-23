    // let sound = document.querySelector('audio');
    // sound.currentTime= 1;

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



        //말씀
        for (var i = 1; i <=4; i++) {
            var img_src = 'asset/image/common/pre_' + i + '.webp';
              $("#pres").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

            /**
         * 특정 이미지에 Youtube 링크 넣는 방법 ! 쉬워요 ^^ 필요하신분 참고하세요~! 꼭...
         * 사용하고 있는 frame2 에 주석으로 막기. 주석은    ( // ) <- 표시 입니다.
         * youtubeFrame(총이미지 수 , 링크넣을 이미지 번호, '유튜브 링크' , 'adong1' , '#1part');
         * 
         * 예시: youtubeFrame(28,3,'https://youtu.be/-ndskXoVepE?si=MW6-Ou4B2OUMkbQL','adong1','#1part');
         */ 

        // 아동1교구
        frame2(14,'adong1','#1part');

        // 아동2교구
        frame2(21,'adong2','#2part');
        //youtubeFrame(29,7,'https://youtu.be/-ndskXoVepE?si=MW6-Ou4B2OUMkbQL','adong2','#2part');

        // 아동3교구
        frame2(13,'adong3','#3part');
        // frame4(13,'adong3','#3part');

        frame3(209,'adong3','#3part');

        //중등부 교구
        frame2(39,'middlepart','#mpart');
        // youtubeFrame(15,9,'https://youtu.be/gtbN63lQioA?si=mm0IvcowjzQXDb2Y','middlepart','#mpart');
        
        //고등부 교구
        frame2(27,'highpart','#hpart');
         

        //청년회 교구
        frame2(16,'caryouth','#youthpart');

        //여선교회
        frame2(7,'woman','#womanpart');

        //남선교회
        frame2(1,'man','#manpart');

      
        // gotoYoutube("CGBSXJGD5P8vQyr0")
        //포도원마을소식
        frame2(7,'notice','#notice');
        

      

        //  영상이 1개이상일때 리스트에 담아서 보내기.
        // let numberList = [];
        // let linkList =[]
        // youtubeFrameList(23,numberList,linkList,'pdwstory','#pdwstory'); 

     //포도원스토리
        frame2(30,'pdwstory','#pdwstory');
  



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
                         '<img class="d-block w-100" src="' + img_src + '" style="animation: blink 3s infinite;">' + '</a>'
                        }

                     else{
                        itemContent = '<img class="d-block w-100" src="' + img_src + '">';
                    }
                     var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
                     carouselInner.append(carouselItem);
                     }
                 }   




        //영상 1개이상 대입해야 할때 영상링크 List안에 담아서 받아오는 부분
        function youtubeFrameList(length,numberList,linkList, partName,idName){
            
             for (var i = 2; i <= length; i++) {
                     var img_src = 'asset/image/digital/'+partName+ '/'  + i + '.webp';
                     var itemContent;
                     var carouselInner = $(idName); // id명 위에 선언한거랑 똑같은지 확인하기

                     var index = numberList.indexOf(i);
                     if (index !== -1) {
                            var link = linkList[index];
                            itemContent = '<a href="' + link + '">' +
                                '<img class="d-block w-100" src="' + img_src + '" style="animation: blink 3s infinite;">' + '</a>';
                        } else {
                            // 그 외의 경우 기본 이미지로 표시
                            itemContent = '<img class="d-block w-100" src="' + img_src + '">';
                        }


                     var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
                     carouselInner.append(carouselItem);
                     }
                 }   
         


        // Call the function to populate the carousel
        // populateCarousel();
        
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
            for(var i =200; i<= length; i++){
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
                
                if (i === 3) {
                    var itemContent = '<a href="https://youtu.be/gzqfucbPJGg?si=BAci2l3s9O50PGJ4">' +
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

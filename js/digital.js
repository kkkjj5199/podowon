    let sound = document.querySelector('audio');
    sound.currentTime= 1;
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
    var player;
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

    function onPlayerReady(event) {
     
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
    function instaOn(_event) {
        myaudio.pause();
        console.log('instaON');
         
    }

    // <div>태그 반복문



       
        for (var i = 1; i <=5; i++) {
            var img_src = 'asset/image/common/pre_' + i + '.webp';
              $("#pres").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }


        // 아동1
         for (var i = 2; i <=17; i++) {
            var img_src = 'asset/image/digital/adong1/' + i + '.webp';
              $("#1part").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

        
        // 아동2
         for (var i = 2; i <=12; i++) {
            var img_src = 'asset/image/digital/adong2/' + i + '.webp';
              $("#2part").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }


        // 아동3
       for (var i = 2; i <=18; i++) {
            var img_src = 'asset/image/digital/adong3/' + i + '.webp';
              $("#3part").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

    //  중등부
    //    for (var i = 2; i <=14; i++) {
    //     var id='IS03wIpD4U4';
    //     if(i!=8){
    //         var img_src = 'asset/image/digital/middlepart/' + i + '.webp';
    //        $("#mpart").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + 
    //        img_src + '></div>');
    //     }
    //        else{
          
    //          $("#mpart").append('<div class="carousel-item"><div class="youtube" data-url="'+id+'"></div></div>');
           
          
    //        }
       
           
       
    //     }

       // Assuming hpart is the ID of your carousel-inner container




        for (var i = 2; i <= 13; i++) {
             var carouselInner = $("#mpart");  
            var itemContent;

            // if (i === 8) {
            //     // Insert YouTube link
            //     var youtube_video_id = 'IS03wIpD4U4'; // Replace with the actual video ID
            //     var iframe_id = 'youtube_iframe_' + i;
            //     var youtube_link = 'https://www.youtube.com/embed/' + youtube_video_id + '?autoplay=0';
            //     itemContent = '<iframe id="' + iframe_id + '" class="d-block w-100" src="' + youtube_link + '" frameborder="0" allowfullscreen style="width:100%; height:315px;"></iframe>';
            // } else {
                // Insert image
                var img_src = 'asset/image/digital/middlepart/' + i + '.webp';
                itemContent = '<img class="d-block w-100" src="' + img_src + '">';
            // }

            var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
            carouselInner.append(carouselItem);
        }



       
     //  고등부
       for (var i = 2; i <=15; i++) {
        var h = $("#hpart"); 
           var itemContent;

            // if (i === 6) {
            //     // Insert YouTube link
            //     var youtube_video_id = 'orAr3mLJ0AE'; // Replace with the actual video ID
            //     var iframe_id = 'youtube_iframe_' + i;
            //     var youtube_link = 'https://www.youtube.com/embed/' + youtube_video_id + '?autoplay=0';
            //     itemContent = '<iframe id="' + iframe_id + '" class="d-block w-100" src="' + youtube_link + '" frameborder="0" allowfullscreen style="width:100%; height:315px;"></iframe>';
            // } else {
                // Insert image
                var img_src = 'asset/image/digital/highpart/' + i + '.webp';
                itemContent = '<img class="d-block w-100" src="' + img_src + '">';
            // }

            var carouselItem = '<div class="carousel-item">' + itemContent + '</div>';
            h.append(carouselItem);










            // var img_src = 'asset/image/digital/highpart/' + i + '.webp';
            //   $("#hpart").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

    
        //  청년회
       for (var i = 2; i <=18; i++) {
            var img_src = 'asset/image/digital/caryouth/' + i + '.webp';
              $("#youthpart").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

        // 여선교회
             for (var i = 2; i <=8; i++) {
            var img_src = 'asset/image/digital/woman/' + i + '.webp';
              $("#womanpart").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }

        // 남선교회
             for (var i = 2; i <=5; i++) {
            var img_src = 'asset/image/digital/man/' + i + '.webp';
              $("#manpart").append('<div class="carousel-item" > <img id="i3" class="d-block w-100"  src=' + img_src + '></div>');
        }


                
  

    
 // Sample list of image URLs
        const advertises = [
        'asset/image/common/ad__p.webp',
      
         'asset/image/digital/사순절.webp',
        'asset/image/digital/졸업예배.webp',
        'asset/image/digital/서울소년원.webp',
        'asset/image/digital/새달새.webp',
        'asset/image/digital/새학기부흥성회.webp',
        'asset/image/digital/여선교회축복성회.webp',
   
     
       

        ];

        const story = [
        'asset/image/common/포도원스토리.webp',
        'asset/image/digital/옥타묘띳-1.webp',
        'asset/image/digital/옥타묘띳-2.webp',
        'asset/image/digital/옥타묘띳-3.webp',
        'asset/image/digital/옥타묘띳-4.webp',
        'asset/image/digital/옥타묘띳-5.webp',
        'asset/image/digital/옥타묘띳-6.webp',
        'asset/image/digital/미미.webp',
        'asset/image/digital/미1.webp',
        'asset/image/digital/미2.webp',
        'asset/image/digital/미3.webp',
        'asset/image/digital/미4.webp',
        'asset/image/digital/미5.webp',
        'asset/image/digital/미6.webp',
        'asset/image/digital/미7.webp',
        'asset/image/digital/미8.webp',
        'asset/image/digital/미9.webp'
        
  

   



          
        ];

        const smj = [
        'asset/image/all/smj/4.webp',
        'asset/image/all/smj/5.webp',
        'asset/image/all/smj/6.webp',
        'asset/image/all/smj/7.webp',

        ];

          $('[id^="imageCarouselModal"]').on('hidden.bs.modal', function () {
        // Remove 'modal-open' class from the body to prevent scrolling to the top
        $('body').removeClass('modal-open');
        });     

        // Function to dynamically populate the carousel
        function populateCarousel() {
            const carouselInner = document.querySelector('#dynamicCarousel .carousel-inner');
            const carouselInner2 = document.querySelector('#dynamicCarousel2 .carousel-inner');
         
            advertises.forEach((imageUrl, index) => {
                const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';

                const carouselItem = document.createElement('div');
                carouselItem.className = itemClass;

                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.className = 'd-block w-100';

                carouselItem.appendChild(imgElement);
                carouselInner.appendChild(carouselItem);
               
            });

                story.forEach((imageUrl, index) => {
                const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';

                const carouselItem = document.createElement('div');
                carouselItem.className = itemClass;

                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.className = 'd-block w-100';

                carouselItem.appendChild(imgElement);
                carouselInner2.appendChild(carouselItem);
               
            });



   
        }

        // Call the function to populate the carousel
        populateCarousel();

        function copyText() {
            // "-"를 제외한 텍스트를 가져오기
          
            // var accountNumberText = document.getElementById(accountId).innerText.replace(/-/g, "");

            var textToCopy = document.getElementById("accountId");
            var currentContent = textToCopy.innerText;
            var updateContent = currentContent.replace(/-/g,"");
            textToCopy.innerText = updateContent;

            // 텍스트를 클립보드에 복사
            var textArea = document.createElement("textarea");
            textArea.value = textToCopy.innerText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            // 복사 완료 메시지 (원하는 경우 알림창이나 다른 피드백을 사용할 수 있습니다.)
            alert("복사 완료");
        }

        function copyText2() {
            // "-"를 제외한 텍스트를 가져오기
          
            // var accountNumberText = document.getElementById(accountId).innerText.replace(/-/g, "");

            var textToCopy = document.getElementById("accountId2");
            var currentContent = textToCopy.innerText;
            var updateContent = currentContent.replace(/-/g,"");
            textToCopy.innerText = updateContent;

            // 텍스트를 클립보드에 복사
            var textArea = document.createElement("textarea");
            textArea.value = textToCopy.innerText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            // 복사 완료 메시지 (원하는 경우 알림창이나 다른 피드백을 사용할 수 있습니다.)
            alert("복사 완료");
        }

        function stopYoutube(number) {
            var name = 'youtube_iframe_' + number;
            var iframe = document.getElementById(name);
            var src = iframe.src;
            src = src.replace("autoplay=1","autoplay=0");
            iframe.src= src;
        }


    let sound = document.querySelector('audio');
    sound.currentTime= 5;

     
      

    //노래 시작 시간


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
            videoId: 'zlLQMyuz9YE',
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

    


    


    

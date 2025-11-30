

    var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.39284, 126.95304),
            level: 2
        };
        var map = new kakao.maps.Map(container, options);
        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(37.39284, 126.95304); //더 트리니티
        // var markerPosition = new kakao.maps.LatLng(37.367729, 126.965929); 포도원교회
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setDraggable(true);


        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);



        var content = '<div class="customoverlay">' +
            '  <a href="https://place.map.kakao.com/13143585" target="_blank">' +
            '    <span class="title">안양 더 트리니티</span>' +
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
            window.open('https://place.map.kakao.com/13143585');
        });
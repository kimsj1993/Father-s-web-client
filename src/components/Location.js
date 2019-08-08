import * as React from 'react';
import '../scss/main.scss'






class Location extends React.Component {
    componentDidMount() {                                                    
        var mapContainer = document.getElementById(this.props.name),
             mapOption = {
                 center: new window.kakao.maps.LatLng(this.props.latitude, this.props.longitude),
                 level: 3
             }
        
        var map = new window.kakao.maps.Map(mapContainer, mapOption);
        var markerPosition  = new window.kakao.maps.LatLng(this.props.latitude, this.props.longitude); 
        
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });



        marker.setMap(map);

        var iwContent = '<div style="padding:5px;">'+ this.props.name + '  <br><a href="https://map.kakao.com/link/map/' + this.props.name + ', ' + this.props.latitude + ', ' + this.props.longitude + ' " style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/' + this.props.name + ', ' + this.props.latitude + ',' + this.props.longitude + ' " style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new window.kakao.maps.LatLng(this.props.latitude, this.props.longitude); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });

        infowindow.open(map, marker); 
    }
                                                 
      render() {
        return (
          <div id={this.props.name} className="map"></div>
        );
      }
}

export default Location;
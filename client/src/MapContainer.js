import React, { useEffect, useState } from "react";
import "./MapContainer.css";
const { kakao } = window;

function LinkButton(props) {
	return (
		<a id="link-button" href={props.url}>
			naver map link
		</a>
	);
}

function MapContainer(props) {
	useEffect(() => {
		const container = document.getElementById("myMap"); //지도를 담을 영역의 DOM 레퍼런스
		const options = {
			//지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(37.586296, 127.029137), //지도의 중심좌표는 안암역으로 설정.
			level: 3, //지도의 레벨(확대, 축소 정도)
		};
		var searchPlace = props.loc;
		const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

		const as = new kakao.maps.services.Geocoder();
		as.addressSearch(searchPlace, placesSearchCB);

		let bounds = new kakao.maps.LatLngBounds();

		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {
				//for (let i = 0; i < data.length; i++) {
				displayMarker(data[0]);
				console.log(data);
				bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
				//}
				bounds.extend(new kakao.maps.LatLng(37.586296, 127.029137));
				map.setBounds(bounds);
			}
		}
		function displayMarker(place) {
			let destination = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.y, place.x),
				clickable: true,
			});
			//목적지 마커(음식점)
		}
	}, [props.loc]);
	const url = `https://map.naver.com/v5/search/${props.loc_name}/`;
	return (
		<div className="container">
			<div className="container-explain">
				<div className="container-title">[ {props.loc_name} ]</div>
				<div className="container-text">{props.explain}</div>
				<div className="container-text">{props.loc}</div>
				<LinkButton url={url} />
			</div>
			<div className="container-map" id="myMap" />
		</div>
	);
}
export default MapContainer;

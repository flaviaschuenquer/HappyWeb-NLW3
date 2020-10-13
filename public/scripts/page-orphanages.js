/*usamos o const, pois o mapa não terá alteração no meu código. Se eu criasse um código que o mapa tivesse alterações, eu usaria o var ou let*/

const map = L.map('mapid').setView([-22.4414305,-43.1373639], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
})

const popup = L.popup({
  closeButton: false.
  className="map-popup",
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

L
.marker([-22.4414305,-43.1373639], { icon })
.addTo(map)
.bindPopup(popup)

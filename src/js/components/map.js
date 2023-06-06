const maps = document.querySelectorAll('.map');

if (maps.length > 0) {
  maps.forEach((map) => {
    let center = JSON.parse(map.dataset.coords);

    ymaps.ready(function () {
      map = new ymaps.Map(map.id, {
        center: center,
        zoom: 10,
        controls: [],
      });

      var placemark = new ymaps.Placemark(
        center,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: '../img/marker-icon.svg',
          iconImageSize: [70, 86],
          iconImageOffset: [-15, -5],
        }
      );

      map.geoObjects.add(placemark);
    });
  });
}

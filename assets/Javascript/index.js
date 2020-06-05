document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
});

new Vue({
el: '#destinasiCard',
data: {
    destination: [
        {thumbnail: "assets/image/bppgallery1.jpg", title: "Pantai Lamaru", isiDestinasi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
        {thumbnail: "assets/image/bppgallery3.jpg", title: "Bumi Hijau", isiDestinasi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
        {thumbnail: "assets/image/bppgallery4.jpeg", title: "Hotel Berwarna", isiDestinasi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
        {thumbnail: "assets/image/bppgallery5.jpg", title: "E-Walk", isiDestinasi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
        {thumbnail: "assets/image/berita4.jpg", title: "Pantai Manggar", isiDestinasi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
    ]
}
});

new Vue({
  el: '#hotelCard',
  data: {
      hotels: [
          {thumbnail: "assets/image/hotelPlatinum.jpg", title: "Hotel Platinum", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
          {thumbnail: "assets/image/hotelPlatinum.jpg", title: "Hotel Platinum", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
          {thumbnail: "assets/image/hotelPlatinum.jpg", title: "Hotel Platinum", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
          {thumbnail: "assets/image/hotelPlatinum.jpg", title: "Hotel Platinum", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."},
          {thumbnail: "assets/image/hotelPlatinum.jpg", title: "Hotel Platinum", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."}
      ]
  }
  });

new Vue({
    el: '#beritaContent',
    data: {
      news: [
        {thumbnail: "assets/image/berita1.jpg", title: "Ekowisata Kampung Mangrove Kariangau", isiBerita:"Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar", tanggal:"2019-07-12"},
        {thumbnail: "assets/image/berita2.jpg", title: "Ekowisata Kampung Mangrove Kariangau", isiBerita:"Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar", tanggal:"2019-07-12"},
        {thumbnail: "assets/image/berita3.jpg", title: "Ekowisata Kampung Mangrove Kariangau", isiBerita:"Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar", tanggal:"2019-07-12"},
        {thumbnail: "assets/image/berita4.jpg", title: "Ekowisata Kampung Mangrove Kariangau", isiBerita:"Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar", tanggal:"2019-07-12"},          
      ]
    }
  });

new Vue({
  el: '#ourteam',
  data: {
    teams : [
      {thumbnail: "https://bulma.io/images/placeholders/128x128.png",nama:"Bintang Edma Rizqi", quote:"'KALO AKU NASI BUNGKUS KAMU KARETNYA TANPA KAMU AKU AMBYAR'"},
      {thumbnail: "https://bulma.io/images/placeholders/128x128.png",nama:"Fathima Azzahra", quote:"'KALO AKU NASI BUNGKUS KAMU KARETNYA TANPA KAMU AKU AMBYAR'"},
      {thumbnail: "https://bulma.io/images/placeholders/128x128.png",nama:"Mohammad Fahmi", quote:"'KALO AKU NASI BUNGKUS KAMU KARETNYA TANPA KAMU AKU AMBYAR'"},
      {thumbnail: "https://bulma.io/images/placeholders/128x128.png",nama:"Muhammad Noor Iham", quote:"'KALO AKU NASI BUNGKUS KAMU KARETNYA TANPA KAMU AKU AMBYAR'"}
    ]
  }
});
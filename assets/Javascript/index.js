document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

new Vue({
  el: "#destinasiCard",
  data: {
    destination: [
      {
        thumbnail: "assets/image/bppgallery1.jpg",
        title: "Pantai Lamaru",
        isiDestinasi:
          "Yuk, cek review dari pengunjung-pengunjung yang datang di tempat ini!",
      },
      {
        thumbnail: "assets/image/bppgallery3.jpg",
        title: "Bumi Hijau",
        isiDestinasi:
          "Yuk, cek review dari pengunjung-pengunjung yang datang di tempat ini!",
      },
      {
        thumbnail: "assets/image/bppgallery4.jpeg",
        title: "Hotel Berwarna",
        isiDestinasi:
          "Yuk, cek review dari pengunjung-pengunjung yang datang di tempat ini!",
      },
      {
        thumbnail: "assets/image/bppgallery5.jpg",
        title: "E-Walk",
        isiDestinasi:
          "Yuk, cek review dari pengunjung-pengunjung yang datang di tempat ini!",
      },
      {
        thumbnail: "assets/image/berita4.jpg",
        title: "Pantai Manggar",
        isiDestinasi:
          "Yuk, cek review dari pengunjung-pengunjung yang datang di tempat ini!",
      },
    ],
  },
});

new Vue({
  el: "#hotelCard",
  data: {
    hotels: [
      {
        thumbnail: "assets/image/hotelPlatinum.jpg",
        title: "Hotel Platinum",
        desc:
          "Hotel-hotel pilihan berbintang yang bisa jadi tempat singgah ternyaman. Yuk, cek disini!",
      },
      {
        thumbnail: "assets/image/hotelGrandS.jpg",
        title: "Hotel Grand S.",
        desc:
          "Hotel-hotel pilihan berbintang yang bisa jadi tempat singgah ternyaman. Yuk, cek disini!",
      },
      {
        thumbnail: "assets/image/hotelZurich.jpg",
        title: "Hotel Zurich",
        desc:
          "Hotel-hotel pilihan berbintang yang bisa jadi tempat singgah ternyaman. Yuk, cek disini!",
      },
      {
        thumbnail: "assets/image/hotelLeG.jpg",
        title: "Hotel LeGrandeur",
        desc:
          "Hotel-hotel pilihan berbintang yang bisa jadi tempat singgah ternyaman. Yuk, cek disini!",
      },
      {
        thumbnail: "assets/image/hotelIbis.jpg",
        title: "Hotel Ibis",
        desc:
          "Hotel-hotel pilihan berbintang yang bisa jadi tempat singgah ternyaman. Yuk, cek disini!",
      },
    ],
  },
});

new Vue({
  el: "#beritaContent",
  data: {
    news: [
      {
        thumbnail: "assets/image/berita1.jpg",
        title: "Ekowisata Kampung Mangrove Kariangau",
        isiBerita:
          "Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar",
        tanggal: "2019-07-12",
      },
      {
        thumbnail: "assets/image/berita2.jpg",
        title: "Ekowisata Kampung Mangrove Kariangau",
        isiBerita:
          "Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar",
        tanggal: "2019-07-12",
      },
      {
        thumbnail: "assets/image/berita3.jpg",
        title: "Ekowisata Kampung Mangrove Kariangau",
        isiBerita:
          "Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar",
        tanggal: "2019-07-12",
      },
      {
        thumbnail: "assets/image/berita4.jpg",
        title: "Ekowisata Kampung Mangrove Kariangau",
        isiBerita:
          "Selain dikenal sebagai kota minyak, Balikpapan Kalimantan Timur yang terletak di pesisir pantai juga menyimpan potensi kekayaan alam dan hasil tangkapan laut yang cukup besar",
        tanggal: "2019-07-12",
      },
    ],
  },
});

new Vue({
  el: "#ourteam",
  data: {
    teams: [
      {
        thumbnail: "assets/image/bintang.jpeg",
        nama: "Bintang Edma Rizqi",
        quote:
          '"Kalo aku nasi bungkus, kamu karetnya. Tanpa kamu, aku ambyar :\')"',
      },
      {
        thumbnail: "assets/image/sarah.jpeg",
        nama: "Fathima Azzahra",
        quote:
          '"Kalo aku nasi bungkus, kamu karetnya. Tanpa kamu, aku ambyar :\')"',
      },
      {
        thumbnail: "assets/image/fahmi.jpeg",
        nama: "Mohammad Fahmi",
        quote:
          '"Kalo aku nasi bungkus, kamu karetnya. Tanpa kamu, aku ambyar :\')"',
      },
      {
        thumbnail: "assets/image/ilham.jpg",
        nama: "M. Noor Iham",
        quote:
          '"Kalo aku nasi bungkus, kamu karetnya. Tanpa kamu, aku ambyar :\')"',
      },
    ],
  },
});

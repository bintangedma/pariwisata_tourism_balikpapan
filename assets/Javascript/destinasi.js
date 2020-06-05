new Vue({
    el: '#newComment',
    data: {
      txtNama:'',
      txtReview:'',
      items: [
        {user: "Githa Zul Ariefa", tgl:"16-02-2020", review: 'Recommended', isi: "Pantainya asik, ada kantor sar nya fan sepertinya dikelola oleh bumi senyiur group hotel, karena di fasilitas umumnya ada lambangnya senyiur. Di tempat ini beda dengan pantai manggar yang banyak penjual makanan gelar tikar makan lesehan dibawah pohon pinus, disini hanya warung warung namun tempatnya luas dan asik untuk kemping dan prewed (dengan biaya tertentu), ada juga aula aula dan balai pertemuan yang disewakan. Ada juga persewaan golf cart,ban pelampung,tenda dll. Pantainya lumayan bersih dan rindang oleh pohon pohon cemaranya, fasilitas umum gratis sudah include fee masuk 25k perorang dan kebetulan saya naik mobil bayar masuknya 20k dan bebas parkir di dalam."},
        {user: "Rommy Christian", tgl:"26-01-2020", review: 'Recommended', isi: "Pemandangannya bagus, harga tiket masuk 25 rbu untuk mtor khusus hari sabtu dan minggu untuk hari biasa hanya 20 rbu. cocok sekali untuk rekreasi keluarga, menikmati liburan bersama kluarga, teman dan kerabat,, ada banana boats dan bermacam macam mainan pantai sperti layang-layang, juga ada penyewaan ban renang plus tikar untuk yang ingin bersantai menikmati makanan ringan atau sekedar bersantai makan-makan,, pantai ny bersih dan terawat, salut untuk pemda kota balikpapan yang telah memperhatikan aset daerahnya."},
        {user: "Henry Setiawan",tgl:"16-12-2020", review: 'Recommended', isi: "Recommended as a gathering venue. Tempatnya cocok untuk dijadikan rekreasi atau berkumpul bersama keluarga dan teman-teman. Banyak pohon-pohon di pinggir pantai yang bisa dijadikan sebagai tempat untuk menggelar tikar dan berteduh."},
        {user: "Nur Kholisah",tgl:"7-04-2020", review: 'Not Recommended', isi: "Untuk harga tiket masuk nya agak mahal ya kalo saya bandingkan dengan tiket masuk ke wisata pantai di pulau Jawa… Tapi gak papa sih kalo sebanding dengan sarana nya semoga makin baik lg ya"}
      ]
    },
    methods: {                    
      addRecommended : function(){
        var nama = this.txtNama.trim();
        var review = this.txtReview.trim();
        if (!nama && !review){return;}                
        this.items.push(
          {user: nama, tgl :this.getDateFunc(), review:'Recommended', isi: review}
        );
        this.txtReview = '';
        this.txtNama = '';
      },
      addNotRecommended : function(){
        var nama = this.txtNama.trim();
        var review = this.txtReview.trim();
        if (!nama && !review){return;}                
        this.items.push(
          {user: nama, tgl :this.getDateFunc(), review:'Not Recommended', isi: review}
        );
        this.txtReview = '';
        this.txtNama = '';
      },
      getDateFunc: function () {
        var myDate = new Date();
        var month = ('0' + (myDate.getMonth() + 1)).slice(-2);
        var date = ('0' + myDate.getDate()).slice(-2);
        var year = myDate.getFullYear();
        var formattedDate = date +"-"+ month +"-"+ year;
        return formattedDate;
      }
    }
  });
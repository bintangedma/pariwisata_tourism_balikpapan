new Vue({
    el: '#newComment',                
    data: {
      txtNama:'',
      txtComment: '',
      items: [
        {user: "Solihin", tgl: "16-01-2020", isi: "Bagi Link yang mempersatukan bangsa dong!"},
        {user: "Barbara Smith", tgl: "16-03-2020", isi: "Luhar Biasa wal"},
        {user: "Smith", tgl: "25-02-2020", isi: "Wew Gila Corona #stayAtHome "},
        {user: "Bambang Susanto", tgl: "25-05-2020", isi: "Saya suka spongebob karena warnanya kuning!."}
      ]
    },
    methods: {                    
        addComment : function(){
          var nama = this.txtNama.trim()
          var comment = this.txtComment.trim();
          if (!comment){return;}                
          this.items.push(
            {user: nama, tgl :this.getDateFunc(), isi: comment}
          );
          this.txtComment = '';
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
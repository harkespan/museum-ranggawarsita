angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  var friends = [];
  $http.get('http://museum-jateng.com/v2/api/koleksi')
  .success(function(data,status,headers,config){
    console.log('data success');
    console.log(data);
  })
  .error(function(data,status,headers,config){
    console.log('data error');

  })
  .then(function(result){
    friends = result.data;
  });

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Galeri',function(){
  var galeri = [
    {id:0, pic:'pic1'},
    {id:1, pic:'pic2'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'},
    {id:2, pic:'pic3'}
  ];

  return {
    all : function(){
      return galeri;
    },
    get : function(galeriId){
      return galeri[galeriId];
    }
  }
})

.factory('Agenda',function(){
  var agendas = [
    {id:0, judul:'Bimbingan Teknis Permuseuman', isi:'Demi mewujudkan visi Museum menjadi Museum Provinsi Jawa Tengah maka berbagai kegiatan yang menunjang tercapainya Visi tersebut harus dilakukan. Salah satu upaya yang dilakukan Museum Ranggawarsita adalah mengadakan pelatihan, bimbingan teknis dan berbagai kegiatan lainnya yang bertujuan meningkatkan sumber daya manusia yang bekerja di Museum. Seiring dengan visi diatas maka pada Museum Ranggawarsita akan mengadakan bimbingan teknis (Bintek) Permuseuman yang diadakan pada'},  
    {id:1, judul:'Pameran Tematik Bulan "EMANSIPASI" Koleksi Kartini', isi:'Pameran Tematik : Bulan "EMANSIPASI" Koleksi Kartini yang akan diselenggarakan pada bulan Maret - April 2014 Launching : Kamis, 20 Maret 2014Agenda :    Pameran Foto bersama : komunitas fotografer Semarang Semarang Fotografi Gelar Karya Mahasiswa AKS Ibu Kartini Semarang  Diskusi tentang Kartini bersama : komunitas Budaya Lomba baca puisi, peserta : Komunitas Satu Atap Semarang'}
  ];

  return {
    all : function(){
      return agendas;
    },
    get : function(agendaId){
      return agendas[agendaId];
    }
  }
});

const Kanjian = require('../src');

const instance = new Kanjian('appKey', 'appSecred', 'serverHost');

(async () => {
  let data;
  console.log('test getToken');
  data = await instance.getToken();
  console.log(data);
  console.log('test getToken');

  console.log('test getGenreList');
  data = await instance.getGenreList('1212', 0, 20);
  console.log(data);
  console.log('test getGenreList');

  console.log('test getAlbumListByGenre');
  data = await instance.getAlbumListByGenre('1212', 0, 20, 1);
  console.log(data);
  console.log('test getAlbumListByGenre');

  console.log('test getTrackListByGenre');
  data = await instance.getTrackListByGenre('1212', 0, 20, 1);
  console.log(data);
  console.log('test getTrackListByGenre');

  console.log('test getArtistList');
  data = await instance.getArtistList('1212', 0, 20);
  console.log(data);
  console.log('test getArtistList');

  console.log('test getAlbumListByArtist');
  data = await instance.getAlbumListByArtist('1212', 0, 20, 1);
  console.log(data);
  console.log('test getAlbumListByArtist');

  console.log('test getTrackListByArtist');
  data = await instance.getTrackListByArtist('1212', 0, 20, 1);
  console.log(data);
  console.log('test getTrackListByArtist');

  console.log('test getAlbumDetail');
  data = await instance.getAlbumDetail('1212', 1);
  console.log(data);
  console.log('test getAlbumDetail');

  console.log('test getTrackListByAlbum');
  data = await instance.getTrackListByAlbum('1212', 0, 20, 1);
  console.log(data);
  console.log('test getTrackListByAlbum');

  console.log('test getTrackDetail');
  data = await instance.getTrackDetail('1212', 1);
  console.log(data);
  console.log('test getTrackDetail');

  console.log('test searchArtist');
  data = await instance.searchArtist('1212', 0, 20, 'love');
  console.log(data);
  console.log('test searchArtist');

  console.log('test searchAlbum');
  data = await instance.searchAlbum('1212', 0, 20, 'love');
  console.log(data);
  console.log('test searchAlbum');

  console.log('test searchTrack');
  data = await instance.searchTrack('1212', 0, 20, 'love');
  console.log(data);
  console.log('test searchTrack');

  console.log('done');
})();

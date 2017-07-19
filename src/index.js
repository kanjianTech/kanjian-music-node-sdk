const URL = require('url');
const client = require('./client');

const { generateSig } = require('./util');

class Kanjian {
  constructor(appKey, appSecrect, serverHost) {
    this.appKey = appKey;
    this.appSecrect = appSecrect;
    this.serverHost = serverHost;
    this.token = null;
  }
  // 获取 Token
  async getToken() {
    const now = new Date() * 1;
    const url = URL.resolve(this.serverHost, '/v1/token');
    const that = this;
    if ((this.token === null) ||
    (this.token.expires_at && (this.token.expires_at > (now + (10 * 1000))))) {
      const params = {
        app_key: that.appKey,
        timestamp: now,
      };
      const sig = generateSig(this.appSecrect, params);
      params.sig = sig;
      this.token = await client.get(url, params);
      this.token.expires_at = now + (this.token.expires_in * 1000);
    }

    return this.token.access_token;
  }

  // 获取基因列表
  async getGenreList(deviceId, page, count) {
    const url = URL.resolve(this.serverHost, '/v1/genre');
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
    };
    const sig = generateSig(this.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过基因 id 获取专辑
  async getAlbumListByGenre(deviceId, page, count, genreId) {
    const url = URL.resolve(this.serverHost, `/v1/genre/${genreId}/album`);
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过基因 id 获取单曲
  async getTrackListByGenre(deviceId, page, count, genreId) {
    const url = URL.resolve(this.serverHost, `/v1/genre/${genreId}/track`);
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 获取音乐人
  async getArtistList(deviceId, page, count) {
    const url = URL.resolve(this.serverHost, '/v1/artist');
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过音乐人 id 获取专辑
  async getAlbumListByArtist(deviceId, page, count, artistId) {
    const url = URL.resolve(this.serverHost, '/v1/artist');
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
      artistId,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过音乐人 id 获取单曲
  async getTrackListByArtist(deviceId, page, count, artistId) {
    const url = URL.resolve(this.serverHost, `/v1/artist/${artistId}/track`);
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
      artistId,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过专辑 id 获取专辑详细信息
  async getAlbumDetail(deviceId, albumId) {
    const url = URL.resolve(this.serverHost, `/v1/album/${albumId}`);
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过单曲列表获取专辑 id
  async getTrackListByAlbum(deviceId, page, count, albumId) {
    const url = URL.resolve(this.serverHost, `/v1/album/${albumId}/track`);
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 通过单曲 id 获取单曲详细信息
  async getTrackDetail(deviceId, trackId) {
    const url = URL.resolve(this.serverHost, `/v1/track/${trackId}`);
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 搜索音乐人
  async searchArtist(deviceId, page, count, keyword) {
    const url = URL.resolve(this.serverHost, '/v1/search/artist');
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
      keyword,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 搜索专辑
  async searchAlbum(deviceId, page, count, keyword) {
    const url = URL.resolve(this.serverHost, '/v1/search/album');
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
      keyword,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
  // 搜索单曲
  async searchTrack(deviceId, page, count, keyword) {
    const url = URL.resolve(this.serverHost, '/v1/search/track');
    const token = await this.getToken();
    const that = this;
    const params = {
      app_key: that.appKey,
      access_token: token,
      device_id: deviceId,
      page,
      count,
      keyword,
    };
    const sig = generateSig(that.appSecrect, params);
    params.sig = sig;
    return client.get(url, params);
  }
}

module.exports = Kanjian;

import RNFetchBlob from 'react-native-fetch-blob';
import {
  GOOGLE_API_KEY,
  API_HOST,
  YOUTUBE_URI,
} from 'react-native-dotenv'
import { durationToTime } from '../util';

export const fetchQuery = async (query) => {

  const url = 'https://www.googleapis.com/youtube/v3/search/';
  const maxResults = 25;
  const type = 'video';
  const part = 'snippet';

  try {
    const result = await fetch(`${url}?q=${query}&maxResults=${maxResults}&part=${part}&type=${type}&key=${GOOGLE_API_KEY}`)
                           .then(response => response.json());
    const videoIdList = result.items.map(item => item.id.videoId).join();
    const videoList = await fetchVideoDetails(videoIdList);

    return videoList;

  } catch (error) {
    console.log(error);
  }
}

export const fetchVideoDetails = async (videoIdList) => {

  const url = 'https://www.googleapis.com/youtube/v3/videos/';
  const part = ['contentDetails', 'snippet'].join();

  try {
    const result = await fetch(`${url}?id=${videoIdList}&part=${part}&key=${GOOGLE_API_KEY}`)
                     .then(response => response.json());
    const videoList = result.items.map(item => ({
                        videoId: item.id,
                        title: item.snippet.title,
                        duration: durationToTime(item.contentDetails.duration),
                        requested: false,
                      }));
    return videoList;

  } catch (e) {
    Promise.resolve(e);
  }

}

export const requestDownload = async (videoUrl) => {

  const url = `http://${API_HOST}/download`;

  try {
    const result = await fetch(url, {
                                method: 'POST',
                                headers: {
                                  Accept: 'application/json',
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                  url: `${YOUTUBE_URI}${videoUrl}`,
                                }),
                              }).then(response => response.json());
   return result;
  } catch (e) {
    Promise.resolve(e);
  }

}

export const getDownload = async (filename) => {

  const url = `http://${API_HOST}/file/${encodeURI(filename)}`;

  RNFetchBlob.config({
    fileCache : true,
    addAndroidDownloads : {
      notification : true,
      useDownloadManager: true,
      title : filename,
      description : 'Download completed',
      mime : 'audio/mpeg',
      meidaScannable : true,
      path: `${RNFetchBlob.fs.dirs.DownloadDir}/${filename}`,
    }
  })
  .fetch('GET', url)
  .progress((received, total) => {
    console.log('progress', received / total)
  })
  .then((res) => RNFetchBlob.fs.scanFile([ { path : res.path(), mime : 'audio/mpeg' } ]))
  .then(res => {
    console.log('The file saved to ', res.path());
  })
  .catch(e => console.log(e));

}

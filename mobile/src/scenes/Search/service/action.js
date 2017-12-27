import { API_KEY } from 'react-native-dotenv'
import { durationToTime } from '../util';

export const fetchQuery = async (query) => {

  const url = 'https://www.googleapis.com/youtube/v3/search/';
  const maxResults = 25;
  const type = 'video';
  const part = 'snippet';

  try {
    const result = await fetch(`${url}?q=${query}&maxResults=${maxResults}&part=${part}&type=${type}&key=${API_KEY}`)
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
    const result = await fetch(`${url}?id=${videoIdList}&part=${part}&key=${API_KEY}`)
                     .then(response => response.json());
    const videoList = result.items.map(item => ({
                        videoId: item.id,
                        title: item.snippet.title,
                        duration: durationToTime(item.contentDetails.duration),
                      }));
    return videoList;

  } catch (e) {
    console.log(e);
  }

}

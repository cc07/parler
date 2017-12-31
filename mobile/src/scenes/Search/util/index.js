import moment from 'moment';

export const durationToTime = (duration) => {
  const seconds = moment.duration(duration).asSeconds() * 1000;
  return moment.utc(seconds).format('HH:mm:ss');
}

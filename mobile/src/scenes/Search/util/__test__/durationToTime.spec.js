import { durationToTime } from '../';

describe('durationToTime should work properly', () => {

  it('should allow duration input', () => {
    expect(durationToTime('PT15M33S')).toBeTruthy();
  });

  it('should return a HH:MM:SS timestamp', () => {
    expect(durationToTime('PT15M33S')).toBe('00:15:33');
  });

});

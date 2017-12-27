import { fetchQuery } from '../action';

describe('fetchQuery should work properly', () => {

  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        result: 'ok',
        json: jest.fn().mockImplementation(() =>
          ({
            items: [
              { id: { videoId: null }}
            ],
          })
        ),
      })
    );
  });

  it('should allow text input', () => {
    expect(fetchQuery('something')).toBeTruthy();
  });
});

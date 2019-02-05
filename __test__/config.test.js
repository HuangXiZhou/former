import config from '../src/config';

describe('Config file', () => {
  it('Should return namespace', () => {
    expect(config).toMatchObject({ namespace: 'former' });
  });
});

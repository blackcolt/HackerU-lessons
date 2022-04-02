import { MaamPipe } from './maam.pipe';

describe('MaamPipe', () => {
  it('create an instance', () => {
    const pipe = new MaamPipe();
    expect(pipe).toBeTruthy();
  });
  it('check if reguuler value returns as it shuold', () => {
    const pipe = new MaamPipe();
    expect(pipe.transform(10)).toBe(11.7);
    expect(pipe.transform(0)).toBe(0);
    expect(pipe.transform(-10)).toBe(0);
  });
});

import { SqrtPipe } from './sqrt.pipe';

describe('SqrtPipe', () => {
  it('create an instance', () => {
    const pipe = new SqrtPipe();
    expect(pipe).toBeTruthy();
  });

  it('test this', () => {
    const pipe = new SqrtPipe();
    expect(pipe.transform(4)).toBe(2)
  });
});

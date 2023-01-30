import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  let result;

  it('pipe test', () => {
    let value: never[] = [];
    
    result = pipe.transform([], "1234");

    expect(1).toBe(1);
  });

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});

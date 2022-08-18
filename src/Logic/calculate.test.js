import calculate from './calculate';

describe('AC button', () => {
  test('Ac button with no previous inputs', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual(expected);
  });
  test('AC button with previous inputs', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual(expected);
  });
});

describe('= button', () => {
  test('press = button with no previous inputs', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {};
    const result = calculate(obj, '=');
    expect(result).toEqual(expected);
  });
  test('press = button with previous inputs', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const expected = {
      total: '15',
      next: null,
      operation: null,
    };
    const result = calculate(obj, '=');
    expect(result).toEqual(expected);
  });
});

describe('Buttons pressed', () => {
  test('Press a number with no previous inputs', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: '5',
    };
    const result = calculate(obj, '5');
    expect(result).toEqual(expected);
  });
  test('Press a number with no previous operations', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const expected = {
      total: null,
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, '5');
    expect(result).toEqual(expected);
  });
});

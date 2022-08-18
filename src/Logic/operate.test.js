import operate from './operate';

describe('Addition', () => {
  test('Addition of two positive numbers', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });
  test('Addition of two negative numbers', () => {
    const result = operate('-1', '-2', '+');
    expect(result).toBe('-3');
  });
  test('Addition of a positive number and a negative number', () => {
    const result = operate('1', '-2', '+');
    expect(result).toBe('-1');
  });
});

describe('Subtraction', () => {
  test('Subtraction of two positive numbers', () => {
    const result = operate('4', '2', '-');
    expect(result).toBe('2');
  });
  test('Subtraction of two negative numbers', () => {
    const result = operate('-4', '-2', '-');
    expect(result).toBe('-2');
  });
  test('Subtraction of a negative number and a positive number', () => {
    const result = operate('-4', '2', '-');
    expect(result).toBe('-6');
  });
});

describe('Multiplication', () => {
  test('Product of two positive numbers', () => {
    const result = operate('2', '2', 'x');
    expect(result).toBe('4');
  });
  test('Product of two negative numbers', () => {
    const result = operate('-2', '-2', 'x');
    expect(result).toBe('4');
  });
  test('Product of a negatiave and a positive number', () => {
    const result = operate('-2', '2', 'x');
    expect(result).toBe('-4');
  });
  test('Product of a number with 0', () => {
    const result = operate('0', '2', 'x');
    expect(result).toBe('0');
  });
});

describe('Division', () => {
  test('Division of two postive numbers', () => {
    const result = operate('4', '2', '÷');
    expect(result).toBe('2');
  });
  test('Division of two negative numbers', () => {
    const result = operate('-4', '-2', '÷');
    expect(result).toBe('2');
  });
  test('Division of a negative number and a positive number', () => {
    const result = operate('-4', '2', '÷');
    expect(result).toBe('-2');
  });
  test('Division by 0', () => {
    const result = operate('2', '0', '÷');
    expect(result).toBe('Can\'t divide by 0.');
  });
});

describe('Modulo', () => {
  test('Modulo of two postivie numbers', () => {
    const result = operate('4', '3', '%');
    expect(result).toBe('1');
  });
  test('Modulo of two negative numbers', () => {
    const result = operate('-4', '-3', '%');
    expect(result).toBe('-1');
  });
  test('Modulo of a positive and a negative number', () => {
    const result = operate('-4', '3', '%');
    expect(result).toBe('-1');
  });
  test('Division by 0', () => {
    const result = operate('2', '0', '%');
    expect(result).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

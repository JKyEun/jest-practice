const sum = require('./calculate');

test('더하기 함수 테스트', () => {
  expect(sum(1, 2)).toBe(3);
});

test('변수의 얕은 비교는 테스트가 되나요?', () => {
  const str = '테스트';
  expect(str + ' 가능?').toBe('테스트 가능?');
});

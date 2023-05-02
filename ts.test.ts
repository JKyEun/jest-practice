const sum = (a: number, b: number): number => {
  return a + b;
};

test('타입스크립트 함수 테스트', () => {
  expect(sum(1, 2)).toBe(3);
});

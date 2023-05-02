const makeObj = (id, name) => {
  return { id, name, age: undefined };
};

test('toStrictEqual로 변경', () => {
  expect(makeObj('jke', '장경은')).toStrictEqual({ id: 'jke', name: '장경은' });
});

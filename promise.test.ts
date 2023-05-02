// const getNamePromise = (): Promise<string> => {
//   const name = 'jke';
//   return new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(name);
//     }, 2000);
//   });
// };

// test('2초 후에 이름을 받아오는 프로미스 함수 테스트', () => {
//   return getNamePromise().then((name: string) => {
//     expect(name).toBe('jke');
//   });
// });

const getNamePromise = (): Promise<string> => {
  const name = 'jke';
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        resolve(name);
      } else {
        reject(new Error('에러'));
      }
    }, 2000);
  });
};

test('2초 후에 이름을 받아오는 프로미스 함수 테스트', () => {
  return getNamePromise()
    .then((name: string) => {
      expect(name).toBe('jke');
    })
    .catch(err => {
      expect(err.message).toBe('에러');
    });
});

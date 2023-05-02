const getNameCB = (callback: (str: string) => void): void => {
  const name: string = 'jke';
  setTimeout(() => {
    try {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log('정상 케이스');
        callback(name);
      } else {
        console.log('에러');
      }
    } catch (err) {
      callback(err);
    }
  }, 2000);
};

test('비동기 콜백 함수 테스트', done => {
  function callbackFunc(data: any): void {
    try {
      if (data instanceof Error) {
        expect(data.message).toBe('에러');
      } else {
        expect(data).toBe('jke');
      }
      done();
    } catch (err) {
      done(err);
    }
  }

  getNameCB(callbackFunc);
});

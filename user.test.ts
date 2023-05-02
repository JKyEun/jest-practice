interface User {
  email: string;
  name: string;
  age: number;
}

const users: User[] = [
  { email: 'j5@naver.com', name: '장경은', age: 27 },
  { email: 'sh@naver.com', name: '박성희', age: 27 },
  { email: 'sa@naver.com', name: '신상아', age: 31 },
  { email: 'tetz@naver.com', name: '이효석', age: 39 },
];

const getUser = (): User[] => {
  return users;
};

const getUserNumByAge = (age: number): number => {
  const filteredUser: User[] = users.filter(el => el.age >= age);
  return filteredUser.length;
};

const getEmailByName = (name: string) => {
  const filteredUser: User[] = users.filter(el => {
    if (el.name === name) return el.email;
  });
  const result: string = filteredUser.length > 0 ? filteredUser[0].email : '존재하지 않는 이름입니다.';
  return result;
};

test('전체 회원의 수는 4명인가?', () => {
  expect(getUser()).toHaveLength(4);
});

test('전체 회원 중에 아래의 회원 정보를 가진 회원이 존재 하는가?', () => {
  expect(getUser()).toContainEqual({
    email: 'tetz@naver.com',
    name: '이효석',
    age: 39,
  });
});

test('25살 이상인 회원은 3명이 넘는가?', () => {
  expect(getUserNumByAge(25)).toBeGreaterThan(3);
});

test('특정 이름을 가진 회원의 email 주소 형태가 올바른가?', () => {
  expect(getEmailByName('장경은')).toMatch(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/);
});

const throwErr = (): never => {
  throw new Error('에러 발생!');
};

test('에러가 발생하는지 테스트', () => {
  expect(() => throwErr()).toThrow();
});

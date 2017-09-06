import { AuthorsPipe } from './authors.pipe';

const ISSUES = [
  {
    url: '',
    number: 1,
    title: 'title1',
    state: '',
    createdAt: '',
    user: 'user1'
  },
  {
    url: '',
    number: 2,
    title: 'title2',
    state: '',
    createdAt: '',
    user: 'user2'
  }
];

describe('AuthorsPipe', () => {
  const pipe = new AuthorsPipe();

  it('should filter by author', () => {
    expect(pipe.transform(ISSUES, 'user1')).toEqual([ISSUES[0]]);
  });
});

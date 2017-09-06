import { IssuesPipe } from './issues.pipe';

const ISSUES = [
  {
    url: '',
    number: 1,
    title: 'this is another test title',
    state: '',
    createdAt: '',
    user: 'user1'
  },
  {
    url: '',
    number: 2,
    title: 'regular title',
    state: '',
    createdAt: '',
    user: 'user2'
  },
  {
    url: '',
    number: 3,
    title: 'this is test title',
    state: '',
    createdAt: '',
    user: 'user3'
  }
];

describe('IssuesPipe', () => {
  const pipe = new IssuesPipe();

  it('should filter by title', () => {
    expect(pipe.transform(ISSUES, 'test').length).toBe(2);
  });
});

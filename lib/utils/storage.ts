const storage = async (key: string) => {
  const value = localStorage.getItem(key);
  return !!value ? JSON.parse(value) : undefined;
  // return JSON.parse('{"id":154764,"email":"dyson@example.com","createdAt":"2021-03-31T08:47:55.117Z","updatedAt":"2021-06-20T23:07:37.626Z","username":"dyson","bio":null,"image":"https://a.disquscdn.com/1623278138/images/noavatar92.png","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0NzY0LCJ1c2VybmFtZSI6ImR5c29uIiwiZXhwIjoxNjMwMTU5NjkwfQ.xTxIKtmNqL8azkOIOTB8SjJJIxbPIAp3e4Cqc2GG04o"}')
};

export default storage;

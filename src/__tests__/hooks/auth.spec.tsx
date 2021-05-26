import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to signIn', () => {
    apiMock.onPost('sessions').reply(200, {
      user: {
        id: 'user123',
        name: 'john er',
        email: 'johndoe@gmail.com',
      },
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@gmail.com',
      password: '123123',
    });

    expect(result.current.user.email).toEqual('johndoe@gmail.com');
  });
});

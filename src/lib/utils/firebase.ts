export const errorCodeToErrorText = (e: { code: string }): string => {
  switch (e.code) {
    case 'auth/user-not-found':
      return 'User does not exist';
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/invalid-email':
      return 'Invalid email';
    case 'auth/too-many-requests':
      return 'Password entered incorrectly too many times in a row';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/weak-password':
      return 'Password is too weak, please use at least 8 characters'
    default:
      return 'Unknown authentication error';
  }
}

interface GoogleLoginButtonPropType {
  onClick: (e:any) => Promise<void>;
}

export default function GoogleLoginButton({ onClick: googleSignIn }: GoogleLoginButtonPropType) {
  return (
    <button
      className="px-10 py-4 border border-black-200 rounded-md"
      onClick={googleSignIn}
    >
      Login with Google
    </button>
  )
}
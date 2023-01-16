
interface GoogleRegisterButtonPropType {
  onClick: (e:any) => Promise<void>;
}

export default function GoogleRegisterButton({ onClick }: GoogleRegisterButtonPropType) {
  return (
    <button 
      className="px-10 py-4 mt-5 border border-black-200 rounded-md"
      onClick={onClick}
    >
      Register with Google
    </button>
  )
}
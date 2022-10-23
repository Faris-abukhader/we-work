export default function ConfirmButton({children,disable,onClickHandler}) {
    return (
      <button disabled={disable} onClick={onClickHandler} className="px-6 py-2.5 bg-blue-600 rounded-md  disabled:bg-opacity-50  appearance-none transition duration-150 ease-in-out ml-1">
          {children}
          </button>
      )
  }
  
export default function CloseButton({children,onClickHandler}) {
    return (
      <button className="px-6 py-2.5 text-black ring appearance-none ring-gray-200 sm:outline sm:outline-gray-200 text-sm  rounded shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-150 ease-in-out" onClick={onClickHandler}>
          {children}
      </button>
   )
  }
  
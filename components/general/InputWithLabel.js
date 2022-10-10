export default function InputWithLabel({value='',name='',type='text',isValid=true,label,hasHandler=true,inputHandler,withIndex=false,index=0}) {
  
    const handler = (e)=>{
      if(hasHandler){
        if(withIndex){
          inputHandler(e,index)
        }else{
          inputHandler(e)
        }
      }
    }
    
    return (
      <div className='w-full flex-row justify-center items-start'>
      <h1 className={`text-xs pb-1 ${isValid ? 'text-gray-200' : 'text-red-400'}`}>{label}</h1>
      <input className={`appearance-none w-full border ${isValid ? 'border-blue-400' : ' border-red-400'} focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-200 mb-3  bg-transparent  rounded-md p-1 ${!hasHandler && 'border-0'} text-sm`} disabled={!hasHandler} name={name} value={((value?.length<1) && !hasHandler) ? '. . .':value} type={type} onChange={handler} />
      </div>
    )
  }
  
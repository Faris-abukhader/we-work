import Swal from "sweetalert2"
const customClass = {
    actions:'space-x-4',
    confirmButton:'px-6 py-2.5 text-gray-100 bg-blue-700  hover:bg-blue-800 rounded-md  appearance-none',
    cancelButton:'px-6 py-2.5 text-black ring appearance-none ring-gray-200 sm:outline sm:outline-gray-200 text-sm  rounded shadow-md hover:bg-gray-300 hover:shadow-lg',
}
const fireNotification = ({label,icon='success'||'error'||'warning'||'info'||'question',hasHandler=false,handler,confirmActionLabel='',deniedActionLabel='',showConfirmButton=false,showCancelButton=false,showConfirmDialog=true,showDeniedDialog=true})=>{
    Swal.fire({
        icon,
        title: label,
        showConfirmButton,
        showCancelButton,
        timer: showCancelButton || showConfirmButton ? undefined: 2000,
        customClass,
        
        buttonsStyling: false    
    }).then((result) => {
        if (result.isConfirmed) {
            if(hasHandler){
                handler()
            }
            if(showConfirmDialog){
              Swal.fire({title:confirmActionLabel, icon:'success',customClass,buttonsStyling: false})
            }
        } else if (result.isDenied) {
          if(showDeniedDialog){
            Swal.fire({confirmButtonText:deniedActionLabel, icon:'info',customClass,buttonsStyling: false})
          }
        }
      })
}

export default fireNotification

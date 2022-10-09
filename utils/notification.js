import Swal from "sweetalert2"
const fireNotification = (label,icon='success')=>{
    Swal.fire({
        icon,
        title: label,
        showConfirmButton: false,
        timer: 2000
    })
}

module.exports = {fireNotification}

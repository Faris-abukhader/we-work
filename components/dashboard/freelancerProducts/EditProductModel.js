import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {InputWithLabel,CloseButton,ConfirmButton,SegimentPicker,CustomDropDown} from '../../general/general'
import {fireNotification} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { modifyOneProduct } from '../../../store/slices/product'
export default function EditRequestModel({show,toggle,data}) {
    console.log(data)
    const session = useSession()
    const dispatch = useDispatch()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({ content:false })
    const [product,setProduct] = useState({content:''})

    useEffect(()=>{
       if(show){
        setProduct({content:data?.content})
      }
    },[show])

    const inputHandler = (e) => {
      setProduct((prevs) => ({
        ...prevs,
        [e.target.name]: e.target.value
      }))
    }
    
    const validation = () => {
      if (isValid.content) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
      setProduct({content:''})
    }
  
    useEffect(() => {
      setValid(() => ({
        ['content']: product?.content?.length > 0 ? true : false,
      }))
      validation()
    }, [product])
  
    const updateOneProduct = ()=>{
      axios.put(`${process.env.API_URL}/product/${data.id}`,{...product},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'Product updated successfully.',icon:'success'})
        dispatch(modifyOneProduct(res.data))
        toggle()
        reset()
        console.log(res)
      }).catch((err) => {
        fireNotification({label:'Something went wrong.',icon:'error'})
        console.log(err)
      })
    }

    const close = ()=>{
      reset()
      toggle()
    }
  return (
    <CustomModal show={show} toggle={toggle} title={`Update a product`} >
      <CustomModal.Body>
        <section className="py-1">
          <div className='grid grid-cols-1 w-full space-y-3'>
          <InputWithLabel label={`Product content`} isTextArea={true} isValid={isValid.content} name={`content`} value={product.content} inputHandler={inputHandler} />
          </div>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={updateOneProduct} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}

import  { useState,useEffect } from 'react'
import { CustomModal } from '../../general/CustomModel'
import {CloseButton,ConfirmButton,CustomDropDown} from '../../general/general'
import {fireNotification,languageLevels,languagesList} from '../../../utils/utils'
import axios from 'axios'
import { useSession } from 'next-auth/react'
export default function AddLanguageModel( {show,toggle}) {
    const session = useSession()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable,setDisable] = useState(true)
    const [isValid, setValid] = useState({name:false,level:false})
    const [language,setLanguage] = useState({name:'',level:''})

    
    const validation = () => {
      if (isValid.name && isValid.level) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }
  
    const reset = () => {
        setLanguage({name:'',level:0})
    }
  
    useEffect(() => {
      setValid(()=>({
        ['name']:language.name.length > 0 ? true:false,
        ['level']:language.level > 0 ? true:false,
      }))
      validation()
    }, [language])

    useEffect(()=>{
       console.log(language)
    },[language])
  
    const addNewLanguage = ()=>{
      axios.post(`${process.env.API_URL}/language/${userId}`,{...language},{ headers: { token } })
      .then((res) => {
        fireNotification({label:'New language added successfully.',icon:'success'})
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
    <CustomModal show={show} toggle={toggle} title={`Add new language`} >
      <CustomModal.Body>
        <section className="py-1 flex items-center space-x-2">
            <CustomDropDown mainLabel='Language' isValid={isValid.name} hasLabel={true} label={'select language'}  hasData={true} handler={(val)=>setLanguage((prevs)=>({...prevs,'name':val}))} data={languagesList} selectedItem={language.name}/>
            <CustomDropDown mainLabel='Level' isValid={isValid.level} hasLabel={true} label={'select level'}  hasData={true} handler={(level)=>setLanguage((prevs)=>({...prevs,'level':level}))} data={languageLevels} selectedItem={String(language.level+' ')}/>
        </section>
      </CustomModal.Body>
      <CustomModal.Footer>
        <CloseButton onClickHandler={close}>{`Close`}</CloseButton>
        <ConfirmButton onClickHandler={addNewLanguage} disable={disable}>{`Confirm`}</ConfirmButton>
      </CustomModal.Footer>
    </CustomModal>
  )
}

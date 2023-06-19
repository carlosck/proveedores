'use client';
import style from './page.module.css';
import { useForm, FormProvider, getValues } from 'react-hook-form'
import formStyles from '../../styles/forms.module.css'
import {Input} from '../admin/commons/input';

export default function Contact(){
    const methods = useForm({})
    const name_validation = {
        name: 'name',
        label: 'name',
        type: 'text',
        id: 'name',
        placeholder: 'write your name ...',        
        validation: {
          required: {
            value: true,
            message: 'required',
          },
          maxLength: {
            value: 50,
            message: '50 characters max',
          },
        },
      }
      const comments_validation = {
        name: 'commentarios',
        label: 'commentarios',
        type: 'textarea',
        multiline: true,
        id: 'name',
        placeholder: 'write your commentario ...',        
        validation: {
          required: {
            value: true,
            message: 'required',
          },
          maxLength: {
            value: 50,
            message: '500 characters max',
          },
        },
      }
    return(
        <div className={style.contact}>
            <FormProvider {...methods}>
                <form
                    onSubmit={e => e.preventDefault()}
                    noValidate
                    autoComplete="off"
                    className="container"
                >
                    <div className={formStyles.form_container}>
                        <Input {...name_validation} />
                        <Input {...comments_validation} />
                        <button                            
                            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
                        >                    
                            Submit Form
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
        
    )
}
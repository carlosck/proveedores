'use client'
import { useForm, FormProvider } from 'react-hook-form'
import { useRef, useState } from 'react'
import { Input } from '../commons/input'
import formStyles from '../../../styles/forms.module.css'
export default function addProveedor(){

    const methods = useForm()
    const [success, setSuccess] = useState(false)

    

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
        methods.reset()
        setSuccess(true)
    })

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
            value: 30,
            message: '30 characters max',
          },
        },
      }
    const contact_validation = {
        name: 'contact',
        label: 'contact',
        type: 'text',
        id: 'contact',
        placeholder: 'write your contact ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }
    const logo_validation = {
        name: 'logo',
        label: 'logo',
        type: 'text',
        id: 'logo',
        placeholder: 'write your logo ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }
    const area_validation = {
        name: 'area',
        label: 'area',
        type: 'text',
        id: 'area',
        placeholder: 'write your area ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }

    const subarea_validation = {
        name: 'subarea',
        label: 'subarea',
        type: 'text',
        id: 'subarea',
        placeholder: 'write your subarea ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }

    const mail_validation = {
        name: 'mail',
        label: 'mail',
        type: 'text',
        id: 'mail',
        placeholder: 'write your mail ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }
    const phone_validation = {
        name: 'phone',
        label: 'phone',
        type: 'text',
        id: 'phone',
        placeholder: 'write your phone ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }

    const subscription_validation = {
        name: 'subscription',
        label: 'subscription',
        type: 'text',
        id: 'subscription',
        placeholder: 'write your subscription ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 30,
            message: '30 characters max',
            },
        },
    }
    
    return(
        <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                autoComplete="off"
                className="container"
            >
                <div className={formStyles.form_container}>
                    <Input {...name_validation} />
                    <Input {...contact_validation} />
                    <Input {...logo_validation} />
                    <Input {...area_validation} />
                    <Input {...subarea_validation} />
                    <Input {...mail_validation} />
                    <Input {...phone_validation} />
                    <Input {...subscription_validation} />
                    <button
                    onClick={onSubmit}
                    className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
                >                    
                    Submit Form
                </button>
                </div>
                {success && (
                    <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                        Form has been submitted successfully
                    </p>
                )}
            </form>
                        
        </FormProvider>
        
    )
}
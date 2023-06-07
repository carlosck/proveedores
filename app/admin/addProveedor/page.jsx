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
            </form>
                {/* <div className={formStyles.form_row}>
                    <label htmlFor='name'>
                        Nombre del proveedor
                    </label>
                    <input name='name' placeholder='Nombre' ref={inputName}></input>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='contact'>
                        Contacto
                    </label>
                    <input name='contact' placeholder='Contacto' ref={inputContact}></input>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='logo'>
                        Logo
                    </label>
                    <input name='logo' type='file' placeholder='Logo' ref={inputLogo}></input>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='area'>
                        Area
                    </label>
                    <select name='area' placeholder='Area' ref={inputArea}>
                        <option value='plasticos'>Plasticos</option>
                        <option value='metalurgia'>Metalurgia</option>
                    </select>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='subarea'>
                        Subarea
                    </label>
                    <select name='subarea' placeholder='Subarea' ref={inputSubarea}>
                        <option value='inyección'>Inyección</option>
                        <option value='Vaciado'>Vaciado</option>
                    </select>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='mail'>
                        Correo
                    </label>
                    <input name='mail' placeholder='Correo' ref={inputMail}></input>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='phone'>
                        Telefono
                    </label>
                    <input name='phone' placeholder='Telefono' ref={inputPhone}></input>
                </div>
                <div className={formStyles.form_row}>
                    <label htmlFor='subscription'>
                        Subscription
                    </label>
                    <input name='subscription' placeholder='Subscription' ref={inputSubscription}></input>
                </div>
                <div className={formStyles.form_row}>
                    
                    <button onClick={validateFormData}>Agregar</button>
                </div> */}
                
            
        
        </FormProvider>
        
    )
}
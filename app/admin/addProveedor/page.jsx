'use client'
import { useForm, FormProvider, getValues } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { doc, setDoc } from "firebase/firestore";

import InitFirebase from '../../../helpers/initFirebase'
import {Slugify} from '../../../helpers/sluglify';
import { Input } from '../commons/input'

import formStyles from '../../../styles/forms.module.css'
export default function AddProveedor(){

    const methods = useForm({defaultValues: {
        name: 'deacero',
        contact: 'Juan Lopez',
        logo: 'image_placeholder.png',
        description: 'esto es un texto de prueba ',
        address: 'carretera a Monterrey KM 3.8',
        website: 'http://deacero.mx',        
        phone: '844123123123',
        email: 'jlopez@deacero.com',        
        area: 'acero',
        subarea: 'fundición',
        subscription: 0
        
    }})
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = methods.handleSubmit(async data => {
        setIsLoading(true);
        console.log(data)
        methods.reset()
        const db =await getAppFirestore();
        insertData(db,data).then((info)=>{
            console.log('info', info)
            setSuccess(true)
            setIsLoading(false);
        })
        
    })
    async function insertData(db, data){
        console.log('db', db)
        console.log('insertData', data)
        //console.log('encodeURIComponent',encodeURIComponent(data.name))
        await setDoc(doc(db, "proveedores",Slugify(data.name)), data)
        
        return (true)
    }
    async function getAppFirestore(){
        // TODO: move to oneliner
        console.log('getAppFirestore')
        const firebase =await InitFirebase.getInstance()        
        return firebase.getDB();
    }

    useEffect(()=>{
        getAppFirestore();
    },[])

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
    const contact_validation = {
        name: 'contact',
        label: 'contact',
        type: 'contact',
        id: 'contact',        
        placeholder: 'write your contact ...',
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
            value: 50,
            message: '50 characters max',
            },
        },
    }
    const description_validation = {
        name: 'description',
        label: 'description',
        type: 'text',
        id: 'description',        
        placeholder: 'write your description ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 250,
            message: '250 characters max',
            },
        },
    }
    const address_validation = {
        name: 'address',
        label: 'address',
        type: 'text',
        id: 'address',        
        placeholder: 'write your address ...',
        validation: {
            required: {
            value: true,
            message: 'required',
            },
            maxLength: {
            value: 150,
            message: '150 characters max',
            },
        },
    }
    const website_validation = {
        name: 'website',
        label: 'website',
        type: 'text',
        id: 'website',        
        placeholder: 'write your website ...',
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
        value: 'fundición',
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

    const email_validation = {
        name: 'email',
        label: 'email',
        type: 'email',
        id: 'email',        
        placeholder: 'write your email ...',
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
        value: '84412312234',
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
        type: 'date',
        id: 'subscription',
        value: 0,
        placeholder: 'write your subscription ...',
        validation: {
            required: {
            value: false,
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
                    <Input {...description_validation} />
                    <Input {...address_validation} />
                    <Input {...website_validation} />
                    <Input {...phone_validation} />
                    <Input {...email_validation} />
                    <Input {...area_validation} />
                    <Input {...subarea_validation} />                    
                    <Input {...subscription_validation} />
                    {isLoading? (
                        <p>Loading</p>
                    ):(
                        <button
                            onClick={onSubmit}
                            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
                        >                    
                            Submit Form
                        </button>
                        )
                    }
                    
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
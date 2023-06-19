import Image from "next/image"
import style from './page.module.css'
export default function Detail({data}){
    console.log('data_>',data)
    return(
        <div className={style.detail_stage}>
            <div>
                <Image
                    src={`/${data.logo}`}
                    alt={`${data.name} logo`}
                    width={180}
                    height={37}
                    />
            </div>
            <h2>{data.name}</h2>
            <div className={style.detail_data_container}>
                <div className={style.detail_row}>{data.description}</div>
                <div className={style.detail_row}>{data.address}</div>
                <div className={style.detail_row}>{data.contact}</div>
                <div className={style.detail_row}>{data.phone}</div>
                <div className={style.detail_row}><a href={`mailto: ${data.email}`}>{data.email}</a></div>
                <div className={style.detail_row}><a href={`${data.website}`}>{data.website}</a></div>
                <div className={style.detail_row}>{data.area}</div>
                <div className={style.detail_row}>{data.subarea}</div>
                </div>
            
        </div>
    )
}
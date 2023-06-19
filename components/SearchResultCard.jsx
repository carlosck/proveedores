import Image from "next/image"
import style from './searchresultcard.module.css'

export default function SearchResultCard({slug, data}){
    console.log('data', data);
    return(
        <a href={`./proveedor/${slug}`}  className={style.card}>
            <div>
                <Image                
                src={`/${data.logo}`}
                alt={`${data.name} logo`}
                width={180}
                height={37}
                />
            </div>
            <div className={style.card_data_container}>
                <h5 className={style.card_name}>{data.name}</h5>
                <p className={style.card_address}>{data.address}</p>
                <p className={style.card_area}>{data.area}</p>
                <p className={style.card_subarea}>{data.subarea}</p>             
            </div>

        </a>
    )
}
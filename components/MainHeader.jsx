import Image from "next/image"
import styles from './mainheader.module.css';

export default function MainHeader({title='Proveedores',text='Puedes realizar tu busqueda por nombre area o sub-area'}){
    return(
        <header className={styles.main_header}>
            <div className={styles.header_bgcontainer}>
                <Image                
                src="/image_placeholder.png"
                alt='Header alt'
                width={1024}              
                height={150}
                />
            </div>
            <div className={styles.header_content_container}>
                <h2 className={styles.header_title}>{title}</h2>
                <p className={styles.header_subtitle}>{text}</p>
            </div>
            
        </header>

    )
}
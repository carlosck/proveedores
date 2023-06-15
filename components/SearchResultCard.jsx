import Image from "next/image"
export default function SearchResultCard({image= "/image_placeholder.png", name, address, phone }){
    return(
        <div>
            <div>
                <Image                
                src={image}
                alt={`${name} logo`}
                width={180}
                height={37}
                />
            </div>
            <div>
                <h5>{name}</h5>
                <p>{address}</p>
                <p>{phone}</p>
            </div>

        </div>
    )
}
 
import {proveedorType} from '../.next/types/common/proveedorType';
import SearchResultCard from './SearchResultCard';
export default function SearchResultContainer({results}){
    return results.map((result)=>{
        return(
            <SearchResultCard name={result.name} address={result.address} phone={result.phone} />
        )
    })
}
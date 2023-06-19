 
//import {proveedorType} from '../.next/types/common/proveedorType';
import SearchResultCard from './SearchResultCard';
import styles from './search.module.css';

export default function SearchResultContainer({results, isLoading}){
    return(isLoading ?(
        <p>Loading ...</p>
    ):
    
    <div className={styles.search_results_container}>
        {results.map((result)=>{                
            const proveedor = result.data();                
                return(
                    <SearchResultCard key={result.id} slug={result.id} data={proveedor} />
                )
            })
        }
    </div>
    
        
    )
    
}
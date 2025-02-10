import { useSearchParams } from 'react-router-dom';

const SearchIceCreams=()=>{
      const [searchParams, setSearchParams] = useSearchParams();
      const query = searchParams.get('q');

    return(
        <div>
            <div>
                <div><div>searchIcon</div>
                <div><input type="text" placeholder="type here"/></div></div>
                <div>shortcut</div>
            </div>
            <div>
                <h1>{query}</h1>
            </div>
        </div>
    )
    
}

export default SearchIceCreams
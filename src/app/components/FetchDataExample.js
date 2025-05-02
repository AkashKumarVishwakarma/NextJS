import {useEffect, useState} from 'react';

const FetchDataExample = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setData(result);
        console.log(result);
    }

    useEffect(() =>{
        fetchData();
    },[])
    return (
        <div>
            <ul>
                {data.map(item=>(
                    <li key = {item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataExample
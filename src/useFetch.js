import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData]= useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect( ()=> {
        
        // setTimeout(() => {
        //     axios.get('http://localhost:8000/blogs')
        //     .then((result) => {
        //         console.log(result.statusText)
        //         if (result.statusText !="ok") {
        //             // console.log('Desolé, une erreur est survenu');
        //             // throw Error('Desolé, une erreur est survenu');
        //         }
        //         // setError(true)
        //         setBlogs(result.data)
        //         setIsLoading(false)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         setError(err.response)
        //     })    
        // }, 2000);
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then((response) => {
                if (!response.ok) {
                    throw Error('Desolé, une erreur est survenu 😥');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false)
                setError(null)
            })
            .catch(err=>  {
                if (err.name === "AbortError") {
                    console.log("La requête a été annulée");
                } else {
                    // console.log(err.message)
                    setError(err.message)
                    setIsLoading(false)
                }
            })        
        }, 2000);

        return ()=> abortCont.abort();

        // console.log(blogs);
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;
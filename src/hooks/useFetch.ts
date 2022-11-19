import axios from "axios"
import { useEffect, useState } from "react"

export const api = axios.create({
    baseURL: 'http://localhost:3000',
  })
  

export const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await api.get(url)
                setData(response.data)
            } catch (err) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])


    const reFetch = async () => {
        setLoading(true)
        try {
            const response = await api.get(url)
            setData(response.data)
            console.log(response.data)
        } catch (err) {
            setError(true)
        }
        setLoading(false)
    }

    return { data, loading, error, reFetch }
}
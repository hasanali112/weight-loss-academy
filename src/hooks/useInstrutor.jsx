import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstrutor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data:isInstrutor, isLoading:isInstrutorLoading} = useQuery({
        queryKey:['isInstrutor', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstrutor, isInstrutorLoading]
};

export default useInstrutor;
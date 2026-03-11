import {useQuery} from "@tanstack/react-query";
import type {User} from "../types/User/User.ts";

const getUser = async(id: number) => {
    return await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
}

export const useUser = (id: number) => {
    return useQuery<User>({
        queryKey: ['user'],
        queryFn: () => getUser(id)
    })
}

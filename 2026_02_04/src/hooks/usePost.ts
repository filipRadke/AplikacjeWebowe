import {useQuery} from "@tanstack/react-query";
import type { Post } from "../types/Post/Post.ts";

const getPosts = async() => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
}

export const usePost = () => {
    return useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: getPosts
    })
}

const getSinglePost = async (id: number) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
}

export const useSinglePost = (id: number) => {
    return useQuery<Post>({
        queryKey: ['post', id],
        queryFn: () => getSinglePost(id)
    })
}


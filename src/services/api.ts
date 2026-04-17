import type { PostsResponse } from "@/types/dummyjson"

//todo -> types import
const BASE_URL: string = "https://dummyjson.com"
const LIMIT = 12

export async function fetchPosts(skip: number, limit: number = LIMIT): Promise<PostsResponse> {
    const res = await fetch(`${BASE_URL}/posts?skip=${skip}&limit=${limit}&select=title,userId,tags,views`)
    if (!res.ok) throw new Error(`Error ${res.status}: No se cargaron los posts.`)
    return res.json() as Promise<PostsResponse>
}
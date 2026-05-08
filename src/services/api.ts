import type { CommentsResponse, Post, PostAuthor, PostsResponse } from "@/types/dummyjson"

//todo -> types import
const BASE_URL: string = "https://dummyjson.com"
const LIMIT = 12

export async function fetchPosts(skip: number, limit: number = LIMIT): Promise<PostsResponse> {
    const res = await fetch(`${BASE_URL}/posts?skip=${skip}&limit=${limit}&select=title,userId,tags,views`)
    if (!res.ok) throw new Error(`Error ${res.status}: No se cargaron los posts.`)
    return res.json() as Promise<PostsResponse>
}
export async function fetchPost(id: number): Promise<Post> {
    const res = await fetch(`${BASE_URL}/posts/${id}`)
    if (!res.ok) throw new Error(`Error ${res.status}: No se pudo cargar el post`)
    return res.json() as Promise<Post>
}

export async function fetchPostAuthor(userId: number): Promise<PostAuthor> {
    const res = await fetch(
        `${BASE_URL}/users/${userId}?select=id,firstName,lastName,email`
    )
    if (!res.ok) throw new Error(`Error ${res.status}: No se pudo cargar el autor`)
    return res.json() as Promise<PostAuthor>
}

export async function fetchPostComments(id: number): Promise<CommentsResponse> {
    const res = await fetch(`${BASE_URL}/posts/${id}/comments`)
    if (!res.ok) throw new Error(`Error ${res.status}: No se pudieron cargar los comentarios`)
    return res.json() as Promise<CommentsResponse>
}

//TODO fetchUsers
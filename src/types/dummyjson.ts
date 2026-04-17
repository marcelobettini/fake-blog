export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}
//utility types Pick, Omit
export type PostSummary = Pick<Post, 'id' | 'title' | 'userId' | 'tags' | 'views'>

export interface Reactions {
    likes: number
    dislikes: number
}

export interface PostsResponse {
    posts: PostSummary[]
    total: number
    skip: number
    limit: number
}
export interface Reactions {
    likes: number
    dislikes: number
}

export interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}

export type PostSummary = Pick<Post, 'id' | 'title' | 'userId' | 'tags' | 'views'>

export interface PostsResponse {
    posts: PostSummary[]
    total: number
    skip: number
    limit: number
}

export interface User {
    id: number
    username: string
    fullName: string
}

export interface PostAuthor {
    id: number
    firstName: string
    lastName: string
    email: string
}

export interface Comment {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

export interface CommentsResponse {
    comments: Comment[]
    total: number
    skip: number
    limit: number
}

export type TagList = string[]

export interface UserDetail {
    id: number
    firstName: string
    lastName: string
    email: string
    username: string
    image: string
}

export interface UsersResponse {
    users: UserDetail[]
    total: number
    skip: number
    limit: number
}

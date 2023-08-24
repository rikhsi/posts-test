export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export enum PostHeader {
    UserId = 'USERID',
    Id = 'ID',
    Title = 'TITLE',
    Body = 'BODY',
    Action = 'ACTION'
}
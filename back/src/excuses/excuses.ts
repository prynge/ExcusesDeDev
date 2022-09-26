export interface Excuse {
    http_code: number,
    tag: string,
    message: string
}

export interface Excuses {
    [key: number]: Excuse
    
    push(excuse: Excuse) : void
}
export const isPathPartlyExisted = (path: string) => {
    const arr = ['/search']
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true
    return false
}

export const debounce = (func:Function, delay:number) => {
    let timer: string | number | NodeJS.Timeout | undefined
    return function (...args: any) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(obj, args)
            clearTimeout(timer)
        }, delay)
    }
}

function obj(obj: any, args: any) {
    throw new Error("Function not implemented.")
}

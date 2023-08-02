export function isNotUndefind<T>(value: T | undefined ): T | 0 {
    return value !== undefined ? value :  0
}
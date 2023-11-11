import { originalSerInterval } from "./TaskManagingProvider"

window.setInterval = function (fn, delay, runImmediately) {
    if (runImmediately) fn()
    return originalSerInterval(fn, delay)
} as (handler: TimerHandler, timeout?: number, ...args: any[]) => number

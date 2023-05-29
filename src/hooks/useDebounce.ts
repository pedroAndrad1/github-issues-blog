/* eslint-disable @typescript-eslint/no-explicit-any */
// Explicacao https://www.youtube.com/watch?v=2wQZw7WY2-o

import { useRef } from 'react'

export const useDebounce = () => {
  const timoutRef = useRef(0)

  const debounce = (delay: number, fn: any, ...args: any[]) => {
    window.clearTimeout(timoutRef.current)
    timoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return {
    debounce,
  }
}

import { useEffect } from 'react'

export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV !== 'production') return

  const { id, name, label, value } = metric

  // Analytics can be sent to your preferred service here
  console.log(`Performance: ${name} (${label}) = ${Math.round(value)}`)
}

export const useImagePreload = (imagePaths: string[]) => {
  useEffect(() => {
    imagePaths.forEach((path) => {
      const img = new Image()
      img.src = path
    })
  }, [imagePaths])
}

export const useDeferredLoading = (callback: () => void, delay = 1000) => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const timeoutId = setTimeout(() => {
      callback()
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [callback, delay])
}

export const measurePerformance = (label: string) => {
  if (process.env.NODE_ENV !== 'production') return () => {}

  const start = performance.now()
  return () => {
    const duration = performance.now() - start
    console.log(`${label}: ${Math.round(duration)}ms`)
  }
} 
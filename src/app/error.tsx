'use client'

import { useEffect } from 'react'

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error.message)
  }, [error])

  return (
    <div>
      <p className="mt-6 text-center text-red-500">Data fetching in server failed</p>
    </div>
  )
}

export default Error

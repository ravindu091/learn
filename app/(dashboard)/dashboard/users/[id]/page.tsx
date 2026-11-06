import { log } from 'console'
import React from 'react'

type ParamProps = {
    id:string
}

const page = async ({params}:{params:Promise<ParamProps>}) => {
  throw new Error("I donn't know");
  const {id} = await params;
  return (
    <div> id is: {id}</div>
  )
}

export default page
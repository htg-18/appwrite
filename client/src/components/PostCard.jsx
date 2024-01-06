import React from 'react'
import Service from '../appwrite/config'

import { Link } from 'react-router-dom'

const PostCard = ({
   $id,
   title,
   featuredImage
}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full justify-center mb-4'>
                <img src={Service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >
            {title}
            </h2>
    </Link>
  )
}

export default PostCard
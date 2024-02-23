import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({ page,CurrentUser,videoList }) {
  console.log(videoList)
  return (
    <>
     { CurrentUser ?(<>
     {
            //   videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map(m=>{
            //     return(
            //         <>
            //         <ShowVideoList key={m?._id} videoId={m?.videoId}/>
            //         </>
    
            //     )
            // })
            videoList?.data?.filter(q => q?.Viewer === CurrentUser).reverse().map(m => (
              <ShowVideoList key={m?._id} videoId={m?.videoId} />
            ))
     }
      </>) :(<> 
      <h2 style={{color:"white"}}>Plz Login To Watch Your {page} </h2>
      </>)

     }
    </>
  )
}

export default WHLVideoList
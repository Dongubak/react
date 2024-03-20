import React from "react";

function Sample({ loadingPost, loadingUsers, post, users, onClick}) {
   return(
      <div>
         <button onClick={onClick}>fdfd</button>
         <section>
            <h1>post</h1>
            {
               loadingPost && 'loading...'
            }
            {
               !loadingPost && post && (
                  <div>
                     <h3>{post.title}</h3>
                     <h3>{post.body}</h3>
                  </div>
               )
            }
         </section>
            
         <section>
            <h1>users</h1>
            {
               loadingUsers && 'loading...'
            }
            {
               !loadingUsers && users && (
                  <ul>
                     {
                        users.map(user => (
                           <li key={user.id}>
                              {user.username} ({user.email})
                           </li>
                        ))
                     }
                  </ul>
               )
            }
         </section>
      </div>
   )
}

export default Sample;
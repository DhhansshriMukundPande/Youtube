import React from 'react'
import Comment from './Comment.js'

const CommentsContainer= () => {

  const commentsData =[
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        replies:[
          {
           name:"akshay",
           text:"lorem ipsum dolor sit amet,abc dfed",
           }
         ]
      }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        replies:[
          {
           name:"akshay",
           text:"lorem ipsum dolor sit amet,abc dfed",
           }
         ]
        }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        replies:[
          {
           name:"akshay",
           text:"lorem ipsum dolor sit amet,abc dfed",
           }
         ]
        }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        replies:[
          {
           name:"akshay",
           text:"lorem ipsum dolor sit amet,abc dfed",
           replies:[
            {
             name:"akshay",
             text:"lorem ipsum dolor sit amet,abc dfed",
             }
           ]
           }
         ]
        }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        }
      ]
    },
    {
      name:"akshay",
      text:"lorem ipsum dolor sit amet,abc dfed",
      replies:[
       {
        name:"akshay",
        text:"lorem ipsum dolor sit amet,abc dfed",
        }
      ]
    }

  ]

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        
        {/* Render replies only if they exist */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-4 border-l border-gray-300 pl-4">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };
  



  return (
    <div className=''>
     <h1 className='text-2xl font-bold'> Comments:</h1>
      <CommentsList comments ={commentsData}/>
      </div>
  )
}

export default CommentsContainer
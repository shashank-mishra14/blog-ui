import "./post.css"
export default function Post() {
  return (
    <><div className="post">
      <img className="postImage"
        src="https://indiatribune.com/wp-content/uploads/2019/02/study-room.jpg"
        alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          <hr />
        </div>
        <span className="postTitle">
            Boost your conversion rate
        </span>
        <span className="postDate">31st March</span>
      </div>
      <p className="postDesc">
        
      </p>
    </div><div className="post1">
        <img className="postImage"
          src="https://th.bing.com/th/id/OIP.u-gmU-QAEchWrfa42DhNJQHaE7?pid=ImgDet&rs=1"
          alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            <hr />
          </div>
          <span className="postTitle">
            How to use search engine optimisation to drive sales
          </span>
          <span className="postDate">31st March</span>
        </div>
        <p className="postDesc">
          
        </p>
      </div>
      <div className="post2">
        <img className="postImage"
          src="https://i.pinimg.com/originals/8c/15/a6/8c15a60af544eb90b75fd2cd0417500f.jpg"
          alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            <hr />
          </div>
          <span className="postTitle">
           Improve your customer experience
          </span>
          <span className="postDate">31st March</span>
        </div>
        <p className="postDesc">
          
        </p>
      </div>
      </>
  )
}

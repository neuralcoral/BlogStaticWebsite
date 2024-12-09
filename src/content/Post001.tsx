import React from "react"
import "./Post.css"

export interface Post001Props {}

const Post001: React.FC<Post001Props> = () => {
    return <>
        <div className="post-header">
            <div className="post-title">My First Post</div>
            <div className="post-date">December 8th, 2024</div>
        </div>
        <br />
        <div className="post-content">
            Okay, here we go! The last few months I've been working on making this first post,
            but I let the perfect become the enemy of the good.
            <br/>
            <br/>
            What I mean to say is that I spent several months doing my due diligence.
            I started
        </div>
    </>
}

export default Post001
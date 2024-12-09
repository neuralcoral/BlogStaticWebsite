import React from "react"
import "./Post.css"
import shackles_free from '../resources/post000/shackles_free.jpg'

export interface Post000Props {}

const Post000: React.FC<Post000Props> = () => {
    return <>
        <div className="post-header">
            <div className="post-title">My (Very Late) First Post</div>
            <div className="post-date">December 8th, 2024</div>
        </div>
        <br />
        <div className="post-content">
            <i>Deep breath</i>—okay, here we go! The last few months, I’ve been working to get started
            on this first post, but I’ve learned an important lesson along the way: <em>don’t let the perfect be the
            enemy of the good</em>.

            <i>deep breath</i> Okay, here we go! The last few months I've been working on making this first post,
            but I let the perfect become the enemy of the good.
            <br/>
            <br/>
            What I mean to say is that I spent several months doing my due diligence.
            I started with a <a href="https://github.com/neuralcoral/BlogWebsite">dynamic version of this website</a>.
            My initial intent was to create a web app that wasn't just a blog filled with musings and progress on my
            projects, but with some lifecycle management of the posts. In essence, I was building the
            <a href="https://en.wikipedia.org/wiki/User_interface">User Interface (UI)</a> for
            a <a href="https://en.wikipedia.org/wiki/Content_management_system">Content Management System (CMS)</a>.
            <br/>
            <br/>
            <b><i>This was overkill.</i></b>
            <br/>
            <br/>
            Don't get it twisted, as of the time of this post I am still working on the dynamic iteration of this blog
            and I plan to continue working on it. That being said, we can't let the perfect be the enemy of the good.
            <br/>
            <br/>
            For months, whenever I wasn't working on my nine-to-five (or more like eight-to-eight), I was working on
            the initial backend. It was fun really learning some frontend through React, it was fun to learn a new
            language
            with some <a href="">Golang</a>, however I was aiming with perfection with this project. Each time I added a
            new class to perform some CRUD I felt my soul dying a bit.
            <br/>
            <br/>
            <img
                className="post-gif"
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzg0bWN4M3J6ODRrd3Z1aHpzdDhoY29qbHBiaTZ6OGF2YW9rN2M1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mBF2V0JGqnOyk/giphy.gif"
                alt="pain"
            />
            <br/>
            Sure, I learned some new things, but I felt like I was stuck in quicksand. My wheels were spinning and I
            wasn't getting any satisfaction of seeing real progress. Going through the same boilerplate as my day to day
            job maybe question if it was worth it for this current project. I was burning out from my own pet project.
            <br/>
            <br/>
            <h3>What now?</h3>
            <br/>
            Well, here we are! I'm writing this post. I'm rambling, but I'm finding it fulfilling.
            <br/>
            <br/>
            <img
                className="post-gif"
                src={shackles_free}
                alt="freedom"
            />
            <br/>
            More importantly, I learned an important lesson: "don't let the perfect be the enemy of the good". I definitely have
            internalized this lesson. I am not restricted from working on "perfect" implementation, but I can now work
            on what I really want to do without feeling burdened by first creating the perfect blog website.

            Whenever I'm in the mood to work on some CRUD or this blog starts bottleneck in someway, I can
            come back and iterate with a better solution. While in the meantime I can go ahead and work on the <i>fun stuff</i>.


        </div>
        <div className="post-glossary">

        </div>
    </>
}

export default Post000
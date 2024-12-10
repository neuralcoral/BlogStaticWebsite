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
            <br/>
            <br/>
            For months, when I wasn't working my nine-to-five (or more like eight-to-eight), I was buried in code that
            was beginning to feel like a chore. My original intent was to have blog that I could share the lessons I
            learned, books I've read, or to document any fun experiments and progress on my personal and professional
            projects. I spent four months working on and off on trying to perfect
            a <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD app</a> I was getting no
            where
            and I was loathing working on the project.
            <br/>
            <br/>
            <img
                className="post-gif"
                alt="everything changes"
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjh3Y2tqbWNqY3VqMnYxZWxkbjBvaWNxZXZwZzd0ajQ3bnAxZ2NqdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/bV0GrKBtMJVKe1jFS2/giphy.gif"
            />
            <br/>
            It might sound pretty obvious, but early on, don't aim for perfection. Firstly, there will be several things
            you don't know early on. I was--and still am--learning frontend and
            <a href="https://en.wikipedia.org/wiki/React_(software)">React</a> when I started the
            <a href="https://github.com/neuralcoral/BlogWebsite">dynamic version of this website</a>. Add on some
            lessons
            in <a href="https://en.wikipedia.org/wiki/Go_(programming_language)">Go</a> for the
            <a href="https://github.com/neuralcoral/BlogService">backend</a> and I had a very different vision of what
            I wanted by the time I got here. Requirements, even your own requirements, will be constantly evolving.
            <br/>
            <br/>
            <img
                className="post-gif"
                alt="analysis paralysis"
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWV0cGpyNG1weWMyMHJsa3B2ODZhcnk0cW0xbmRieGJhMDFkempkdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qw4X3FMPf0xxtLjwcnK/giphy.gif"
            />
            <br/>
            If you aim for perfection, you may get stuck in "analysis paralysis". I wasted the rare hours I had worrying
            and researching questions like: <i>how should I structure my packages?</i>; <i>do I use a testing framework
            for Go
            or not?</i>; or <i>how do I implement the service to use markdown AND have functioning Javascript?</i>.
            Not only did I waste my time doing this, I was being overwhelmed by the amount of opinions everyone had on
            EVERYTHING*. And, tying back to my previous point, by the time I got to this iteration of the website I
            threw out all those decisions. The last one was just resolved by directly writing everything Javascript.
            like I'm doing now. So everything changes, don't get hung up on how to do it perfect and focus on making
            the best and simplest viable product.
            <br/>
            <br/>
            <img className="post-gif"
                 alt="learning and some more learning"
                 src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGw2MmhjN3dheTdkeDBlZGV0ZnBxMHQ0ZXB2dzU0YXl5ZW5rZDB1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifhln1wZJ7lTbyw/giphy.gif"
            />
            <br/>
            All that being said, there was some good. Over those four months I learned enough React to be dangerous and
            to get this static iteration out. Not only did I have a ton of fun learning Go, but it has given me a new
            perspective on how to structure and write code. My initial intent may have been to create a
            perfect <a href="https://en.wikipedia.org/wiki/Content_management_system">Content Management
            System (CMS)</a> with a mind-melting <a href="https://en.wikipedia.org/wiki/User_interface">User
            Interface (UI)</a>, but I was able to get result with just this simple site.
            <br/>
            <br/>
            <img
                className="post-gif"
                src={shackles_free}
                alt="freedom"
            />
            <br/>
            Don't get it twisted, as of the time of this post I am still planning to continue working on the dynamic
            iteration of this blog, but I can now take a break from CRUD and focus on somethings I would rather focus
            on.
            <br/>
            <br/>
        </div>
        <div className="post-footnotes">
            * As a second lesson, I also learned that every software engineer has an opinion on what's right, but my
            opinion is the rightest 😉
        </div>
        <div className="post-glossary">

        </div>
    </>
}

export default Post000
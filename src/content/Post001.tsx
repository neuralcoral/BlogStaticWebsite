import React from "react"
import "./Post.css"

export interface Post001Props {}

const Post001: React.FC<Post001Props> = () => {
    return <>
        <div className="post-header">
            <div className="post-title">RISC-V Emulation</div>
            <div className="post-data">February 15th, 2026</div>
        </div>
        <br />
        <div className="post-content">
            This is post is the start of documenting my journey of creating
            a <a href="https://en.wikipedia.org/wiki/RISC-V">RISC-V</a> emulator.
            <br />
            <br />
            <h1>What is RISC-V?</h1>
            Wikipedia defines RISC-V as
            <div>
                <blockquote>
                    [A] free and open standard instruction set architecture (ISA) based on reduced instruction set
                    computer (RISC) principles.
                </blockquote>
            </div>
            There's a bit to unpack so let's break down the different parts.
            <h2><q>free and open standard</q></h2>
            Free and open here means that RISC-V is publicly available and usable by anyone for any reason. This includes
            both private and public use cases. If you're curious, you can even read more about it on
            RISC-V's <a href="https://riscv.org/about/faq/">FAQ</a>.
            <h2><q>ISA</q></h2>
            Things heat up quickly in RISC-V's definition by diving straight into the term <em>instruction set architecture</em> (ISA).
            I want to avoid getting to technical for any audience that might be brand new to these concepts, but I fear that
            I do need to setup some context. I promise to be gentle.
            <h3>Talking the Machine's Language</h3>
            In order to run programs we need to send instructions to the computer's workhorse, the <em>Central
            Processing Unit (CPU)</em>. Unfortunately, CPUs do not understand words like "add 4 and 5" or "does this
            number equal that number?". Instead we need to use a language the machine understands, a <em>machine
            language</em> if you will.
            <br/>
            Machine language is written with binary, the 1s and 0s commonly associated with computers. A developer
            hoping to get their computer to do some work needs to construct a meaningful "sentence" the CPU can
            "understand".
            <br/>
            For example, lets say you were a developer trying to get their RISC-V CPU to spit out of the answer of
            5 + 8*. We can then write:
            <br/>
            <br/>
            <code>
                000100000001000000010010011
            </code>
            <br/>
            <i>* Note: as you will see, this is a bit of a twist of the truth, but for the most part this is the binary
            necessary for executing the presented addition.</i>
            <br/>

            What is important in the above binary is that this instruction is specific to the RISC-V ISA. If we had a
            a different ISA, like ARM or x86 then it would completely fail or execute something very different.



            {/*<h3>A bit of a history lesson...</h3>*/}
            {/*Computers have evolved <i>a lot</i> over the last century. The first commercial computers would take up*/}
            {/*whole rooms. Over time these machines got smaller and smaller thanks to technological advances. These*/}
            {/*advancements coalesced into the computer sitting on your desk, on your lap, or even in your hand as you read*/}
            {/*this on your morning commute.*/}
            {/*<br/>*/}
            {/*A lot of the technological developments, like the invention of the transistor, are a story for another time.*/}
            {/*For the ISA discussion, I want to hone in on the transition of how developers communicated with computers.*/}
            {/*The earliest developers wrote programs using <a href="https://en.wikipedia.org/wiki/Punched_card">punched*/}
            {/*cards</a>. These were literal paper cards, similar to an index or post card, that were hole-punched to with*/}
            {/*code. As an aside, if you ever were curious, punched cards are the reason why it is recommended to use 80*/}
            {/*characters per row; the standard IBM punched card supported 80 columns per card.*/}
            {/*<br/>*/}
            {/*As you can imagine, working with punched cards can get really tricky. It was basically a way of writing*/}
            {/*<br/>*/}



        </div>
    </>;
}

export default Post001
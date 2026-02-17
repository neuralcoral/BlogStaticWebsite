import React from "react";
import "../Post.css";
import ReactMarkdown from "react-markdown";
import {AssemblerTransition} from "./decoder";

export interface Post001Props {}

const markdownContent = `
# What is RISC-V?

Wikipedia defines RISC-V as

> [A] free and open standard instruction set architecture (ISA) based on reduced instruction set computer (RISC) principles.

There's a bit to unpack so let's break down the different parts.

## "free and open standard"
Free and open here means that RISC-V is publicly available and usable by anyone for any reason. This includes both private and public use cases. If you're curious, you can even read more about it on RISC-V's [FAQ](https://riscv.org/about/faq/).

## "ISA"
Things heat up quickly in RISC-V's definition by diving straight into the term *instruction set architecture* (ISA). I want to avoid getting to technical for any audience that might be brand new to these concepts, but I fear that I do need to setup some context. I promise to be gentle.

### Talking the Machine's Language
In order to run programs we need to send instructions to the computer's workhorse, the *Central Processing Unit (CPU)*. Unfortunately, CPUs do not understand words like "add 4 and 5" or "does this number equal that number?". Instead we need to use a language the machine understands, a *machine language* if you will.

Machine language is written with binary, the 1s and 0s commonly associated with computers. A developer hoping to get their computer to do some work needs to construct a meaningful "sentence" the CPU can "understand".

For example, lets say you were a developer trying to get their RISC-V CPU to spit out of the answer of 5 + 8\*. We can then write:

\`000100000001000000010010011\`

* \*Note: as you will see, this is a bit of a twist of the truth, but for the most part this is the binary necessary for executing the presented addition. *

What is important in the above binary is that this instruction is specific to the RISC-V ISA. If we had a a different ISA, like ARM or x86 then it would completely fail or execute something very different.

### Clearing up the number soup
It's easy to imagine that the above string of numbers seems impossible to translate, but this is where the we start moving into the territory of *assembly*.

Every ISA has its own assembly language. Assembly is just a way to transform binary into something easier for a human to read, we call this transformation a *decoding*. We can decode machine languages (aka the binary) into assembly language as well as *encode* assembly language into machine language.
`

const Post001: React.FC<Post001Props> = () => {
    const [binary, setBinary] = React.useState("00000000100000001000000100010011");

    return <>
        <div className="post-header">
            <div className="post-title">RISC-V Emulation</div>
            <div className="post-data">February 15th, 2026</div>
        </div>
        <div className="post-content">

            <ReactMarkdown>{markdownContent}</ReactMarkdown>
            {/* The React Flow Visualization */}
            <AssemblerTransition assembly={"addi x2, x0, 8"} binary={"00000000100000000000000100010011"}/>

        </div>

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



    </>;
}

export default Post001
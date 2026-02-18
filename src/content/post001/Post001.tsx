import React from "react";
import "../Post.css";
import ReactMarkdown from "react-markdown";
import {AssemblerTransition} from "./decoder";

export interface Post001Props {}

const markdownContent1 = `
# What is RISC-V?

Wikipedia defines RISC-V as

> [A] free and open standard instruction set architecture (ISA) based on reduced instruction set computer (RISC) principles.

There's a bit to unpack so let's break down the different parts.

## "free and open standard..."
Free and open here means that RISC-V is publicly available and usable by anyone for any reason. This includes both 
private and public use cases. If you're curious, you can even read more about it on RISC-V's 
[FAQ](https://riscv.org/about/faq/).

## "...ISA..."
Things heat up quickly in RISC-V's definition by diving straight into the term *instruction set architecture* (ISA). I 
want to avoid getting too technical for any audience that might be brand new to these concepts, but I fear that I do 
need to set up some context. I promise to be gentle.

### Talking the Machine's Language
In order to run programs we need to send instructions to the computer's workhorse, the *Central Processing Unit (CPU)*. 
Unfortunately, CPUs do not understand words like "add 4 and 5" or "does this number equal that number?". Instead we need
to use a language the machine understands, a *machine language* if you will.

Machine language is written with binary, the 1s and 0s commonly associated with computers. A developer hoping to get 
their computer to do some work needs to construct a meaningful "sentence" the CPU can "understand".

For example, lets say you were a developer trying to get their RISC-V CPU to spit out the answer of 5 + 8*. We can then 
write:

\`\`\`
00000000100000000000000100010011
\`\`\`

> *Note: as you will see, this is a bit of a twist of the truth

What is important in the above binary is that this instruction is specific to the RISC-V ISA. If we had a different ISA,
like ARM or x86 then it would completely fail or execute something very different.

### Clearing up the number soup
It's easy to imagine that the above string of numbers seems impossible to translate, but this is where we start 
moving into the territory of *assembly*.

Every ISA has its own assembly language. Assembly is just a way to transform binary into something easier for a human to 
read, we call this transformation a *decoding*. We can decode machine languages (aka the binary) into assembly language 
as well as *encode* assembly language into machine language.
`;
const markdownContent2 = `
Encoding from assembly language to binary has a special name, it is called *assembling*. The binary we saw in the earlier
example described the operation \`ADDI x2, x0, 8\`. As you see, this language is much easier to read.


RISC-V has two variations depending if you're using a 64- or 32-bit architecture; ignore what this means for now, I
promise to go over it in later sections. In order to simplify discussion and implementation, I will focus on 32-bit 
RISC-V, also known as RV32I. 

RV32I has 40 unique "instructions". This includes the \`ADDI\` instruction, which handles addition.

## "...based on reduced instruction set computer (RISC) principles"
Last and not least is getting to the topic of RISC, and oh boy is this is a much bigger topic. Admittedly, this discussion
is a bit out of the realm for this current project. However, I'll do my best to simplify it. 

There are two dominant philosophies for ISAs, complex instruction set computer (CISC) and reduced instruction set 
computer (RISC). RISC focuses on having simple, but optimized instructions. On the other hand, CISC has several, large 
specialized instructions. 

On average, the same program written in CISC has fewer instructions than in RISC. However, CISC tends to be more 
difficult to build, individual instructions can be slower, and the CPU is larger.

# Where Next?
I'll dive into what an emulator is before moving to the nitty-gritty details of RISC-V's RV32I.
`;

const Post001: React.FC<Post001Props> = () => {
    return <>
        <div className="post-header">
            <div className="post-title">RISC-V Emulation</div>
            <div className="post-data">February 15th, 2026</div>
        </div>
        <div className="post-content">

            <ReactMarkdown>{markdownContent1}</ReactMarkdown>
            {/* The React Flow Visualization */}
            <AssemblerTransition assembly={"ADDI x2, x0, 8"} binary={"00000000100000000000000100010011"}/>

            <ReactMarkdown>
                {markdownContent2}
            </ReactMarkdown>

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
import React from "react";
import "../Post.css";
import ReactMarkdown from "react-markdown";
import { Typography } from "@react-md/typography";
import Bibliography, {Reference} from "../../components/Bibliography";

export interface Post002Props {}

const markdownPart1 = `
# History: From Bombs to Games
*Emulation* is the process of having a host system imitate the behavior of a guest system. In 2026, emulation usually 
refers to having some video game console running on a personal computer, but emulation can be much more. 

The history of emulators is a little foggy, but it likely began in the mid-to-late 1950s, near January 1957, with the 
release of the IBM 709; IBM's third scientific computer and second mass produced computer. IBM began running into an 
issue. They had just crafted a new computer with a new architecture, but it could no longer run software built on an 
older hardware architecture. Thus the first commercial emulator was invented; unlike most modern emulators this was 
neither software nor was it called an emulator. Instead, this piece of hardware was just considered an optional 
"compatibility" feature which allowed 704 programs to run on 709 machines.

Emulation as software started taking off in the early 1960s during the development of the Minuteman Intercontinental 
Ballistic Missile (ICBM). Autonetics, a division of a major aerospace manufacturer, was tasked with building the 
guidance and control systems on the American ICBMs. 
`;

const markdownPart2 = `
As you might imagine, testing a giant missile might get expensive and Autonetics needed an alternative to launching a 
65,000 lb missile for every test run of their guidance system. How do you test an ICBM computer with a vastly different 
architecture than the one you have in the office? Well, the secret is in the title of this post. Autonetics validated 
the software on the Minuteman I ICBM's D-17B computer by building a "functional simulator" on the IBM 709. Autonetics 
ended up building the D-17B computer, creating the first software-based emulator, and revolutionizing computer 
engineering by pioneering modern computer architecture. 

The term "emulation" does not enter the picture until 1964. IBM had built a few more generations of computers and they 
started running into further compatibility issues. The first portable compiler* was still 16 years away and all code 
up now has been akin to writing at the assembly level. Computers were expensive, each architecture was unique, and 
selling new models of computers to someone is tough if the customer needs to re-write all their existing programs 
each time. 

To solve this problem, IBM released the IBM System/360 (S/360). With a name that reflected its goal of being for any 
use case, the S/360 was revolutionary. Not only did it consolidate all the pre-existing IBM architectures via 
specialized hardware and software it also introduced the concept of an 8-bit byte.

Today, the public is familiar with emulation through the preservation of digital media like retro video games, 
programs, or even computer malware. Additionally, emulation is still used for testing software. It might be a far cry 
from Cold War-era missiles, but the same concepts from the mid-century are used when an Android developer tests their 
code on a device emulator. 

# Why build an emulator?
Look on GitHub and you can find dozens of implementations of emulators for each computer architecture. So why would 
anyone want to build one?

Personally, I want to improve my low-level software development and to better understand the backbone of modern 
computer architecture. Building an emulator of a popular and modern computer architecture seemed like the best way to 
get my hands dirty. In order to build an emulator you need to have a deeper understanding of the underlying 
architecture. This requires coalescing documentation and notes on the target machine; reading, re-reading, and maybe 
re-reading five more times to really understand what's going on. It's also a large enough project that it requires 
good software engineering practices like thorough unit tests and a modular architecture. 

Ultimately, building an emulator is the closest a software engineer can be to modeling hardware without dipping into 
Register-Transfer Level (RTL). It might be a grueling exercise in precision and debugging. However, it can be a 
rewarding experience if you were ever curious about how modern computer architecture works or just wanted to read 
hundreds of pages of technical specifications.

---
> \\* A portable compiler is a "universal" translator that enables one computer language to run on different hardware. 
This portable compiler is the 1979 Portable C Compiler.
`;

const Post002: React.FC<Post002Props> = () => {
    const postReferences: Reference[] = [
        {
            id: 1,
            text: "C. H. Beck, '017B COMPUTER PROGRAMMING MANUAL'.",
            url: "https://www.bitsavers.org/pdf/autonetics/d17/MCUG-4-71_D17B_Computer_Programming_Manual_Sep71.pdf",
            accessDate: "Feb. 28, 2026"
        },
        {
            id: 2,
            text: "BRL Report 1961.",
            url: "https://ed-thelen.org/comp-hist/BRL61-ibm0709.html",
            accessDate: "Feb. 28, 2026"
        },
        {
            id: 3,
            text: "Minuteman Missile Guidance System.",
            url: "https://minutemanmissile.com/missileguidancesystem.html",
            accessDate: "Feb. 28, 2026"
        },
        {
            id: 4,
            text: "“The IBM System/360 | IBM.”",
            url: "https://www.ibm.com/history/system-360",
            accessDate: "Feb. 28, 2026"
        }
    ];
    return (
        <>
            <div className="post-header">
                <div className="post-title">What is Emulation?</div>
                <div className="post-data">February 28th, 2026</div>
            </div>
            <div className="post-content">
                <ReactMarkdown>{markdownPart1}</ReactMarkdown>

                <div className="post-image-wrapper">
                    <figure className="post-figure">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/38/Autonetics_D-17.JPG"
                            alt="The Autonetics D-17B computer"
                        />
                        <figcaption className="post-figcaption">
                            <Typography type="caption" style={{ color: "inherit", fontSize: "0.8rem" }}>
                                <a href="https://commons.wikimedia.org/wiki/File:Autonetics_D-17.JPG" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                    "Autonetics D-17"
                                </a>{" "}
                                by{" "}
                                <a href="https://en.wikipedia.org/wiki/User:Jnanna" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                    Jnanna
                                </a>,{" "}
                                <a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                                    CC BY-SA 3.0
                                </a>
                            </Typography>
                        </figcaption>
                    </figure>
                </div>

                <ReactMarkdown>{markdownPart2}</ReactMarkdown>
                <Bibliography references={postReferences} />
            </div>
        </>
    );
};

export default Post002;
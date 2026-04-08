import ReactMarkdown from "react-markdown";

export interface Post003Props {}

const markdown = `
# Getting Started
This post is the first in my series diving into robotics. My goal is to go through the most basic development lifecycle for a
mobile robot. This means I will start with some simulation, go into firmware implementation, move up to high level 
orchestration, and connect my little buddy to a network so I can watch all the juicy details on a dashboard.

## Simulation
Currently, I'm in the process of working on the simulation on the gait of the robot. Simulation for robotics is important as it
provides a way to test algorithms wihtout worrying about harming expensive hardware or soft humans. After, naively using
[Matplotlib](https://matplotlib.org/) and struggling to setup [PyBullet](https://pybullet.org/) I ended up on ROS's own 
[Gazebo](https://gazebosim.org/docs/latest/getstarted/).

My goal in the simulation is replicate every physical component and degrees of freedoms my mobile robot has. A *mobile robot* is
just a robot that is not stationary and can move freely in its enviroment. Some robots are startionary arms, or manipulators, 
that have a fixed space it can interact with, not my baby.

In reality, I can test my firmware and higher level software directly on my relatively inexpensive and small robot, however in
order to get some experience of what a true production project would require I decided to start of with some simluations.

`
const Post003: React.FC<Post003Props> = () => {
  return (
    <>
    <div className="post-header">
      <div className="post-tile"> Starting on Robotics</div>
      <div className="post-data">March 22nd, 2026</div>
    </div>
    <div className="post-content">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
    </>
  );
}

export default Post003;
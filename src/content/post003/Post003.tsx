export interface Post003Props {}

const markdown = `
# Getting Started



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
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faThumbsUp, 
  faComment, 
  faShare,
  faChevronRight,
  faEllipsisH 
} from '@fortawesome/free-solid-svg-icons';

const PostContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  position: relative;
  
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 12px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .verified {
    color: var(--accent-color);
    font-size: 12px;
    margin-left: 4px;
  }
  
  .menu {
    position: absolute;
    right: 16px;
    color: #888;
    cursor: pointer;
    
    &:hover {
      color: var(--text-color);
    }
  }
`;

const PostInfo = styled.div`
  .username {
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  
  .timestamp {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
  }
`;

const PostContent = styled.div`
  padding: 0 16px 16px;
  
  .title {
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 16px;
  }
  
  .description {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
    color: #ddd;
  }
`;

const CodeBlock = styled.div`
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  
  .code-header {
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-color);
    font-family: monospace;
    font-size: 12px;
    color: #888;
  }
  
  pre {
    padding: 12px;
    overflow-x: auto;
    font-family: 'Fira Code', 'SF Mono', Consolas, Monaco, 'Andale Mono', monospace;
    font-size: 13px;
    line-height: 1.5;
    color: #ddd;
  }
  
  code {
    .type-keyword {
      color: #ff79c6;
    }
    
    .keyword {
      color: #f97316;
    }
    
    .variable {
      color: #8be9fd;
    }
    
    .function {
      color: #50fa7b;
    }
    
    .string {
      color: #f1fa8c;
    }
    
    .punctuation {
      color: #ffffff;
    }
    
    .comment {
      color: #6272a4;
    }
  }
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  border-top: 1px solid var(--border-color);
  color: #888;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: var(--hover-color);
    color: var(--text-color);
  }
  
  .icon {
    margin-left: 8px;
    font-size: 12px;
  }
`;

const PostFooter = styled.div`
  display: flex;
  padding: 8px 16px;
  border-top: 1px solid var(--border-color);
  
  .action {
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: #888;
    font-size: 14px;
    cursor: pointer;
    
    &:hover {
      color: var(--accent-color);
    }
    
    .icon {
      margin-right: 6px;
    }
    
    &.liked {
      color: var(--accent-color);
    }
  }
`;

const LanguageTag = styled.div`
  margin-top: 16px;
  padding: 4px 8px;
  background-color: #2a2a2a;
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  color: #888;
`;

const Post: React.FC = () => {
  return (
    <PostContainer>
      <PostHeader>
        <div className="avatar">
          <img src="https://via.placeholder.com/36" alt="User avatar" />
        </div>
        <PostInfo>
          <div className="username">
            imho0905 <span className="verified">✓</span>
          </div>
          <div className="timestamp">3 minutes ago</div>
        </PostInfo>
        <div className="menu">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </PostHeader>
      
      <PostContent>
        <div className="title">TypeScript useful advanced types</div>
        <div className="description">
          A bit late maybe, here are all the useful types that I'm using every day or create new types
          on top of them. I thought it might be handy for some people so I just share here and this
          will be updated moving forward.
        </div>
        
        <CodeBlock>
          <div className="code-header">Loop through an index array type</div>
          <pre>
            <code>
              <span className="type-keyword">type</span> <span className="function">ReduceItem</span>&lt;<span className="variable">A</span> <span className="keyword">extends</span> <span className="function">ReadonlyArray</span>&lt;<span className="variable">any</span>&gt;, <span className="variable">Result</span> <span className="keyword">extends</span> <span className="variable">any</span>&gt; = {'{'}
  [<span className="variable">I</span> <span className="keyword">in</span> <span className="variable">keyof A</span>]: <span className="variable">A</span>[<span className="variable">I</span>] <span className="keyword">extends</span> (<span className="variable">infer R</span>) 
    ? <span className="variable">I</span> <span className="keyword">extends</span> (<span className="variable">infer T</span>)
      ? <span className="variable">ReadonlyArray</span>&lt;<span className="variable">Item</span>&gt;
      : <span className="variable">never</span>
    : <span className="variable">never</span>
{'}'} <span className="keyword">extends</span> {'{'}[<span className="variable">P</span> <span className="keyword">in</span> <span className="variable">keyof A</span>]: <span className="variable">infer O</span>{'}'}
  ? {'{'}[<span className="variable">P</span> <span className="keyword">in</span> <span className="variable">keyof O</span>]: <span className="variable">O</span>[<span className="variable">P</span>]{'}'}
  : <span className="variable">never</span>;
            </code>
          </pre>
        </CodeBlock>
        
        <LanguageTag>#typescript</LanguageTag>
      </PostContent>
      
      <ReadMore>
        Read All <FontAwesomeIcon icon={faChevronRight} className="icon" />
      </ReadMore>
      
      <PostFooter>
        <div className="action liked">
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <span>204</span>
        </div>
        <div className="action">
          <FontAwesomeIcon icon={faComment} className="icon" />
          <span>14</span>
        </div>
        <div className="action">
          <FontAwesomeIcon icon={faShare} className="icon" />
          <span>46</span>
        </div>
      </PostFooter>
    </PostContainer>
  );
};

export default Post;

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart, faComment, faStar, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-color);
`;

const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NotificationItem = styled.div<{ unread?: boolean }>`
  background-color: ${props => props.unread ? 'rgba(249, 115, 22, 0.1)' : 'var(--secondary-color)'};
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;
  
  &:hover {
    background-color: var(--hover-color);
  }
  
  ${props => props.unread && `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--accent-color);
    }
  `}
`;

const IconContainer = styled.div<{ type: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  ${props => {
    switch(props.type) {
      case 'like':
        return 'background-color: rgba(255, 86, 86, 0.1); color: #ff5656;';
      case 'comment':
        return 'background-color: rgba(64, 196, 255, 0.1); color: #40c4ff;';
      case 'follow':
        return 'background-color: rgba(121, 80, 242, 0.1); color: #7950f2;';
      case 'mention':
        return 'background-color: rgba(255, 193, 7, 0.1); color: #ffc107;';
      default:
        return 'background-color: rgba(249, 115, 22, 0.1); color: var(--accent-color);';
    }
  }}
  
  svg {
    font-size: 16px;
  }
`;

const NotificationContent = styled.div`
  flex: 1;
  
  .title {
    font-size: 14px;
    margin-bottom: 3px;
    
    strong {
      font-weight: 600;
    }
  }
  
  .meta {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #888;
    
    svg {
      margin-right: 5px;
      font-size: 12px;
    }
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
  }
`;

const FilterTabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.div<{ active?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.active ? 'var(--accent-color)' : '#aaa'};
  border-bottom: ${props => props.active ? '2px solid var(--accent-color)' : 'none'};
  
  &:hover {
    color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-color)'};
  }
`;

const NotificationsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'like',
      title: <><strong>Maria S.</strong> liked your project "Portfolio Website"</>,
      time: '5 minutes ago',
      unread: true,
      filter: 'likes'
    },
    {
      id: 2,
      type: 'comment',
      title: <><strong>Alex T.</strong> commented on your post about TypeScript</>,
      time: '2 hours ago',
      unread: true,
      filter: 'comments'
    },
    {
      id: 3,
      type: 'follow',
      title: <><strong>John D.</strong> started following you</>,
      time: '1 day ago',
      unread: false,
      filter: 'follows'
    },
    {
      id: 4,
      type: 'mention',
      title: <><strong>Sarah M.</strong> mentioned you in a comment</>,
      time: '2 days ago',
      unread: false,
      filter: 'mentions'
    },
    {
      id: 5,
      type: 'comment',
      title: <><strong>Mike P.</strong> replied to your comment</>,
      time: '3 days ago',
      unread: false,
      filter: 'comments'
    }
  ];
  
  const filteredNotifications = activeFilter === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.filter === activeFilter);

  return (
    <PageContainer>
      <PageTitle>Benachrichtigungen</PageTitle>
      
      <FilterTabs>
        <Tab 
          active={activeFilter === 'all'} 
          onClick={() => setActiveFilter('all')}
        >
          Alle
        </Tab>
        <Tab 
          active={activeFilter === 'likes'} 
          onClick={() => setActiveFilter('likes')}
        >
          Likes
        </Tab>
        <Tab 
          active={activeFilter === 'comments'} 
          onClick={() => setActiveFilter('comments')}
        >
          Kommentare
        </Tab>
        <Tab 
          active={activeFilter === 'follows'} 
          onClick={() => setActiveFilter('follows')}
        >
          Follower
        </Tab>
      </FilterTabs>
      
      <NotificationsList>
        {filteredNotifications.map(notification => (
          <NotificationItem key={notification.id} unread={notification.unread}>
            <IconContainer type={notification.type}>
              {notification.type === 'like' && <FontAwesomeIcon icon={faHeart} />}
              {notification.type === 'comment' && <FontAwesomeIcon icon={faComment} />}
              {notification.type === 'follow' && <FontAwesomeIcon icon={faUserPlus} />}
              {notification.type === 'mention' && <FontAwesomeIcon icon={faStar} />}
            </IconContainer>
            <NotificationContent>
              <div className="title">{notification.title}</div>
              <div className="meta">
                <FontAwesomeIcon icon={faClock} />
                <span>{notification.time}</span>
              </div>
            </NotificationContent>
            {notification.type === 'follow' && (
              <ActionButton>Folgen</ActionButton>
            )}
          </NotificationItem>
        ))}
      </NotificationsList>
    </PageContainer>
  );
};

export default NotificationsPage;

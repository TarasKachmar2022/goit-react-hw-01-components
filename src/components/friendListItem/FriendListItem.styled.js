import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.08),
    1px 3px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  padding: 5px;
  max-width: 288px;
`;

export const FriendStatus = styled.span`
  background-color: ${p => {
    return p.active ? p.theme.colors.green : p.theme.colors.red;
  }};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const FriendImage = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
`;

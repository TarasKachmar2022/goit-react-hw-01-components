import styled from 'styled-components';

export const ProfileCard = styled.div`
  max-width: 288px;
  border-radius: 5px;
  color: ${p => p.theme.colors.grey};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 2px 2px rgba(0, 0, 0, 0.06),
    0px 2px 3px rgba(0, 0, 0, 0.06);
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const ProfileInfo = styled.div`
  text-align: center;
`;

export const Profileimage = styled.img`
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.black};
  margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
  font-size: 16px;
  color: ${p => p.theme.colors.grey};
  margin-bottom: 10px;
`;

export const ProfileLocation = styled.p`
  font-size: 16px;
  margin-bottom: 25px;
`;

export const ProfileList = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 12px;
  list-style: none;
  background-color: ${p => p.theme.colors.lightGrey};
  padding-inline-start: 0px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25px;
  border-radius: 5px;
`;

export const ProfileInfoName = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
  text-align: center;
`;

export const ProfileInfoValue = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${p => p.theme.colors.black};
  text-align: center;
`;

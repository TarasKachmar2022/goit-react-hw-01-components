import PropTypes from 'prop-types';
import {
  ProfileInfo,
  Profileimage,
  ProfileName,
  ProfileCard,
  ProfileTag,
  ProfileLocation,
  ProfileList,
  ProfileItem,
  ProfileInfoName,
  ProfileInfoValue,
} from './Profile.styled';

export function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <ProfileInfo>
        <Profileimage src={avatar} alt="User avatar" width="150" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>

      <ProfileList>
        <ProfileItem>
          <ProfileInfoName>Followers</ProfileInfoName>
          <ProfileInfoValue>{followers}</ProfileInfoValue>
        </ProfileItem>
        <ProfileItem>
          <ProfileInfoName>Views</ProfileInfoName>
          <ProfileInfoValue>{views}</ProfileInfoValue>
        </ProfileItem>
        <ProfileItem>
          <ProfileInfoName>Likes</ProfileInfoName>
          <ProfileInfoValue>{likes}</ProfileInfoValue>
        </ProfileItem>
      </ProfileList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

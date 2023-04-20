import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendImage,
  FriendName,
} from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus active={isOnline}>{isOnline}</FriendStatus>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

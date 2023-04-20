import { Profile } from '../profile/Profile';
import { Statistics } from '../statistics/Statistics';
import { FriendList } from '../friendList/FriendList';
import { Transactions } from '../transactions/TransactionHistory';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../layout/Layout';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};

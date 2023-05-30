import UserCard from "./UserCard";

import userData from "../../data/users.json";

import styles from "./UserCard.module.scss";

const UserCards = () => {
  return (
    <>
      <div className={styles.container}>
        {userData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserCards;

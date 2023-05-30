import { formatAddress, formatPhoneNumber, formatDateTime } from "../../utils";

import styles from "./UserCard.module.scss";

const UserDetailField = ({ heading, body }) => (
  <div className={styles.detail}>
    <h4>{heading}</h4>
    <p>{body}</p>
  </div>
);

const UserExpandedInfo = ({ user }) => {
  const address = formatAddress(user.street, user.city, user.state, user.zip);
  const phone = formatPhoneNumber(user.phone);
  const createdAt = formatDateTime(user.createdAt);
  const lastLoggedIn = formatDateTime(user.lastLoggedIn);

  return (
    <>
      <div className={styles.expandedInfo}>
        <UserDetailField heading="Address" body={address} />
        <UserDetailField heading="Phone" body={phone} />
        <UserDetailField heading="Created At" body={createdAt} />
        <UserDetailField heading="Last Logged In" body={lastLoggedIn} />
      </div>
    </>
  );
};

export default UserExpandedInfo;

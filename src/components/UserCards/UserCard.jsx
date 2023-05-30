import { useState } from "react";

import UserExpandedInfo from "./UserExpandedInfo";
import { UserIcon, ExpandMoreIcon, ExpandLessIcon } from "../Icons";

import { getUserIconColor } from "../../utils";

import styles from "./UserCard.module.scss";

const UserCard = ({ user }) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <>
      <div
        className={styles.card}
        style={{ height: !isExpanded ? "40px" : "230px" }}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className={styles.collapsed}>
          <div className={styles.left}>
            <UserIcon size="50px" fillColor={getUserIconColor(user.role)} />

            <div className={styles.details}>
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
              <p className={styles.role}>{user.role}</p>
              <p className={styles.email}>{user.email}</p>
            </div>
          </div>

          <div className={styles.right}>
            {!isExpanded ? (
              <ExpandMoreIcon fillColor={"#7E7E7E"} />
            ) : (
              <ExpandLessIcon fillColor={"#7E7E7E"} />
            )}
          </div>
        </div>

        {isExpanded && <UserExpandedInfo user={user} />}
      </div>
    </>
  );
};

export default UserCard;

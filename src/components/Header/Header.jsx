import { GroupIcon } from "../Icons";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <GroupIcon fillColor={"#2081C3"} />
        <h1>USERS</h1>
      </div>
    </>
  );
};

export default Header;

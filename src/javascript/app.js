import "../style/index.scss";
import { getUser, getEducation } from "./request";
import setUserInfo from "./setUserInfo";
import setEducation from "./setEducation";

const user = () => getUser("1");
const education = () => getEducation("1");

setUserInfo(user());
setEducation(education());

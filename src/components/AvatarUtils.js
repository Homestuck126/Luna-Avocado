// AvatarUtils.js

import thincat1 from "../assets/Cats/thincat1.jpg";
import thincat2 from "../assets/Cats/thincat2.jpg";
import thincat3 from "../assets/Cats/thincat3.jpg";
import thincat4 from "../assets/Cats/thincat4.jpg";
import fatcat1 from "../assets/Cats/fatcat1.jpg";
import fatcat2 from "../assets/Cats/fatcat2.jpg";
import fatcat3 from "../assets/Cats/fatcat3.jpg";
import fatcat4 from "../assets/Cats/fatcat4.jpg";

const generateAvatar = (user) => {
  const avatarImages = [thincat1, thincat2, thincat3, thincat4];
  const fatCatImages = [fatcat1, fatcat2, fatcat3, fatcat4];
  const isFatCat = user.macros > 50;

  const randomIndex = 1; //Math.floor(Math.random() * 4);
  //console.log("Avatar Images:", avatarImages);
  //console.log("Fat Cat Images:", fatCatImages);

  return {
    id: user.id,
    name: user.name,
    bio: user.bio || "Default Bio",
    avatar: isFatCat ? fatCatImages[randomIndex] : avatarImages[randomIndex],
  };
};

export { generateAvatar };

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
  const proteinGoal = user.protein >= user.proteinGoal;
  const fatGoal = (user.fat >= user.fatGoal)? 1:0;
  const carbGoal = (user.carbohydrate >= user.carbGoal) ? 1:0;
  const calorieGoal = (user.calories >= user.calorieGoal)? 1:0;
  const totalGoal = proteinGoal + fatGoal + carbGoal + calorieGoal;
  var _avatar = fatcat1;
  if (totalGoal ==3 ) {  
    _avatar = fatcat3;
  }
  else if (totalGoal ==2 ) {
    _avatar = fatcat2;
  }
  else if (totalGoal ==2 ) {
    _avatar = fatcat2;
  }
  else if (totalGoal ==1 ) {
    _avatar = thincat2;
  }
  else if (totalGoal ==0 ) {
    _avatar = thincat1;
  }
  const isFatCat = user.calories + user.protein + user.fat + user.carbohydrate > 50;
  console.log(user);
 

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

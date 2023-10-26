import React, { useEffect, useState } from "react";

import {
  SocialMediaSection,
  Social,
  Icon,
  SocialBody,
  Info1,
  Info2,
} from "./style.js";
import axios from "axios";

function SocialMedia() {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);

  const socialList = social.map((socialItem) => {
    return (
      <Social $item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.icon}></Icon>
        <SocialBody>
          <Info1>{socialItem.title}</Info1>
          <Info2>{socialItem.body}</Info2>
        </SocialBody>
      </Social>
    );
  });

  return <SocialMediaSection>{socialList}</SocialMediaSection>;
}
export default SocialMedia;

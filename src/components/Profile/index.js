import React, { useEffect, useState } from "react";
import {
  ProfileSkills,
  ProfileSection,
  ProfileList,
  ProfileListItem,
  ProfileListItemSpan,
  Skills,
  SkillsDesc,
  Bar,
  BarTitle,
  Perc,
  BarParent,
  BarParentSpan,
  ProfileTitle,
  SkillsTitle,
  ProfileTitleSpan,
  SkillsTitleSpan,
} from "./style.js";
import Container from "../styles/Container.styled.js";
import axios from "axios";

function Profile() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => setSkills(res.data.skills));
  }, []);

  const skillsBars = skills.map((skill) => {
    return (
      <Bar key={skill.id}>
        <BarTitle>{skill.name}</BarTitle>
        <Perc>{skill.percentage}</Perc>
        <BarParent>
          <BarParentSpan $perc={skill.percentage}></BarParentSpan>
        </BarParent>
      </Bar>
    );
  });

  return (
    <ProfileSkills>
      <Container>
        <ProfileSection>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileListItem>
              <ProfileListItemSpan>Name</ProfileListItemSpan>
              Hamza Nabil
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListItemSpan>Birthday</ProfileListItemSpan>
              21/1/1996
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListItemSpan>Address</ProfileListItemSpan>
              Ain shams
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListItemSpan>Phone</ProfileListItemSpan>
              4444 5555 6666
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListItemSpan>Email</ProfileListItemSpan>
              hamza@hamza.com
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListItemSpan>Website</ProfileListItemSpan>
              <ProfileListItemSpan $web>www.google.com</ProfileListItemSpan>
            </ProfileListItem>
          </ProfileList>
        </ProfileSection>

        <Skills>
          <SkillsTitle>
            Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {skillsBars}
        </Skills>
      </Container>
    </ProfileSkills>
  );
}
export default Profile;

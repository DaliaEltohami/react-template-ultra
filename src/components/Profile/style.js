import styled from 'styled-components'

export const ProfileSkills = styled.div`
  padding: 50px 0;
  overflow: hidden;`

export const ProfileSection = styled.div `  width: 50%;
float: left;`

export const ProfileList = styled.ul`
  list-style: none;
`

export const ProfileListItem = styled.li`
  margin-bottom: 8px;
`

export const ProfileListItemSpan = styled.span`  display: inline-block;
width: 100px;
font-weight: ${({$web})=> $web? 'normal': 'bold'};
color: ${({$web})=> $web?  '#eb5424':''};
`


export const Skills = styled.div`
  width: 50%;
  float: left;
`

export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`
export const Bar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;`



.profile_skills .skills .bar .title {
  float: left;
}

.profile_skills .skills .bar .perc {
  float: right;
  margin-right: 100px;
}

.profile_skills .skills .bar .parent {
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
}

.profile_skills .skills .bar .parent span {
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
}

.profile_skills .skills .bar .parent span.sp1 {
  width: 100%;
}

.profile_skills .skills .bar .parent span.sp2 {
  width: 90%;
}

.profile_skills .skills .bar .parent span.sp3 {
  width: 80%;
}

.profile_skills .profile .profile-title,
.profile_skills .skills .skills-title {
  font-size: 40px;
  margin-bottom: 20px;
}

.profile_skills .profile .profile-title span,
.profile_skills .skills .skills-title span {
  font-weight: normal;
}

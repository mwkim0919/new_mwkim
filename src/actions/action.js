import {
  CHANGE_THEME,
  FETCH_EXPERIENCE,
  FETCH_PROJECTS,
  FETCH_SKILLS,
  FETCH_EDUCATION
} from "./types";
import { EXPERIENCES } from "../data/experience";
import { SKILLS } from "../data/skills";
import { EDUCATION } from "../data/education";
import { PROJECTS } from "../data/projects";

export function changeTheme() {
  return {
    type: CHANGE_THEME
  };
}

export function fetchExperience() {
  return {
    type: FETCH_EXPERIENCE,
    payload: EXPERIENCES
  };
}

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
    payload: PROJECTS
  };
}

export function fetchSkills() {
  return {
    type: FETCH_SKILLS,
    payload: SKILLS
  };
}

export function fetchEducation() {
  return {
    type: FETCH_EDUCATION,
    payload: EDUCATION
  };
}

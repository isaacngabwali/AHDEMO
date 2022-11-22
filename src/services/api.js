import axios from "axios";

const api = axios.create({
  baseURL: "https://african.fanitepay.com/africanbase/v1",
});


export const getCauses = async () => {
  try {
    const response = await api.get("cause");
    return response.data;
  } catch (error) {
  }
};
export const getBlogs = async () => {
  try {
    const response = await api.get("blog");
    return response.data;
  } catch (error) {
  }
};
export const getTeams = async () => {
  try {
    const response = await api.get("team");
    return response.data;
  } catch (error) {
  }
};
export const getTestimonies = async () => {
  try {
    const response = await api.get("testimony");
    return response.data;
  } catch (error) {
  }
};
export const getContact = async () => {
  try {
    const response = await api.get("contactpage");
    return response.data;
  } catch (error) {
  }
};
export const getHomepage = async () => {
  try {
    const response = await api.get("homepage");
    return response.data;
  } catch (error) {
  }
};
export const getCounter = async () => {
  try {
    const response = await api.get("counter");
    return response.data;
  } catch (error) {
  }
};
export const getSlider = async () => {
  try {
    const response = await api.get("slider");
    return response.data;
  } catch (error) {
  }
};
export const getGallery = async () => {
  try {
    const response = await api.get("gallery");
    return response.data;
  } catch (error) {
  }
};
export const getAbout = async () => {
  try {
    const response = await api.get("about");
    return response.data;
  } catch (error) {
  }
};
export const getDonate = async () => {
  try {
    const response = await api.get("donateoverview");
    return response.data;
  } catch (error) {
  }
};
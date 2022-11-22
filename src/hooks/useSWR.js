import useSWR from "swr";
import * as api from "../services/api";

export const useFetch = () => {
  return {
      GetCauses: () =>
      useSWR("allCauses", async () => {
        const response = await api.getCauses();
        return response;
      }),
      GetBlogs: () =>
      useSWR("allBlogs", async () => {
        const response = await api.getBlogs();
        return response;
      }),
      GetTeams: () =>
      useSWR("allTeams", async () => {
        const response = await api.getTeams();
        return response;
      }),
      GetTestimonies: () =>
      useSWR("allTestimonies", async () => {
        const response = await api.getTestimonies();
        return response;
      }),
      GetContact: () =>
      useSWR("allContact", async () => {
        const response = await api.getContact();
        return response;
      }),
      GetHomepage: () =>
      useSWR("allHomepage", async () => {
        const response = await api.getHomepage();
        return response;
      }),
      GetCounter: () =>
      useSWR("allCounter", async () => {
        const response = await api.getCounter();
        return response;
      }),
      GetSlider: () =>
      useSWR("allCounter", async () => {
        const response = await api.getSlider();
        return response;
      }),
      GetGallery: () =>
      useSWR("allGallery", async () => {
        const response = await api.getGallery();
        return response;
      }),
      GetAbout: () =>
      useSWR("allGallery", async () => {
        const response = await api.getAbout();
        return response;
      }),
      GetDonate: () =>
      useSWR("allDonate", async () => {
        const response = await api.getDonate();
        return response;
      }),
  };
};
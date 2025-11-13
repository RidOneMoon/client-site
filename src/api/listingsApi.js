import axiosClient from "./axiosClient";

// get all listings
export const fetchListings = async () => {
  const res = await axiosClient.get("/listings");
  return res.data;
};


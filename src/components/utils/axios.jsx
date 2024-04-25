import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTZlYjc2OTM1NDc4YjYyNWU3NGFhMDY1NTVmNzlhYSIsInN1YiI6IjY2MjNkMDg1MmRkYTg5MDBjYWRmYmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DtKADpRAym4UqcxU-gFjzRQdrhJV_E3VOuoiIPgm21U",
  },
});
export default instance
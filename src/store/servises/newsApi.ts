import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CategoriesApiResponse,
  NewsApiResponse,
  ParamsType,
} from "../../interfase/interfase";
import { setNews } from "../slices/newsSlice";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNewsApi: builder.query<NewsApiResponse, ParamsType>({
        keepUnusedDataFor: 0,
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category,
          keyword,
        } = params || {};
        return {
          url: "search",
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keyword,
          },
        };
      },
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setNews(data.news))
      }
    }),
    getLatestNewsApi: builder.query<NewsApiResponse, null>({
      query: () => {
        return {
          url: "latest-news",
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: "available/categories",
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsApiQuery, useGetLatestNewsApiQuery, useGetCategoriesQuery } = newsApi;

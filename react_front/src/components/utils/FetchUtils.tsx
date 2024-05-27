/* eslint-disable no-unused-vars */
import axios, {AxiosResponse} from "axios"
import { useState } from "react"

import './style.css'
import {AllMeetings, AllUserInfo, IAuth, IMeet, IUser} from "../../types/types";




export class HttpApiMethods {


   // Конструктор класса, где вы устанавливаете значение токена

  // URL`s
  APIURL = "http://127.0.0.1:8000/api"
  API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MzQzODc4LCJpYXQiOjE3MTY3MzkwNzgsImp0aSI6IjgyYWU5Yjg5ZTQ1YTQ5YTBhMzE0MGUwMzA3ZTg0ZTJlIiwidXNlcl9pZCI6MX0.6s9lrrF6Jhbm-wbrWZA0ABYI8OV0FSokgLBSCmmYnH0';
  
  // получение фмльма по ID
  GetAllMeetings = async () :  Promise<AllMeetings | null> => {
    
    let innerUrl = this.APIURL + `/events/event/`

    
    try {
      const response = await axios.get(innerUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`
        }
      });
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
      return null
   }
  }
  GetMeetingById = async (id : string) :  Promise<IMeet | null> => {
    
    let innerUrl = this.APIURL + `/events/event/${id}/`

    
    try {
      const response = await axios.get(innerUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`
        }
      });
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
      return null
   }
  }
  GetCommentsByMeet = async (id : string) => {
    
    let innerUrl = this.APIURL + `/events/event/${id}/comments/`

    
    try {
      const response = await axios.get(innerUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`

        }
      });
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
   }
  }
  GetUserById = async (id: number | string) :  Promise<AllUserInfo | null> => {
    
    let innerUrl = this.APIURL + `/users/user/${id}/`

    
    try {
      const response = await axios.get(innerUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.API_KEY}`
        }
      });
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
      return null
   }
  }
  GetUserAuth = async (data : IAuth) : Promise<AllUserInfo | null> => {
    
    let innerUrl = this.APIURL + `/auth/login/`

    
    try {
      const response = await axios.postForm(innerUrl, data);
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
      return null
   }
  }
  GetUsersByMeet = async (id : string) :  Promise<IUser[] | null> => {
      let innerUrl = this.APIURL + `/events/event/${id}/participants/`
      try {
          const response = await axios.get(innerUrl, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.API_KEY}`
              }
          });
          // console.log(response.data);
          return response.data; // Возвращаем данные из ответа
      } catch (error) {
          console.error(error);
          return null
      }
  }
  PostUserMeetReg = async (id : string) => {

      let innerUrl = this.APIURL + `/events/event/${id}/participants/`
      try {
          const response = await axios.postForm(innerUrl, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.API_KEY}`
              },

          });
          // console.log(response.data);
          return response.data; // Возвращаем данные из ответа
      } catch (error) {
          console.error(error);
      }
    }

  

  

}






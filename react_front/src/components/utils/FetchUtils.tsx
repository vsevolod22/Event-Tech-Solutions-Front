/* eslint-disable no-unused-vars */
import axios, {AxiosResponse} from "axios"
import { useState } from "react"

import './style.css'
import {AllMeetings, AllUserInfo, IAuth, IMeet} from "../../types/types";




export class HttpApiMethods {


   // Конструктор класса, где вы устанавливаете значение токена

  // URL`s
  APIURL = "http://127.0.0.1:8000/api"
  API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1MjY2NjY3LCJpYXQiOjE3MTQ2NjE4NjcsImp0aSI6ImI2YTBkZjQ2MWYwNzQ0Zjk5NjcxZDMwZjJjNzJiNjk4IiwidXNlcl9pZCI6MX0.8Qqo1XXw33K_bf2vHdUFt1jCLsBKAW5KJYLSKz6oW1Y';
  
  // получение фмльма по ID
  GetAllMeetings = async () :  Promise<AllMeetings>  => {
    
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
   }
  }
  GetMeetingById = async (id : string) :  Promise<IMeet> => {
    
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
  GetUserById = async (id: string) :  Promise<AllUserInfo> => {
    
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
   }
  }
  GetUserAuth = async (data : IAuth) : Promise<AllUserInfo> => {
    
    let innerUrl = this.APIURL + `/auth/login/`

    
    try {
      const response = await axios.postForm(innerUrl, data);
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
   }
  }
  GetUsersByMeet = async (id : string) => {
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






/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState } from "react"

import './style.css'




export class HttpApiMethods {

  token;
   // Конструктор класса, где вы устанавливаете значение токена
 constructor(token) {
  this.token = token;

}
  // URL`s
  APIURL = "http://127.0.0.1:8000/api"
  API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1MjY2NjY3LCJpYXQiOjE3MTQ2NjE4NjcsImp0aSI6ImI2YTBkZjQ2MWYwNzQ0Zjk5NjcxZDMwZjJjNzJiNjk4IiwidXNlcl9pZCI6MX0.8Qqo1XXw33K_bf2vHdUFt1jCLsBKAW5KJYLSKz6oW1Y';
  
  // получение фмльма по ID
  GetAllMeetings = async () => {
    
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
  GetMeetingById = async (id) => {
    
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
  GetUserById = async (id) => {
    
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
  GetUserAuth = async (data) => {
    
    let innerUrl = this.APIURL + `/auth/login/`

    
    try {
      const response = await axios.postForm(innerUrl, data);
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
   } catch (error) {
      console.error(error);
   }
  }
  

  
  // 
  // Users
  // 
  PostUsers = async (data) => {
    let innerUrl = this.APIURL + `/users`
    const responce = await axios.postForm(innerUrl, data)
    return responce.data
  }
  EditUsers = async (data) => {
    let innerUrl = this.APIURL + `/users`
    const responce = await axios.putForm(innerUrl, data, { headers: {"Authorization" : `Bearer ${this.token}`} }) // 
    return responce.data.id
  }
  GetUsers = async (id) => {
    let innerUrl = this.APIURL + `/users?id=${id}`

    const responce = await axios.get(innerUrl) //

    return responce.data
  }



}






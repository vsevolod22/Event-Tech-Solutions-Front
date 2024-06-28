/* eslint-disable no-unused-vars */
import axios from "axios"


import './style.css'
import { AllUserInfo, IAuth, IComment, ILogin, IMeet, IPostMeet, IPostUser, IUser} from "../../types/types";




export class HttpApiMethods {


   // Конструктор класса, где вы устанавливаете значение токена

  // URL`s
  APIURL = "http://127.0.0.1:8000/api"
  API_KEY = localStorage.getItem("token");
  
  // получение фмльма по ID
  GetAllMeetings = async () :  Promise<IMeet[] | null> => {
    
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
  GetUserAuth = async (data : IAuth) : Promise<ILogin | null> => {
    
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
  PostComment = async (data : string, id: string | number) : Promise<IComment | null> => {
      let innerUrl = this.APIURL + `/events/event/${id}/comments/`

      try {
          const response = await axios.post(innerUrl, data,{
              headers: {
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
  PostUser = async (data : IPostUser) : Promise<AllUserInfo | null> => {

        let innerUrl = this.APIURL + `/users/user/`


        try {
            const response = await axios.postForm(innerUrl, data);
            // console.log(response.data);
            return response.data; // Возвращаем данные из ответа
        } catch (error) {
            console.error(error);
            return null
        }
    }
  PostEvents = async (data : IPostMeet) : Promise<IMeet | null> => {

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






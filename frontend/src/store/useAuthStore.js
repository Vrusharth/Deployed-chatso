import {create} from 'zustand'
import { axiousInstance } from '../lib/axios'

export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningUp:false,
    isLogingIn:false,
    isUpdatingProfile:false,

    isCheckingAuth:true,

    checkAuth: async()=>{
        try {
            const res = await axiousInstance.get("/auth/check")

            set({authUser: res.data})
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({authUser:null})            
        }
        finally{
            set ({isCheckingAuth:false})
        }
    }
})

)
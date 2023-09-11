import * as Yup from "yup";
export const schema = Yup.object({
  name: Yup.string().min(2).max(20).required("Enter your name"),
  lname: Yup.string().min(2).max(20).required("Enter your  last name"),
  
 
 
});

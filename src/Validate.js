export default function Validate(values){
    const errors={};
    
    if(!values.username || !values.username.trim()){
        errors.username = "Username Required"
    }   

    if(!values.email || !values.email.trim()){
        errors.email = "Email Required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email ="Email is Invalid "
    }
    if(!values.mblno || !values.mblno.trim()){
        errors.mblno = "enter your mbl num"
    }
    if(!values.age || !values.age.trim()){
        errors.age = "enter your age"
    }  
    if(!values.gender || !values.gender.trim()){
        errors.gender = "mention your gender"
    } 
    return errors;
}
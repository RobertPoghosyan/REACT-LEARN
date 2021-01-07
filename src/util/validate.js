export const validate = (val) => {
     if(val.length < 8) {
        return "Password must contain more than 7 characters"
    } else {
        return "You are Welcome!";
        
    }
}
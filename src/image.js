
function image(prop){
    switch (prop) {
        case "muy nuboso":
          return "https://images.pexels.com/photos/9665645/pexels-photo-9665645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          break;
        case "cielo claro":
          return "https://images.pexels.com/photos/4210913/pexels-photo-4210913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          break;
        case "lluvia ligera":
            return "https://images.pexels.com/photos/3617453/pexels-photo-3617453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          break;
        default:
         break;
      }
}
export default image();
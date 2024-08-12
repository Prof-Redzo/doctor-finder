const ROLES = {
  doctor: ["POST /services"],
  admin: ["POST /auth/register-doctors"]

} 
const authorizeRole = (req, res, next) => {
 if (ROLES[req.user.role].includes(`${req.method} ${req.url}`)) {
    next();
 } else {
  return res.status(401).send("Unauthorized");
 }
}
  
export default authorizeRole;
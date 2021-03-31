import axios from "axios";

const memberRequest = axios.create({
    baseURL: "/api/web/member",
    withCredentials: true,
})

memberRequest.interceptors.request.use(
    (configs) =>{
        if (localStorage.getItem("token")) {
            configs.headers["User-Authorization"] = localStorage.getItem("token");
        }
        return configs;
    },
    (err) => {
        return Promise.reject(err);
    }
)

/*
const encryptedEmail = RSAEncrypt(value.email);
        const encryptedEmailValidateCode = value.emailValidateCode ? RSAEncrypt(value.emailValidateCode) : undefined;
        const encryptedFirstName = RSAEncrypt(value.firstName);
        const encryptedSecondName = RSAEncrypt(value.secondName);
        const encryptedPassword = RSAEncrypt(value.password);
        const encryptedNewPassword = value.newPassword ? RSAEncrypt(value.newPassword) : undefined
        const encryptedSex = RSAEncrypt(value.sex.toString());
        const encryptedBirthday = RSAEncrypt(moment(value.birthday).format("YYYY-MM-DD"));
        const encryptedPhone = RSAEncrypt(value.phone);
        const encryptedCellphone = RSAEncrypt(value.cellphone);
        const encryptedCity = RSAEncrypt(value.area[0].toString());
        const encryptedDistrict = RSAEncrypt(value.area[1].toString());
        const encryptedAddress = RSAEncrypt(value.address);
*/

// POST
export const apiLogin = (encryptedAccount, encryptedPassword) => memberRequest.post("/login", {account: encryptedAccount, password: encryptedPassword});
export const apiRegister = (encryptedEmail, encryptedPassword, encryptedRegisterValidateCode, encryptedFirstName, encryptedSecondName, encryptedSex, encryptedBirthday, encryptedPhone, encryptedCellphone, encryptedCity, encryptedDistrict, encryptedAddress, encryptedAccount) => memberRequest.post("/register", {account: encryptedAccount, email: encryptedEmail, password: encryptedPassword, birthday: encryptedBirthday, phone: encryptedPhone, cellphone: encryptedCellphone, firstName: encryptedFirstName, secondName: encryptedSecondName, city: encryptedCity, district: encryptedDistrict, address: encryptedAddress, sex: encryptedSex, registerValidateCode: encryptedRegisterValidateCode});
export const apiSchoolVerify = (encryptedSchool, encryptedSchoolEmail, encryptedValidateCode) => memberRequest.post("/schoolVerify", {school: encryptedSchool, schoolEmail: encryptedSchoolEmail, validateCode: encryptedValidateCode});
export const apiEditInformation = (encryptedEmail, encryptedEmailValidateCode, encryptedFirstName, encryptedSecondName, encryptedPassword, encryptedNewPassword, encryptedSex,  encryptedBirthday, encryptedPhone, encryptedCellphone, encryptedCity, encryptedDistrict, encryptedAddress) => memberRequest.post("/editInformation", { email: encryptedEmail, password: encryptedPassword, birthday: encryptedBirthday, phone: encryptedPhone, cellphone: encryptedCellphone, firstName: encryptedFirstName, secondName: encryptedSecondName, city: encryptedCity, district: encryptedDistrict, address: encryptedAddress, sex: encryptedSex, emailValidateCode: encryptedEmailValidateCode, newPassword: encryptedNewPassword})
export const apiGetRegisterValidateCode = (encryptedEmail) => memberRequest.post("/getRegisterValidateCode", {email: encryptedEmail});
export const apiGetSchoolVerifyValidateCode = (encryptedSchoolEmail, encryptedSchool) => memberRequest.post("/getSchoolVerifyValidateCode", {schoolEmail: encryptedSchoolEmail, school: encryptedSchool});
export const apiGetEditInformationValidateCode = (encryptedEmail) => memberRequest.post("/getEditInformationValidateCode", {email: encryptedEmail});


// GET
export const apiGetRegisterFormData = () => memberRequest.get("/getRegisterFormData");
export const apiGetEditInformationFormData = () => memberRequest.get("/getEditInformationFormData");
export const apiGetEditSchoolFormData = () => memberRequest.get("/getEditSchoolFormData");
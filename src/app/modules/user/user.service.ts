import User from "./user.model";

export const addUserToDB = async () => {
  const user = new User({
    id: "779",
    role: "Admin",
    name: {
      firstName: "Farhan",
      middleName: "Hasin",
      lastName: "Dipro",
    },
    password: "123456",
    gender: "male",
    email: "farhan@gmail.com",
    contactNo: "323",
    emergencyContactNo: "322",
    presentAddress: "Lalmatia",
    permanentAddress: "Lalmatia",
  });
  await user.save();
  return user;
};

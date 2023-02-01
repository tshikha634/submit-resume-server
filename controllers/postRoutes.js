const posts = [];

exports.createPost = (req, res, next) => {
  console.log(req.body.values);
  const firstName = req.body.values.firstName;
  const lastName = req.body.values.lastName;
  const gender = req.body.values.gender;
  const dateOfBirth = req.body.values.dateOfBirth;
  const address1 = req.body.values.address1;
  const address2 = req.body.values.address2;
  const city = req.body.values.city;
  const state = req.body.values.state;
  const zipCode = req.body.values.zipCode;
  const country = req.body.values.country;
  const mobileNo = req.body.values.mobileNo;
  const emailAdd = req.body.values.emailAdd;
  const higherEducation = req.body.values.higherEducation;
  const graduation = req.body.values.graduation;
  const postGraduation = req.body.values.postGraduation;
  const higherEducationMarksInPerc = req.body.values.higherEducationMarksInPerc;
  const graduationMarksInPerc = req.body.values.graduationMarksInPerc;
  const postGraduationMarksInPerc = req.body.values.postGraduationMarksInPerc;
  const schoolOfHigherEducation = req.body.values.schoolOfHigherEducation;
  const collegeGraduation = req.body.values.collegeGraduation;
  const collegePostGraduation = req.body.values.collegePostGraduation;
  const totalWorkExpInMonths = req.body.values.totalWorkExpInMonths;
  const jobTitle = req.body.values.jobTitle;
  const employer = req.body.values.employer;
  const startDate = req.body.values.startDate;
  const currentlyWorking = req.body.values.currentlyWorking;
  const achievements = req.body.values.achievements;
  console.log(firstName);
  res.status(201).json({
    message: "Post created successfully",
    post: {
      id: new Date().toISOString(),
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zipCode: zipCode,
      country: country,
      mobileNo: mobileNo,
      emailAdd: emailAdd,
      higherEducation: higherEducation,
      graduation: graduation,
      postGraduation: postGraduation,
      higherEducationMarksInPerc: higherEducationMarksInPerc,
      graduationMarksInPerc: graduationMarksInPerc,
      postGraduationMarksInPerc: postGraduationMarksInPerc,
      schoolOfHigherEducation: schoolOfHigherEducation,
      collegeGraduation: collegeGraduation,
      collegePostGraduation: collegePostGraduation,
      totalWorkExpInMonths: totalWorkExpInMonths,
      jobTitle: jobTitle,
      employer: employer,
      startDate: startDate,
      currentlyWorking: currentlyWorking,
      achievements: achievements,
    },
  });
};

exports.getPost = (req, res, next) => {
  res.send(`<h1>Hello</h1>`);
};

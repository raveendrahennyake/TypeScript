"use strict";
//Enum
var ProjectSturture;
(function (ProjectSturture) {
    ProjectSturture[ProjectSturture["New"] = 0] = "New";
    ProjectSturture[ProjectSturture["Activations"] = 1] = "Activations";
    ProjectSturture[ProjectSturture["Finsihed"] = 2] = "Finsihed";
})(ProjectSturture || (ProjectSturture = {}));
const Mydetails = ProjectSturture.New;
console.log(Mydetails);

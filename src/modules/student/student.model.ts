import { Schema, model } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, TUserName } from "./student.interface";
import bcrypt from "bcrypt"
import config from "../../app/config";

// UserName schema
const UserNameSchema = new Schema<TUserName>(
    {
        firstName: { type: String, required: [true, "First name is required"] },
        middleName: { type: String, required: false },
        lastName: { type: String, required: [true, "Last name is required"] },
    },
    { _id: false }
);

// Guardian schema
const GuardianSchema = new Schema<TGuardian>(
    {
        fatherName: { type: String, required: [true, "Father's name is required"] },
        fatherOccupation: { type: String, required: [true, "Father's occupation is required"] },
        fatherContact: { type: String, required: [true, "Father's contact is required"] },
        motherName: { type: String, required: [true, "Mother's name is required"] },
        motherOccupation: { type: String, required: [true, "Mother's occupation is required"] },
        motherContact: { type: String, required: [true, "Mother's contact is required"] },
    },
);

// Local Guardian schema
const LocalGuardianSchema = new Schema<TLocalGuardian>(
    {
        name: { type: String, required: [true, "Local guardian's name is required"] },
        contact: { type: String, required: [true, "Contact number is required"] },
        occupation: { type: String, required: [true, "Occupation is required"] },
        address: { type: String, required: [true, "Address is required"] },
        relation: { type: String, required: [true, "Relation is required"] },
    },

);



// Student schema
const StudentSchema = new Schema<TStudent>(
    {
        id: { type: String, required: [true, "Student ID is required"], unique: true },
        password: { type: String, required: [true, "password required"] },
        name: { type: UserNameSchema, required: true },
        gender: { type: String, enum: ["male", "female", "other"], required: true },
        email: { type: String, unique: true, required: [true, "Email is required"] },
        dateOfBirth: { type: String, required: [true, "Date of birth is required"] },
        contactNo: { type: String, required: [true, "Contact number is required"] },
        emergencyContactNo: { type: String, required: [true, "Emergency contact number is required"] },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: false,
        },
        presentAddress: { type: String, required: [true, "Present address is required"] },
        permanentAddress: { type: String, required: [true, "Permanent address is required"] },
        guardian: { type: GuardianSchema, required: true },
        localGuardian: { type: LocalGuardianSchema, required: true },
        profileImage: { type: String, required: false },
        isActive: { type: String, enum: ["active", "block"], default: "active", required: true },
        isDeleted: { type: Boolean, default: false }
    },
);


// pre save middleware configuration
StudentSchema.pre('save', async function (next) {
    //    hassing passwords and save in to database
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(
        user.password, Number(config.bcrypt_salt_rounds)
    )
    next()

})

StudentSchema.post('save', function (doc, next) {
    doc.password = ""
    next()
})

StudentSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } })
    next()
})
StudentSchema.pre("findOne", function (next) {
    this.find({ isDeleted: { $ne: true } })
    next()
})
StudentSchema.pre("aggregate", function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
    next()
})


export const Student = model<TStudent>("Student", StudentSchema);

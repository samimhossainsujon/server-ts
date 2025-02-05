import { z } from "zod";

// UserName validation schema
const UserNameZodSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().nonempty("Last name is required"),
});

// Guardian validation schema
const GuardianZodSchema = z.object({
    fatherName: z.string().nonempty("Father's name is required"),
    fatherOccupation: z.string().nonempty("Father's occupation is required"),
    fatherContact: z.string().nonempty("Father's contact is required"),
    motherName: z.string().nonempty("Mother's name is required"),
    motherOccupation: z.string().nonempty("Mother's occupation is required"),
    motherContact: z.string().nonempty("Mother's contact is required"),
});

// LocalGuardian validation schema
const LocalGuardianZodSchema = z.object({
    name: z.string().nonempty("Local guardian's name is required"),
    contact: z.string().nonempty("Contact number is required"),
    occupation: z.string().nonempty("Occupation is required"),
    address: z.string().nonempty("Address is required"),
    relation: z.string().nonempty("Relation is required"),
});

// Student validation schema
const StudentZodSchema = z.object({
    id: z.string().nonempty("Student ID is required"),
    password: z.string().min(1, "Student Password is required"),
    name: UserNameZodSchema,
    gender: z.enum(["male", "female", "other"], {
        required_error: "Gender is required",
    }),
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    dateOfBirth: z.string().nonempty("Date of birth is required"),
    contactNo: z.string().nonempty("Contact number is required"),
    emergencyContactNo: z.string().nonempty("Emergency contact number is required"),
    bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
    presentAddress: z.string().nonempty("Present address is required"),
    permanentAddress: z.string().nonempty("Permanent address is required"),
    guardian: GuardianZodSchema,
    localGuardian: LocalGuardianZodSchema,
    profileImage: z.string().optional(),
    isActive: z.enum(["active", "block"], {
        required_error: "Status (isActive) is required",
    }),
    isDeleted: z.boolean(),
});

export default StudentZodSchema;

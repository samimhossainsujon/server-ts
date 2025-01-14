import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// UserName schema
const UserNameSchema = new Schema<UserName>({
    firstName: { type: String, required: [true, 'fist name is required'] },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true }
}, { _id: false }); 

// Guardian schema
const GuardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContact: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContact: { type: String, required: true },
}, { _id: false });



const LocalGuardianSchema = new Schema<LocalGuardian>({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    occupation: { type: String, required: true },
    address: { type: String, required: true },
    relation: { type: String, required: true },
}, { _id: false });



const StudentSchema = new Schema<Student>({
    id: { type: String, required: true, unique: true }, 
    name: { type: UserNameSchema, required: true }, 
    gender: { type: String, enum: ['male', 'female','other'], required: true },
    email: { type: String, unique: true, required: true},
    dateOfBirth: { type: String, required: true }, 
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: false },  
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImage: { type: String, required: false }, 
    isActive: { type: String, enum: ['active', 'block'], default:'active', required: true },
}, {
    timestamps: true 
});


export const StudentModel = model<Student>('Student', StudentSchema);


export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContact: string;
    motherName: string;
    motherOccupation: string;
    motherContact: string;
};

export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TLocalGuardian = {
    name: string;
    contact: string;
    occupation: string;
    address: string;
    relation: string;
};

export type TBloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type TGender = 'male' | 'female' | 'other';

export type TStudent = {
    id: string;
    password: string;
    name: TUserName;
    gender: TGender;
    email: string;
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: TBloodGroup;
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImage?: string;
    isActive: 'active' | 'block';
    isDeleted:boolean;

};



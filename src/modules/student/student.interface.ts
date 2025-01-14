export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContact: string;
    motherName: string;
    motherOccupation: string;
    motherContact: string;
};

export type UserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type LocalGuardian = {
    name: string;
    contact: string;
    occupation: string; 
    address: string;
    relation: string;
};

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type Gender = 'male' | 'female' | 'other'; 

export type Student = {
    id: string;
    name: UserName; 
    gender: Gender; 
    email: string;
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: BloodGroup;
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian; 
    profileImage?: string; 
    isActive: 'active' | 'block'; 
};

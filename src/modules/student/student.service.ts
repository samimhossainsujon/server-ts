import { TStudent } from "./student.interface";
import { Student } from "./student.model";



const createStudentIntoDB = async (studentData: TStudent) => {
    try {
        const result = await Student.create(studentData);
        return result;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        throw new Error(`Failed to create student: ${errorMessage}`);
    }
};


const getAllStudentsFromDB = async () => {
    try {
        const result = await Student.find();
        return result;
    } catch (error) {
        throw new Error(`Failed to fetch students: ${error instanceof Error ? error.message : error}`);
    }
};



const getSingelStudentFromDB = async (id: string) => {
    try {
        const result = await Student.findById(id);
        return result;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        throw new Error(`Failed to fetch student: ${errorMessage}`);
    }
};



const deleteStudentFromDB = async (id: string) => {
    try {
        const result = await Student.findByIdAndDelete(id);
        return result;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        throw new Error(`Failed to delete student: ${errorMessage}`);
    }
}


export const studentService = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingelStudentFromDB,
    deleteStudentFromDB,
};

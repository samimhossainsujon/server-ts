import { Student } from './student.interface';
import { StudentModel } from './student.model';


const createStudentIntoDB = async (student: Student) => {
    try {
        const result = await StudentModel.create(student);
        return result;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        throw new Error(`Failed to create student: ${errorMessage}`);
    }
};




const getAllStudentsFromDB = async () => {
    try {
        const result = await StudentModel.find();
        return result;
    } catch (error) {
        throw new Error(`Failed to fetch students: ${error instanceof Error ? error.message : error}`);
    }
};



const getSingelStudentFromDB = async (id: string) => {
    try {
        const result = await StudentModel.findById(id);
        return result;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        throw new Error(`Failed to fetch student: ${errorMessage}`);
    }
};



const deleteStudentFromDB = async (id: string) => {
    try {
        const result = await StudentModel.findByIdAndDelete(id);
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

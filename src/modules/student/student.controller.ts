import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const StudentData = req.body.student;
        const result = await studentService.createStudentIntoDB(StudentData);
        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: result
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Student creation failed',
            error: error
        });

    }

}


const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await studentService.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Students fetched successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch students',
            error: error instanceof Error ? error.message : error,
        });
    }
};


const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await studentService.getSingelStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student fetched successfully',
            data: result,
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({
            success: false,
            message: 'Failed to fetch student',
            error: errorMessage,
        });
    }
};

const deleteStudent = (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = studentService.deleteStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            data: result,
        });



    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({
            success: false,
            message: 'Failed to delete student',
            error: errorMessage,
        });
    }
}

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent
};

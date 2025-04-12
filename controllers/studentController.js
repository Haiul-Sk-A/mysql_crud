const db = require("../config/db");

//Get All students list
const getStudent = async (req,res) =>{
    try {
        const [data] = await db.query('SELECT * FROM students');

        if (data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No record found',
            });
        }

        res.status(200).send({
            success: true,
            message: 'All Student Records',
            data,
        });
    }catch(error){
        console.log(error)

        res.status(500).send({
            success:false,
            message:"Error in Get All Student API",
            error
        })
    }
}

const getStudentById = async(req,res)=>{
    try{
        const studentId = req.params.id
        
        if(!studentId){
            return res.status(404).send({
                success:false,
                message:'invalid or provide student id',
                error
            })
        }

        const data = await db.query(`SELEct *FROM students where id=?`,[studentId]);

        if(!data){
            return res.status(202).send({
                success:false,
                message:'no Record found',
                error
            })
        }

        res.status(200).send({
            success:true,
            studentDetails:data[0]
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in get student by id api',
            error
        })
    }
}

// const createStudent = async (req,res)=> {
//     try{
//         const {name, roll_no, fees, medium } = req.body;

//         if(!name ||!roll_no||!fees || !medium){
//             return res.status(500).send({
//                 success:false,
//                 message:"Please provide all field",
//             })
//         }

//         const data = await db.query(`INSERT INTO students (name,roll_no,fees,medium)VALUES(?,?,?,?)`,[ name, roll_no, fees, medium ])

//         if(!data){
//             return res.status(404).send({
//                 success:false,
//                 message:'ERROR in inset query'
//             })
//         }

//         return res.status(201).send({
//             success:true,
//             message:"New Student Record create"
//         })
//     }catch(error){
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:'Error in create student API',
//             error
//         })
//     }
// }

module.exports = { getStudent, getStudentById,createStudent };
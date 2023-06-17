module.exports=(sequelize,DataTypes)=>{
    const CarsTable=sequelize.define("CarsTable",{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
       brand:{
        type:DataTypes.STRING,
        allowNull:false
       },
       model:{
        type:DataTypes.STRING,
        allowNull:false
       },
       description:{
        type:DataTypes.STRING,
        allowNull:true
       },
       price:{
        type:DataTypes.INTEGER,
        allowNull:false
     },
       compartment:{
        type:DataTypes.STRING,
        allowNull:false
       },
       eurostandart:{
        type:DataTypes.INTEGER,
        allowNull:true
       },
       engine:{
        type:DataTypes.STRING,
        allowNull:false
       },
       transmission:{
        type:DataTypes.STRING,
        allowNull:false
       },
       manafacture:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
       mileage:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
       power:{
        type:DataTypes.INTEGER,
        allowNull:true
       },
       doors:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
       phoneNumber:{
        type:DataTypes.INTEGER,
        allowNull:true
       },
       image1:{
        type:DataTypes.STRING,
        allowNull:true
       },
       image2:{
        type:DataTypes.STRING,
        allowNull:true
       },
       image3:{
        type:DataTypes.STRING,
        allowNull:true
       },
       image4:{
        type:DataTypes.STRING,
        allowNull:true
       }
      })
     return CarsTable
    }



//module.exports=(sequelize,DataTypes)=>{
//    const JobsTable=sequelize.define("JobsTable",{
//        title:{
//            type:DataTypes.STRING,
//            allowNull:false
//        },
//        description:{
//            type:DataTypes.STRING,
//            allowNull:false
//        },
//        salary:{
//            type:DataTypes.TINYINT,
//            allowNull:true
//        },
//        phoneNumber:{
//            type:DataTypes.TINYINT,
//            allowNull:true
//        },
//        username:{
//            type:DataTypes.STRING,
//            allowNull:false
//        }
//        
//
//    })
//    return JobsTable
//}
//
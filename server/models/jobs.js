module.exports=(sequelize,DataTypes)=>{
    const JobsTable=sequelize.define("JobsTable",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        salary:{
            type:DataTypes.TINYINT,
            allowNull:true
        },
        phoneNumber:{
            type:DataTypes.TINYINT,
            allowNull:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image1:{
            type:DataTypes.STRING,
            allowNull:true
        },

    })
    return JobsTable
}

//module.exports=(sequelize,DataTypes)=>{
//    const Poster=sequelize.define("Poster",{
//        title:{
//            type:DataTypes.STRING,
//            allowNull:false
//        },
//        category:{
//            type:DataTypes.STRING,
//            allowNull:false
//        },
//        description:{
//            type:DataTypes.STRING,
//            allowNull:false
//        },
//        username:{
//            type:DataTypes.STRING,
//            allowNull:false
//        }
//    })
//    return Poster
//}
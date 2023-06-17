module.exports=(sequelize,DataTypes)=>{
    const Poster=sequelize.define("Poster",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        category:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Poster
}
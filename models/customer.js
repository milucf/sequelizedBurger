module.exports=function(seqeulized,DataTypes){
    var Customer=seqeulized.define("Customer",{
        customer_name: DataTypes.STRING
    });

Customer.associate=function(models){
        Customer.hasMany(models.Burger,{
          onDelete:"cascade"
        });
}

return Customer;
}
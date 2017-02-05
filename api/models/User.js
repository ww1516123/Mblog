/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
   tableName:'user',
  attributes: {
      name:{
         type: 'string',
          maxLength:50,
         required: true
     },
     email:{
         type: 'string',
         maxLength:50,
         required: true,
         unique: true
      },
      state:{
          type: 'string',
          enum: ['active', 'invalid'],
          defaultsTo: 'active'
      },account:{
          type: 'string',
          maxLength:20,
          required: true,
          unique: true
      },password:{
          type: 'string',
          maxLength:20,
          required: true
      }
  }
};


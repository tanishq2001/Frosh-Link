const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const nodeSchema = new Schema({

    id: {
        type: String
       
    },
    url: {
        type: String
       
    },
    title: {
        type: String
    },
    company_name: {
        type: String,
       
    },
    category: {
        type: String
       
    },
    tag: {
        type: String
    },
    job_type: {
        type: String
   },
    publication_date:{
        type : String
       
    },
    candidate_required_location: {
        type: String
    },
        
    salary:{
        type : String
       
    },
    description:{
        type : String
       
    }
},{
    timestamps: true
});
 var Notes = moongoose.model('note', nodeSchema);
 module.exports = Notes;
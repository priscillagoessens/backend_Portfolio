import mongoose from 'mongoose';

const projetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  description: { type: String, required: true },
  git: { type: String, required: true },
  context: { type: String, required: true },
  raccourci: { type: String, required: true },
  technos: [
    {
      value: { type: String, required: true }
    }
  ]
},{
  timestamps: true
});

const Projet = mongoose.model('Projet', projetSchema);

export default Projet;